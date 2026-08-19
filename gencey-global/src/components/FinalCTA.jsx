import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import AnimatedShaderBackground
  from "./ui/AnimatedShaderBackground";


const FinalCTA = () => {

  const scrollToAI = () => {

    const section =
      document.getElementById(
        "ai-demo"
      );


    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };


  return (

    <section
      className="
        bg-white

        px-4
        md:px-6

        py-20
        md:py-28
      "
    >

      <div
        className="
          relative

          mx-auto

          min-h-[650px]

          max-w-[1440px]

          overflow-hidden

          rounded-[38px]

          bg-black

          shadow-[0_35px_100px_rgba(0,0,0,0.16)]
        "
      >


        {/* =====================================
            SHADER BACKGROUND
        ===================================== */}

        <AnimatedShaderBackground />


        {/* =====================================
            DARK OVERLAY
        ===================================== */}

        <div
          className="
            absolute
            inset-0

            bg-black/30

            pointer-events-none
          "
        />


        {/* GENCEY ORANGE ATMOSPHERE */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_50%_40%,rgba(255,145,77,0.15),transparent_45%)]

            pointer-events-none
          "
        />


        {/* bottom shade */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/55
            via-transparent
            to-black/10

            pointer-events-none
          "
        />



        {/* =====================================
            CONTENT
        ===================================== */}

        <div
          className="
            relative
            z-20

            flex

            min-h-[650px]

            flex-col

            items-center
            justify-center

            px-6
            py-16

            text-center

            md:px-12
          "
        >


          {/* =================================
              BADGE
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              inline-flex

              items-center
              gap-2

              rounded-full

              border
              border-[#FF914D]/35

              bg-[#FF914D]/10

              px-5
              py-3

              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.10)]
            "
          >

            <Sparkles
              size={16}
              className="
                text-[#FF914D]
              "
            />


            <span
              className="
                text-sm

                font-medium

                text-white/80
              "
            >
              Let's build something meaningful.
            </span>

          </motion.div>



          {/* =================================
              HEADING
          ================================= */}

          <div
            className="
              mt-10

              max-w-6xl
            "
          >

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.8,
                delay: 0.1,
              }}

              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]

                font-bold

                leading-[0.96]

                tracking-[-0.055em]

                text-white
              "
            >

              Have an idea?

            </motion.h2>



            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.8,
                delay: 0.2,
              }}

              className="
                mt-2

                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]

                font-bold

                leading-[0.96]

                tracking-[-0.055em]

                bg-gradient-to-r

                from-[#FFD0B1]
                via-[#FF914D]
                to-[#FF673F]

                bg-clip-text

                text-transparent
              "
            >

              Let's turn it into
              something real.

            </motion.h2>

          </div>



          {/* =================================
              DESCRIPTION
          ================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
              delay: 0.3,
            }}

            className="
              mt-9

              max-w-3xl

              text-base
              md:text-xl

              leading-relaxed

              text-white/65
            "
          >

            Tell us about your business
            challenge, idea or digital
            project and let's explore how
            the right technology can move
            it forward.

          </motion.p>



          {/* =================================
              BUTTONS
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
              delay: 0.4,
            }}

            className="
              mt-10

              flex

              flex-col
              sm:flex-row

              items-center

              gap-4
            "
          >


            {/* PRIMARY */}

            <Link
              to="/contact"

              className="
                group

                inline-flex

                min-w-[230px]

                items-center
                justify-center

                gap-3

                rounded-full

                bg-gradient-to-r

                from-[#FF7A30]
                to-[#FFB000]

                px-8
                py-4

                text-base

                font-bold

                text-black

                shadow-[0_15px_45px_rgba(255,145,77,0.22)]

                transition-all
                duration-300

                hover:scale-[1.04]

                hover:shadow-[0_18px_50px_rgba(255,145,77,0.35)]
              "
            >

              Start a Conversation


              <ArrowRight
                size={18}

                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />

            </Link>



            {/* SECONDARY */}

            <button
              type="button"

              onClick={scrollToAI}

              className="
                group

                inline-flex

                min-w-[210px]

                items-center
                justify-center

                gap-3

                rounded-full

                border
                border-white/20

                bg-white/[0.07]

                px-8
                py-4

                text-base

                font-semibold

                text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:scale-[1.04]

                hover:border-[#FF914D]/50

                hover:bg-[#FF914D]/10
              "
            >

              <MessageCircle
                size={18}
              />

              Try Gencey AI

            </button>

          </motion.div>

        </div>

      </div>

    </section>

  );

};


export default FinalCTA;