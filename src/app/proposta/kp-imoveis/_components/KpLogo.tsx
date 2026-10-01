export function KpLogo({ className, color = "#C3A377" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 179 157" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KP Imóveis">
      <path d="M70.9666 31.8631L124.866 0.0351562H178.441V39.9389L70.9666 102.027H178.441V156.325H151.76L70.9666 102.027V100.745V31.8631Z" fill={color} />
      <rect width="52.564" height="156.77" fill={color} />
    </svg>
  );
}
