"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { urbanist } from "@/lib/fonts";
import { formatBrazilPhone } from "@/lib/phone-br";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  telefone: z
    .string()
    .trim()
    .refine((v) => {
      const n = v.replace(/\D/g, "");
      return n.length >= 10 && n.length <= 11;
    }, "Telefone com DDD (10 ou 11 dígitos)"),
  empresa: z.string().trim().min(2, "Informe o nome da empresa"),
});

type FormValues = z.infer<typeof formSchema>;

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-[border-color,box-shadow] placeholder:text-white/25 focus:border-[#FE4101]/50 focus:ring-2 focus:ring-[#FE4101]/20";

export function ContactModal({ open, onClose }: ContactModalProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", telefone: "", empresa: "" },
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setErrorMsg(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          telefone: data.telefone,
          empresa: data.empresa,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Não foi possível enviar.");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Erro de rede. Tente novamente.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className={`relative z-[1] w-full max-w-md rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:p-8 ${urbanist.className}`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-xl border border-white/10 p-2 text-white/50 transition-colors hover:border-white/25 hover:text-white"
              aria-label="Fechar formulário"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <h2
              id="contact-modal-title"
              className="pr-10 text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              Fale com a Energy
            </h2>
            <p className="mt-2 text-sm text-white/45">
              Preencha os dados e retornamos em até 2 horas úteis.
            </p>

            {status === "success" ? (
              <p className="mt-8 rounded-xl border border-[#FE4101]/25 bg-[#FE4101]/[0.08] px-4 py-3 text-sm text-white/90">
                Recebemos seus dados. Em breve entraremos em contato.
              </p>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label htmlFor="contact-nome" className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-white/40">
                    Nome
                  </label>
                  <input
                    id="contact-nome"
                    type="text"
                    autoComplete="name"
                    className={cn(inputClass, errors.nome && "border-red-500/40")}
                    placeholder="Seu nome completo"
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <p className="mt-1.5 text-xs text-red-400/90">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-tel" className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-white/40">
                    Telefone
                  </label>
                  <Controller
                    name="telefone"
                    control={control}
                    render={({ field }) => (
                      <input
                        id="contact-tel"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        className={cn(inputClass, errors.telefone && "border-red-500/40")}
                        placeholder="(11) 98765-4321"
                        {...field}
                        onChange={(e) => {
                          field.onChange(formatBrazilPhone(e.target.value));
                        }}
                      />
                    )}
                  />
                  {errors.telefone && (
                    <p className="mt-1.5 text-xs text-red-400/90">{errors.telefone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-empresa" className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-white/40">
                    Nome da empresa
                  </label>
                  <input
                    id="contact-empresa"
                    type="text"
                    autoComplete="organization"
                    className={cn(inputClass, errors.empresa && "border-red-500/40")}
                    placeholder="Razão social ou marca"
                    {...register("empresa")}
                  />
                  {errors.empresa && (
                    <p className="mt-1.5 text-xs text-red-400/90">{errors.empresa.message}</p>
                  )}
                </div>

                {(status === "error" || errorMsg) && (
                  <p className="text-sm text-red-400/90">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border border-[#FE4101]/40 bg-[#FE4101]/[0.12] py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-[background-color,box-shadow] hover:bg-[#FE4101]/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando…" : "Enviar"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
