import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  // "narrow" untuk konten teks, "wide" untuk full-bleed section
  size?: "narrow" | "default" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        {
          "max-w-3xl": size === "narrow",
          "max-w-6xl": size === "default",
          "max-w-7xl": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
