import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({
  icon,
  number,
  title,
  description,
  href = "#contact",
}) => {
  const cardRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  // =========================================
  // MOUSE 3D TILT
  // =========================================

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    const rotateX =
      -(y / rect.height) * 5;

    const rotateY =
      (x / rect.width) * 5;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}

      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        y: isHovered ? -8 : 0,
      }}

      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}

      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}

      className="
        group
        relative
        min-h-[460px]
        overflow-hidden

        rounded-[32px]

        border
        border-black/10

        bg-white

        shadow-[0_10px_40px_rgba(0,0,0,0.04)]

        cursor-pointer
      "
    >

      {/* =====================================
          ORANGE GLOW
      ===================================== */}

      <motion.div
        className="
          absolute
          inset-x-0
          bottom-0

          h-[65%]

          pointer-events-none
        "

        animate={{
          opacity: isHovered ? 1 : 0.55,
          scale: isHovered ? 1.08 : 1,
        }}

        transition={{
          duration: 0.45,
        }}

        style={{
          background: `
            radial-gradient(
              ellipse at bottom right,
              rgba(255,145,77,0.40) 0%,
              rgba(255,145,77,0) 65%
            ),

            radial-gradient(
              ellipse at bottom left,
              rgba(255,180,130,0.30) 0%,
              rgba(255,145,77,0) 65%
            )
          `,
          filter: "blur(35px)",
        }}
      />


      {/* =====================================
          CENTRAL ORANGE GLOW
      ===================================== */}

      <motion.div
        className="
          absolute
          bottom-[-100px]
          left-1/2

          h-[280px]
          w-[280px]

          -translate-x-1/2

          rounded-full

          bg-[#FF914D]

          blur-[90px]

          pointer-events-none
        "

        animate={{
          opacity: isHovered ? 0.34 : 0.16,
          scale: isHovered ? 1.15 : 1,
        }}

        transition={{
          duration: 0.45,
        }}
      />


      {/* =====================================
          GLASS REFLECTION
      ===================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-20

          pointer-events-none
        "

        animate={{
          opacity: isHovered ? 0.8 : 0.4,
        }}

        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.9) 0%,
              rgba(255,255,255,0.15) 25%,
              transparent 50%,
              transparent 80%,
              rgba(255,145,77,0.08) 100%
            )
          `,
        }}
      />


      {/* =====================================
          BOTTOM GLOWING BORDER
      ===================================== */}

      <motion.div
        className="
          absolute
          bottom-0
          left-[10%]
          right-[10%]

          h-[2px]

          z-30
        "

        animate={{
          opacity: isHovered ? 1 : 0.45,

          boxShadow: isHovered
            ? "0 0 25px 5px rgba(255,145,77,0.65)"
            : "0 0 15px 2px rgba(255,145,77,0.25)",
        }}

        style={{
          background:
            "linear-gradient(90deg, transparent, #FF914D, transparent)",
        }}
      />


      {/* =====================================
          CONTENT
      ===================================== */}

      <motion.div
        className="
          relative
          z-40

          flex
          h-full
          min-h-[460px]
          flex-col

          p-7
          md:p-8
        "

        animate={{
          z: isHovered ? 25 : 5,
        }}

        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* TOP */}

        <div
          className="
            flex
            items-start
            justify-between
          "
        >

          {/* ICON */}

          <motion.div
            animate={{
              y: isHovered ? -3 : 0,
              z: isHovered ? 35 : 10,
              scale: isHovered ? 1.05 : 1,
            }}

            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              bg-[#FFF1E8]

              text-[#FF914D]

              shadow-[inset_0_0_0_1px_rgba(255,145,77,0.08)]
            "
          >
            {icon}
          </motion.div>


          {/* NUMBER */}

          <motion.span
            animate={{
              z: isHovered ? 20 : 5,
            }}

            className="
              text-sm
              font-bold
              tracking-[0.15em]

              text-black/20

              transition-colors

              group-hover:text-[#FF914D]
            "
          >
            {number}
          </motion.span>

        </div>


        {/* TEXT */}

        <motion.div
          animate={{
            z: isHovered ? 30 : 10,
          }}

          className="mt-14"
        >

          <h3
            className="
              text-2xl
              md:text-[28px]

              font-bold

              tracking-[-0.03em]

              text-black
            "
          >
            {title}
          </h3>


          <p
            className="
              mt-5

              max-w-sm

              text-[15px]
              md:text-base

              leading-7

              text-black/50
            "
          >
            {description}
          </p>

        </motion.div>


        {/* BOTTOM */}

        <motion.div
          animate={{
            z: isHovered ? 35 : 10,
          }}

          className="
            mt-auto

            flex
            items-center
            justify-between

            pt-12
          "
        >

          <span
            className="
              text-sm
              font-bold

              text-black/50

              transition-colors

              group-hover:text-black
            "
          >
            Explore Solution
          </span>


          <motion.a
            href={href}

            aria-label={`Explore ${title}`}

            animate={{
              x: isHovered ? 3 : 0,
              y: isHovered ? -3 : 0,
            }}

            className="
              flex

              h-11
              w-11

              items-center
              justify-center

              rounded-full

              border
              border-black/10

              bg-white

              text-black

              transition-colors

              group-hover:border-[#FF914D]
              group-hover:bg-[#FF914D]
            "
          >
            <ArrowUpRight size={18} />
          </motion.a>

        </motion.div>

      </motion.div>

    </motion.article>
  );
};

export default ServiceCard;