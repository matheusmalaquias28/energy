import Image from "next/image";

export default function BrandLogo({
  className = "h-6 w-auto sm:h-7",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-energy.svg"
      alt="Energy"
      width={829}
      height={311}
      className={`object-contain object-left ${className}`}
      priority={priority}
    />
  );
}
