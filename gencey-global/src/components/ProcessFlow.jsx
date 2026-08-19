import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";


const processSteps = [
  {
    number: "01",
    title: "Discover & Plan",
    description:
      "We understand your business, identify the real problem and define the right digital solution.",
    icon: Search,
  },

  {
    number: "02",
    title: "Design the Experience",
    description:
      "We turn ideas into clear user journeys, interfaces and technical plans before development begins.",
    icon: PenTool,
  },

  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Our team develops scalable software and connects the systems your business needs.",
    icon: Code2,
  },

  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We test, deploy and continuously improve the solution so it performs reliably as your business grows.",
    icon: Rocket,
  },
];


const ProcessFlow = () => {

  const sectionRef = useRef(null);


  /* ==========================================
     TRACK THIS SECTION
  ========================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: [
      "start start",
      "end end",
    ],
  });


  /*
    Make movement slightly smoother.

    Instead of the animation reacting harshly
    to every mouse-wheel movement.
  */

  const progress = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 28,
      mass: 0.25,
    }
  );



  /* ==========================================
     HEADING
  ========================================== */

  const headingOpacity = useTransform(
    progress,
    [0, 0.06],
    [0, 1]
  );


  const headingY = useTransform(
    progress,
    [0, 0.06],
    [30, 0]
  );



  /* ==========================================
     BUSINESS FLOW PILLS
  ========================================== */

  const pillOpacity = useTransform(
    progress,
    [0.05, 0.12],
    [0, 1]
  );


  const pillY = useTransform(
    progress,
    [0.05, 0.12],
    [20, 0]
  );



  /* ==========================================
     ORANGE PROCESS LINE
  ========================================== */

  const lineScale = useTransform(
    progress,
    [0.14, 0.82],
    [0, 1]
  );



  /* ==========================================
     STEP 01
  ========================================== */

  const step1Opacity = useTransform(
    progress,
    [0.12, 0.22],
    [0, 1]
  );

  const step1Y = useTransform(
    progress,
    [0.12, 0.22],
    [45, 0]
  );

  const step1Scale = useTransform(
    progress,
    [0.12, 0.22],
    [0.9, 1]
  );



  /* ==========================================
     STEP 02
  ========================================== */

  const step2Opacity = useTransform(
    progress,
    [0.30, 0.40],
    [0, 1]
  );

  const step2Y = useTransform(
    progress,
    [0.30, 0.40],
    [45, 0]
  );

  const step2Scale = useTransform(
    progress,
    [0.30, 0.40],
    [0.9, 1]
  );



  /* ==========================================
     STEP 03
  ========================================== */

  const step3Opacity = useTransform(
    progress,
    [0.48, 0.58],
    [0, 1]
  );

  const step3Y = useTransform(
    progress,
    [0.48, 0.58],
    [45, 0]
  );

  const step3Scale = useTransform(
    progress,
    [0.48, 0.58],
    [0.9, 1]
  );



  /* ==========================================
     STEP 04
  ========================================== */

  const step4Opacity = useTransform(
    progress,
    [0.66, 0.76],
    [0, 1]
  );

  const step4Y = useTransform(
    progress,
    [0.66, 0.76],
    [45, 0]
  );

  const step4Scale = useTransform(
    progress,
    [0.66, 0.76],
    [0.9, 1]
  );



  const animationValues = [
    {
      opacity: step1Opacity,
      y: step1Y,
      scale: step1Scale,
    },

    {
      opacity: step2Opacity,
      y: step2Y,
      scale: step2Scale,
    },

    {
      opacity: step3Opacity,
      y: step3Y,
      scale: step3Scale,
    },

    {
      opacity: step4Opacity,
      y: step4Y,
      scale: step4Scale,
    },
  ];



  return (

    <section
      id="process"
      className="
        relative
        bg-white
      "
    >

      <div
        ref={sectionRef}
        className="
          relative
          h-auto
          lg:h-[350vh]
        "
      >

        <div
          className="
            relative
            min-h-screen
            lg:sticky
            lg:top-20
            lg:h-[calc(100vh-5rem)]
            lg:min-h-0
            overflow-hidden
            bg-white
          "
        >

          {/* ======================================
              BACKGROUND
          ====================================== */}

          <div
            className="
              absolute
              inset-0

              opacity-[0.025]

              pointer-events-none
            "

            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  #000 1px,
                  transparent 1px
                ),

                linear-gradient(
                  to bottom,
                  #000 1px,
                  transparent 1px
                )
              `,

              backgroundSize: "70px 70px",
            }}
          />


          {/* glow */}

          <div
            className="
              absolute

              right-[-100px]
              top-[-100px]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#FF914D]/10

              blur-[130px]

              pointer-events-none
            "
          />



          <div
            className="
              relative
              z-10

              flex
              min-h-screen
              items-center
              py-20
              lg:h-full
              lg:min-h-0
              lg:py-0
            "
          >

            <div
              className="
                max-w-7xl
                mx-auto

                w-full

                px-6
                lg:px-8
              "
            >


        {/* ======================================
            HEADING
        ====================================== */}

        <motion.div
          style={{
            opacity: headingOpacity,
            y: headingY,
          }}

          className="
            max-w-3xl
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-[64px]

              leading-[1.02]

              font-bold

              tracking-normal

              text-black
            "
          >

            From business challenge

            <span
              className="
                text-[#FF914D]
              "
            >
              {" "}to digital impact.
            </span>

          </h2>


          <p
            className="
              mt-5

              max-w-2xl

              text-lg

              leading-8

              text-black/55
            "
          >
            Every solution starts by understanding
            the problem. We combine strategy, design
            and technology to turn that challenge into
            a reliable digital product.
          </p>

        </motion.div>



        {/* ======================================
            YOUR BUSINESS → GENCEY → RESULTS
        ====================================== */}

        <motion.div
          style={{
            opacity: pillOpacity,
            y: pillY,
          }}

          className="
            mt-10
            lg:mt-12

            flex
            flex-wrap

            items-center

            gap-3
          "
        >

          <div
            className="
              rounded-full

              bg-black

              px-5
              py-3

              text-sm
              font-bold

              text-white
            "
          >
            Your Business
          </div>


          <ArrowRight
            size={17}
            className="
              text-[#FF914D]
            "
          />


          <div
            className="
              rounded-full

              bg-[#FF914D]

              px-5
              py-3

              text-sm
              font-bold

              text-black

              shadow-[0_8px_25px_rgba(255,145,77,0.20)]
            "
          >
            Gencey Global
          </div>


          <ArrowRight
            size={17}
            className="
              text-[#FF914D]
            "
          />


          <div
            className="
              rounded-full

              border
              border-black/10

              bg-white

              px-5
              py-3

              text-sm
              font-bold

              text-black
            "
          >
            Better Results
          </div>

        </motion.div>



        {/* ======================================
            PROCESS TIMELINE
        ====================================== */}

        <div
          className="
            relative

            mt-12
            lg:mt-14
          "
        >


          {/* ------------------------------------
              MOBILE BACKGROUND LINE
          ------------------------------------ */}

          <div
            className="
              absolute
              bottom-0
              left-[36px]
              top-0
              w-[2px]
              bg-black/10
              lg:hidden
            "
          />


          {/* ------------------------------------
              MOBILE DRAWING ORANGE LINE
          ------------------------------------ */}

          <motion.div
            style={{
              scaleY: lineScale,
            }}

            className="
              absolute
              bottom-0
              left-[36px]
              top-0
              w-[2px]
              origin-top
              bg-[#FF914D]
              lg:hidden
            "
          />


          {/* ------------------------------------
              BACKGROUND LINE
          ------------------------------------ */}

          <div
            className="
              absolute

              left-[6%]
              right-[6%]

              top-[36px]

              hidden
              lg:block

              h-[2px]

              bg-black/10
            "
          />


          {/* ------------------------------------
              DRAWING ORANGE LINE
          ------------------------------------ */}

          <motion.div
            style={{
              scaleX: lineScale,
            }}

            className="
              absolute

              left-[6%]
              right-[6%]

              top-[36px]

              hidden
              lg:block

              h-[2px]

              origin-left

              bg-[#FF914D]
            "
          />



          {/* ====================================
              STEPS
          ==================================== */}

          <div
            className="
              grid

              gap-6
              sm:gap-8

              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {processSteps.map(
              (
                step,
                index
              ) => {

                const Icon =
                  step.icon;

                const animation =
                  animationValues[index];


                return (

                  <motion.div
                    key={step.number}

                    style={{
                      opacity:
                        animation.opacity,

                      y:
                        animation.y,

                      scale:
                        animation.scale,
                    }}

                    className="
                      relative
                      pl-24
                      lg:pl-0
                    "
                  >


                    {/* ==========================
                        ICON NODE
                    ========================== */}

                    <div
                      className="
                        absolute
                        z-20

                        left-0
                        top-0

                        ml-1

                        flex

                        h-[72px]
                        w-[72px]

                        items-center
                        justify-center

                        rounded-full

                        border-[6px]
                        border-white

                        bg-black

                        text-[#FF914D]

                        shadow-[0_10px_25px_rgba(0,0,0,0.16)]

                        transition-transform
                        duration-300

                        hover:scale-110

                        lg:relative
                        lg:left-auto
                        lg:top-auto
                      "
                    >

                      <Icon
                        size={25}
                        strokeWidth={2}
                      />

                    </div>



                    {/* ==========================
                        CARD
                    ========================== */}

                    <div
                      className="
                        mt-0
                        lg:mt-5

                        min-h-[230px]
                        lg:min-h-[250px]

                        rounded-[24px]

                        border
                        border-black/10

                        bg-white/80

                        p-6

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:-translate-y-2

                        hover:border-[#FF914D]/40

                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                      "
                    >

                      <p
                        className="
                          text-sm

                          font-bold

                          text-[#FF914D]
                        "
                      >
                        {step.number}
                      </p>


                      <h3
                        className="
                          mt-6

                          text-xl

                          font-bold

                          tracking-normal

                          text-black
                        "
                      >
                        {step.title}
                      </h3>


                      <p
                        className="
                          mt-5

                          text-base

                          leading-7

                          text-black/50
                        "
                      >
                        {step.description}
                      </p>

                    </div>

                  </motion.div>

                );

              }
            )}

          </div>

        </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};


export default ProcessFlow;
