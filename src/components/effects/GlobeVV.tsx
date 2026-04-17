"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Vila Velha, Espírito Santo — lat, lon in degrees
const VILA_VELHA = { lat: -20.33, lon: -40.29 };

/** Convert geographic coords to a point on a unit sphere */
function latLonToVec3(lat: number, lon: number, r = 1): THREE.Vector3 {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

// Pseudo-random deterministic float in [0,1] based on seed
function seededRand(n: number) {
  const x = Math.sin(n + 1) * 43758.5453;
  return x - Math.floor(x);
}

export function GlobeVV() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rotating = useRef(true);
  const lastX    = useRef(0);
  const lastY    = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // clientWidth é sempre confiável (container tem largura definida pelo grid)
    const S = wrap.clientWidth;

    /* ── Renderer ─────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(S, S);
    renderer.setClearColor(0x000000, 0);
    Object.assign(renderer.domElement.style, {
      position: "absolute", inset: "0",
      width: "100%", height: "100%",
      cursor: "grab", touchAction: "none",
    });
    wrap.appendChild(renderer.domElement);

    /* ── Scene / Camera ───────────────────────────────────── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100); // square = aspect 1
    camera.position.z = 2.6;

    /* ── Globe group ──────────────────────────────────────── */
    const globe = new THREE.Group();
    // Initial rotation so Brazil faces front
    // lon=-90 faces camera at ry=0; offset to lon≈-40
    globe.rotation.y = 0.87;
    scene.add(globe);

    /* ── Dark sphere (ocean base) ─────────────────────────── */
    const oceanMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.995, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
    );
    globe.add(oceanMesh);

    /* ── Land dots (loaded from world-map texture) ────────── */
    const vertShader = /* glsl */`
      attribute float aSize;
      attribute float aBrightness;
      varying float vBright;
      void main() {
        vBright = aBrightness;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (400.0 / -mvPos.z);
        gl_Position  = projectionMatrix * mvPos;
      }
    `;
    const fragShader = /* glsl */`
      varying float vBright;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.25, d) * 0.85;
        gl_FragColor = vec4(vec3(vBright), alpha);
      }
    `;

    const img = new Image();
    img.onload = () => {
      const IW = img.width;   // 256
      const IH = img.height;  // 128

      const cvs = document.createElement("canvas");
      cvs.width = IW; cvs.height = IH;
      const ctx = cvs.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const px = ctx.getImageData(0, 0, IW, IH).data;

      const positions:   number[] = [];
      const sizes:       number[] = [];
      const brightnesses: number[] = [];
      let idx = 0;

      for (let y = 0; y < IH; y++) {
        for (let x = 0; x < IW; x++) {
          const r = px[(y * IW + x) * 4]; // grayscale value
          if (r < 100) continue;            // skip ocean (dark pixels)

          const lon = (x / IW) * 360 - 180;
          const lat = 90 - (y / IH) * 180;
          const v   = latLonToVec3(lat, lon, 1.002);

          positions.push(v.x, v.y, v.z);

          // Vary size: 3 tiers based on brightness + deterministic jitter
          const rnd  = seededRand(idx);
          const tier = r > 220 ? 1.0 : r > 160 ? 0.65 : 0.38;
          sizes.push((tier + rnd * 0.3) * 0.012);

          // Vary brightness: coastal/brighter pixels = lighter dots
          brightnesses.push(0.28 + (r / 255) * 0.38 + rnd * 0.12);
          idx++;
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position",    new THREE.Float32BufferAttribute(positions,    3));
      geo.setAttribute("aSize",       new THREE.Float32BufferAttribute(sizes,        1));
      geo.setAttribute("aBrightness", new THREE.Float32BufferAttribute(brightnesses, 1));

      const mat = new THREE.ShaderMaterial({
        vertexShader:   vertShader,
        fragmentShader: fragShader,
        transparent: true,
        depthWrite:  false,
      });

      globe.add(new THREE.Points(geo, mat));
    };
    img.src = "/world-dots.png";

    /* ── Vila Velha marker ────────────────────────────────── */
    const mvv  = latLonToVec3(VILA_VELHA.lat, VILA_VELHA.lon, 1.015);
    const pink = 0xfe4101;

    // Core dot
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 16, 16),
      new THREE.MeshBasicMaterial({ color: pink }),
    );
    dot.position.copy(mvv);
    globe.add(dot);

    // Halo / glow ring
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(0.032, 16, 16),
      new THREE.MeshBasicMaterial({ color: pink, transparent: true, opacity: 0.18 }),
    );
    halo.position.copy(mvv);
    globe.add(halo);

    /* ── Ambient occlusion rim (subtle edge glow) ─────────── */
    const rimMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.012, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.03,
        side: THREE.BackSide,
      }),
    );
    globe.add(rimMesh);

    /* ── Animation loop ───────────────────────────────────── */
    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!isDragging.current) globe.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    tick();

    /* ── Drag interaction ─────────────────────────────────── */
    const el = renderer.domElement;

    const onDown = (e: PointerEvent) => {
      isDragging.current = true;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      globe.rotation.y += (e.clientX - lastX.current) * 0.008;
      globe.rotation.x  = Math.max(-0.4, Math.min(0.4,
        globe.rotation.x + (e.clientY - lastY.current) * 0.005,
      ));
      lastX.current = e.clientX;
      lastY.current = e.clientY;
    };
    const onUp = () => { isDragging.current = false; el.style.cursor = "grab"; };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup",   onUp);
    el.addEventListener("pointerleave", onUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup",   onUp);
      el.removeEventListener("pointerleave", onUp);
      renderer.dispose();
      wrap.removeChild(el);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/*
        Square wrapper — its CENTER sits on the TOP edge of the card.
        overflow-hidden on parent clips the top half → shows only bottom hemisphere.
      */}
      <div
        ref={wrapRef}
        className="absolute"
        style={{
          width: "min(75%, 380px)",
          aspectRatio: "1 / 1",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Label */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FE4101] shadow-[0_0_8px_#FE4101]" />
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
          Vila Velha · ES · Brasil
        </span>
      </div>
    </div>
  );
}
