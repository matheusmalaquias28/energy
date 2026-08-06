"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

export const SMART_VIDEO_FAST_LOAD_MS = 1500;

function captureFirstFrame(video: HTMLVideoElement): string | null {
  try {
    if (video.videoWidth === 0 || video.videoHeight === 0) return null;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.82);
  } catch {
    return null;
  }
}

type UseSmartVideoOptions = {
  src?: string;
  poster?: string;
  fastLoadMs?: number;
  enabled?: boolean;
};

type UseSmartVideoResult = {
  videoRef: RefObject<HTMLVideoElement | null>;
  allowPlayback: boolean;
  posterSrc: string | null;
  safePlay: () => void;
  safePause: () => void;
};

export function useSmartVideo({
  src,
  poster,
  fastLoadMs = SMART_VIDEO_FAST_LOAD_MS,
  enabled = true,
}: UseSmartVideoOptions): UseSmartVideoResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const allowPlaybackRef = useRef(false);
  const capturedRef = useRef(false);
  const [allowPlayback, setAllowPlayback] = useState(false);
  const [posterSrc, setPosterSrc] = useState<string | null>(poster ?? null);

  useEffect(() => {
    setPosterSrc(poster ?? null);
    capturedRef.current = false;
  }, [poster, src]);

  useEffect(() => {
    if (!enabled || !src?.trim()) {
      allowPlaybackRef.current = false;
      setAllowPlayback(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    allowPlaybackRef.current = false;
    setAllowPlayback(false);
    capturedRef.current = false;

    let cancelled = false;
    let resolved = false;

    const resolveFast = () => {
      if (cancelled || resolved) return;
      resolved = true;
      window.clearTimeout(timeoutId);
      allowPlaybackRef.current = true;
      setAllowPlayback(true);
    };

    const resolveSlow = () => {
      if (cancelled || resolved) return;
      resolved = true;
      allowPlaybackRef.current = false;
      setAllowPlayback(false);
      video.pause();
      video.currentTime = 0;
    };

    const timeoutId = window.setTimeout(resolveSlow, fastLoadMs);

    const onCanPlay = () => resolveFast();

    const onLoadedData = () => {
      if (poster || capturedRef.current) return;
      const frame = captureFirstFrame(video);
      if (!frame || cancelled) return;
      capturedRef.current = true;
      setPosterSrc(frame);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      resolveFast();
      if (!poster && !capturedRef.current) {
        const frame = captureFirstFrame(video);
        if (frame) {
          capturedRef.current = true;
          setPosterSrc(frame);
        }
      }
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, [src, poster, fastLoadMs, enabled]);

  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !allowPlaybackRef.current) return;
    void video.play().catch(() => {});
  }, []);

  const safePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  return {
    videoRef,
    allowPlayback,
    posterSrc,
    safePlay,
    safePause,
  };
}
