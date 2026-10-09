"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formatBrazilPhone } from "@/lib/phone-br";

const formSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  telefone: z
    .string()
    .trim()
    .refine((v) => {
      const n = v.replace(/\D/g, "");
      return n.length >= 10 && n.length <= 11;
    }, "Informe o WhatsApp com DDD"),
  empresa: z.string().trim().min(2, "Informe o nome da empresa"),
});

type FormValues = z.infer<typeof formSchema>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function LeadForm() {
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

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, origem: "lp-seo-para-empresas" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Não foi possível enviar. Tente de novo.");
        return;
      }
      window.gtag?.("event", "generate_lead", { form: "lp-seo-para-empresas" });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Sem conexão. Verifique sua internet e tente de novo.");
    }
  };

  if (status === "success") {
    return (
      <div className="lead-success" role="status">
        <p className="lead-success-title">Recebemos seus dados.</p>
        <p>Vamos te chamar no WhatsApp em até 2 horas úteis para começar o diagnóstico.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="lead-field">
        <label htmlFor="lead-nome">Nome</label>
        <input
          id="lead-nome"
          type="text"
          autoComplete="name"
          placeholder="Como podemos te chamar"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "lead-nome-err" : undefined}
          {...register("nome")}
        />
        {errors.nome && <p id="lead-nome-err" className="lead-err">{errors.nome.message}</p>}
      </div>

      <div className="lead-field">
        <label htmlFor="lead-tel">WhatsApp</label>
        <Controller
          name="telefone"
          control={control}
          render={({ field }) => (
            <input
              id="lead-tel"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={15}
              placeholder="(27) 99999-0000"
              aria-invalid={!!errors.telefone}
              aria-describedby={errors.telefone ? "lead-tel-err" : undefined}
              {...field}
              onChange={(e) => field.onChange(formatBrazilPhone(e.target.value))}
            />
          )}
        />
        {errors.telefone && <p id="lead-tel-err" className="lead-err">{errors.telefone.message}</p>}
      </div>

      <div className="lead-field">
        <label htmlFor="lead-empresa">Nome da empresa</label>
        <input
          id="lead-empresa"
          type="text"
          autoComplete="organization"
          placeholder="Nome da sua empresa"
          aria-invalid={!!errors.empresa}
          aria-describedby={errors.empresa ? "lead-empresa-err" : undefined}
          {...register("empresa")}
        />
        {errors.empresa && <p id="lead-empresa-err" className="lead-err">{errors.empresa.message}</p>}
      </div>

      {status === "error" && errorMsg && (
        <p className="lead-err lead-err--form" role="alert">{errorMsg}</p>
      )}

      <button type="submit" className="seo-btn seo-btn--block" disabled={isSubmitting}>
        {isSubmitting ? "Enviando…" : "Quero meu diagnóstico"}
      </button>
    </form>
  );
}
