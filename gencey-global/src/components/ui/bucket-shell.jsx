import { Package } from "lucide-react";


const BucketShell = ({
  className = "",
}) => {

  return (
    <div
      className={`
        relative
        mx-auto
        aspect-[1.45/1]
        w-full
        ${className}
      `}
    >
      <div className="absolute left-1/2 top-[58%] h-16 w-[72%] -translate-x-1/2 rounded-full bg-black/10 blur-xl" />

      <div className="absolute left-[8%] right-[8%] top-[10%] h-[28%] rounded-[999px] border border-white/70 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md" />

      <div
        className="
          absolute
          left-[10%]
          right-[10%]
          top-[21%]
          bottom-[10%]

          overflow-hidden

          border
          border-white/70

          bg-white/35

          shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_28px_70px_rgba(15,23,42,0.12)]

          backdrop-blur-xl
        "
        style={{
          clipPath:
            "polygon(4% 0, 96% 0, 86% 100%, 14% 100%)",
          borderRadius:
            "28px 28px 44px 44px",
        }}
      >
        <div className="absolute inset-x-[9%] top-[18%] h-px bg-white/70" />
        <div className="absolute left-[16%] top-[14%] h-[72%] w-px rotate-[-7deg] bg-white/55" />
        <div className="absolute right-[18%] top-[14%] h-[72%] w-px rotate-[7deg] bg-white/45" />
        <div className="absolute left-[20%] right-[20%] bottom-[12%] h-[18%] rounded-full bg-[#FF914D]/8 blur-md" />
      </div>

      <div
        className="
          absolute
          left-[6%]
          right-[6%]
          top-[15%]
          h-[18%]

          rounded-[999px]

          border
          border-white/80

          bg-white/65

          shadow-[0_16px_35px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]

          backdrop-blur-xl
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-[35%]

          flex
          h-20
          w-20

          -translate-x-1/2

          items-center
          justify-center

          rounded-[26px]

          border
          border-[#FF914D]/20

          bg-white/75

          text-[#FF914D]

          shadow-[0_18px_35px_rgba(255,145,77,0.16)]

          backdrop-blur-xl
        "
      >
        <Package size={34} />
      </div>

      <div className="absolute left-[18%] top-[24%] h-[44%] w-[9%] rotate-[8deg] rounded-full bg-white/35 blur-sm" />
      <div className="absolute right-[24%] top-[27%] h-[34%] w-[5%] rotate-[8deg] rounded-full bg-white/25 blur-sm" />

      <div
        className="
          absolute
          left-1/2
          bottom-[3%]

          h-[10%]
          w-[56%]

          -translate-x-1/2

          rounded-full

          bg-[#FF914D]/20

          blur-md
        "
      />
    </div>
  );

};


export default BucketShell;
