import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";


/* =========================================
   WORD REVEAL COMPONENT
========================================= */

const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
}) => {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const words = text.split(" ");


  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
    >

      {words.map((word, index) => {

        const isLast =
          index === words.length - 1;


        return (

          <motion.span
            key={index}

            initial={{
              y: 40,
              opacity: 0,
            }}

            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {}
            }

            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
              inline-block
              relative
            "

            style={{
              marginRight:
                isLast ? 0 : "0.22em",
            }}
          >

            {word}


            {showAsterisk && isLast && (

              <span
                className="
                  absolute
                  top-[0.05em]
                  -right-[0.22em]
                  text-[0.22em]
                  text-[#FF914D]
                "
              >
                *
              </span>

            )}

          </motion.span>

        );

      })}

    </div>
  );
};



/* =========================================
   HERO
========================================= */

const Hero = () => {

  return (

    <section
      id="home"
      className="
        w-full
        bg-white
        px-3
        pt-24
        md:px-5
        md:pt-24
      "
    >

      <div
        className="
          relative

          min-h-[calc(100vh-110px)]

          w-full

          overflow-hidden

          rounded-[28px]
          md:rounded-[36px]

          bg-black
        "
      >


        {/* =====================================
            BACKGROUND VIDEO
        ===================================== */}

        <video
          autoPlay
          loop
          muted
          playsInline

          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover
          "

          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />


        {/* Dark overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-black/25
          "
        />


        {/* Orange color overlay */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-tr

            from-black/70
            via-black/15
            to-[#FF914D]/20
          "
        />


        {/* Bottom readability gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-b

            from-black/10
            via-transparent
            to-black/80
          "
        />


        {/* Noise */}

        <div
          className="
            noise-overlay
            pointer-events-none
            absolute
            inset-0

            opacity-20
            mix-blend-overlay
          "
        />


        {/* =====================================
            SMALL TOP LABEL
        ===================================== */}

        <motion.div

          initial={{
            opacity: 0,
            y: -15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          className="
            absolute
            top-7
            left-7
            md:top-10
            md:left-10

            z-20

            hidden
            sm:flex

            items-center
            gap-3
          "
        >

          <span
            className="
              w-2
              h-2

              rounded-full

              bg-[#FF914D]
            "
          />


          <span
            className="
              text-xs

              uppercase
              tracking-[0.2em]

              font-semibold

              text-white/70
            "
          >
            Digital Innovation
          </span>

        </motion.div>



        {/* =====================================
            TOP RIGHT LABEL
        ===================================== */}

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            duration: 1,
            delay: 0.7,
          }}

          className="
            absolute
            top-7
            right-7
            md:top-10
            md:right-10

            z-20

            text-right
          "
        >

          <p
            className="
              text-[10px]
              md:text-xs

              uppercase

              tracking-[0.15em]

              text-white/45
            "
          >
            Gencey Global
          </p>


          <p
            className="
              mt-1

              text-xs
              md:text-sm

              font-medium

              text-white
            "
          >
            Software · AI · Cloud
          </p>

        </motion.div>



        {/* =====================================
            HERO CONTENT
        ===================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0

            z-10

            px-5
            pb-7

            sm:px-8

            md:px-10
            md:pb-10

            lg:px-12
          "
        >

          <div
            className="
              grid
              grid-cols-12

              gap-5

              items-end
            "
          >


            {/* BIG HEADING */}

            <div
              className="
                col-span-12
                lg:col-span-8
              "
            >

              <p
                className="
                  mb-5

                  text-xs
                  md:text-sm

                  uppercase

                  tracking-[0.2em]

                  font-semibold

                  text-[#FF914D]
                "
              >
                Engineering what's next
              </p>


              <h1
                className="
                  text-[18vw]

                  sm:text-[16vw]

                  md:text-[14vw]

                  lg:text-[10vw]

                  xl:text-[9vw]

                  font-medium

                  leading-[0.80]

                  tracking-[-0.075em]

                  text-white
                "
              >

                <WordsPullUp
                  text="Gencey"
                  showAsterisk
                />

              </h1>


              <h2
                className="
                  mt-2

                  text-[8vw]

                  sm:text-[7vw]

                  md:text-[6vw]

                  lg:text-[4.2vw]

                  xl:text-[3.7vw]

                  font-medium

                  leading-none

                  tracking-[-0.055em]

                  text-white/90
                "
              >

                <WordsPullUp
                  text="Your Style. Your Rule. AI Powered."
                />

              </h2>

            </div>



            {/* RIGHT INFORMATION */}

            <div
              className="
                col-span-12

                lg:col-span-4

                flex
                flex-col

                gap-6

                lg:pb-2
              "
            >

              <motion.p

                initial={{
                  y: 20,
                  opacity: 0,
                }}

                animate={{
                  y: 0,
                  opacity: 1,
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
                  max-w-lg

                  text-sm
                  sm:text-base

                  leading-relaxed

                  text-white/70
                "
              >

                Gencey Global creates intelligent
                software, AI automation, CRM platforms
                and digital products designed around
                real business challenges.

              </motion.p>



              {/* BUTTONS */}

              <motion.div

                initial={{
                  y: 20,
                  opacity: 0,
                }}

                animate={{
                  y: 0,
                  opacity: 1,
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
                  flex
                  flex-col

                  gap-3

                  sm:flex-row
                "
              >


                {/* PRIMARY CTA */}

                <a
                  href="#contact"

                  className="
                    group

                    inline-flex

                    items-center
                    justify-between
                    gap-3

                    w-full

                    rounded-full

                    bg-[#FF914D]

                    py-1.5
                    pl-6
                    pr-1.5

                    font-bold

                    text-black

                    transition-all

                    hover:gap-4

                    sm:w-auto
                  "
                >

                  Start a Project


                  <span
                    className="
                      flex

                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      bg-black

                      transition-transform

                      group-hover:scale-110
                    "
                  >

                    <ArrowRight
                      className="
                        h-4
                        w-4

                        text-white
                      "
                    />

                  </span>

                </a>



                {/* SECONDARY CTA */}

                <a
                  href="#services"

                  className="
                    inline-flex

                    items-center
                    justify-center

                    w-full

                    rounded-full

                    border
                    border-white/30

                    bg-white/10

                    backdrop-blur-md

                    px-6
                    py-3

                    text-sm

                    font-semibold

                    text-white

                    transition-all

                    hover:bg-white
                    hover:text-black

                    sm:w-auto
                  "
                >
                  Explore Services
                </a>

              </motion.div>



              {/* SMALL CAPABILITY LIST */}

              <motion.div

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  delay: 1,
                  duration: 1,
                }}

                className="
                  flex
                  flex-wrap

                  gap-x-5
                  gap-y-2

                  border-t
                  border-white/15

                  pt-5

                  text-[10px]
                  md:text-xs

                  uppercase

                  tracking-[0.13em]

                  text-white/40
                "
              >

                <span>AI</span>

                <span>CRM</span>

                <span>Web</span>

                <span>Mobile</span>

                <span>Cloud</span>

              </motion.div>

            </div>

          </div>


          {/* =====================================
              BOTTOM SCROLL
          ===================================== */}

          <motion.a

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1.2,
            }}

            href="#services"

            className="
              absolute

              right-5
              bottom-7

              hidden
              xl:flex

              items-center
              gap-2

              text-xs

              uppercase

              tracking-[0.15em]

              text-white/40

              transition-colors

              hover:text-[#FF914D]
            "
          >

            Scroll

            <ArrowDown size={14} />

          </motion.a>

        </div>

      </div>

    </section>

  );
};


export default Hero;
