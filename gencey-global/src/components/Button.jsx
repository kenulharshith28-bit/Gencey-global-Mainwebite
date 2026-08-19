import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  href = "#",
}) => {

  const styles = {
  primary:
    "bg-[var(--gg-orange)] text-black hover:scale-105 hover:shadow-[0_12px_35px_rgba(255,145,77,0.30)]",

  secondary:
    "bg-white text-black border border-black/15 hover:border-[#FF914D] hover:bg-[#FFF9F5]",
};

  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        px-6
        py-3.5
        rounded-full
        font-semibold
        transition-all
        duration-300
        ${styles[variant]}
      `}
    >
      {children}

      {variant === "primary" && (
        <ArrowRight size={18} />
      )}
    </a>
  );
};

export default Button;