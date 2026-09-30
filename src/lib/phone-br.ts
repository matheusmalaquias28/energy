/**
 * Máscara de telefone brasileiro com DDD.
 * Fixo: (XX) XXXX-XXXX
 * Celular (9 após o DDD): (XX) XXXXX-XXXX
 * Aceita colagem com +55.
 */
export function formatBrazilPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");

  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    digits = digits.slice(2);
  }

  digits = digits.slice(0, 11);

  const isMobile = digits[2] === "9";
  if (!isMobile && digits.length > 10) {
    digits = digits.slice(0, 10);
  }

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  const headLength = isMobile ? 5 : 4;
  const head = rest.slice(0, headLength);
  const tail = rest.slice(headLength);

  return tail ? `(${ddd}) ${head}-${tail}` : `(${ddd}) ${head}`;
}

export function digitsOnly(s: string): string {
  return s.replace(/\D/g, "");
}
