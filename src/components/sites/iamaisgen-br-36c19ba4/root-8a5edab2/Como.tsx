import { LpContactButton } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/LpContactButton";
import { ProcessStepper } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/ProcessStepper";

export function Como() {
  return (
    <section id="processo" className="sec band" style={{ background: "#0a0a0a" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="eyebrow">Como funciona</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 18px",
              maxWidth: "20ch",
            }}
          >
            Do briefing à página publicada, sem complicação.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(242,245,240,0.55)",
              maxWidth: "44ch",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Você não precisa entender de tecnologia. Precisa entregar resultado para o seu cliente.
          </p>
        </div>

        <ProcessStepper />

        <div style={{ textAlign: "center" }}>
          <LpContactButton label="Solicitar orçamento" className="min-w-[237px]" />
        </div>
      </div>
    </section>
  );
}
