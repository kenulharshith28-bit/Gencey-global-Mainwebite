import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

import { caseStudies } from "../data/caseStudies";


const CaseStudies = () => {

  const [activeIndex, setActiveIndex] = useState(0);


  const nextSlide = () => {

    setActiveIndex((currentIndex) => {

      if (currentIndex === caseStudies.length - 1) {
        return 0;
      }

      return currentIndex + 1;

    });

  };


  const previousSlide = () => {

    setActiveIndex((currentIndex) => {

      if (currentIndex === 0) {
        return caseStudies.length - 1;
      }

      return currentIndex - 1;

    });

  };


  const activeCaseStudy =
    caseStudies[activeIndex];


  return (
    <section
      id="work"
      className="
        relative
        bg-white
        py-28
        md:py-36
        overflow-hidden
      "
    >

      {/* Orange decoration */}

      <div
        className="
          absolute
          top-20
          left-[-180px]
          w-[450px]
          h-[450px]
          bg-[#FF914D]
          opacity-[0.08]
          blur-[150px]
          rounded-full
          pointer-events-none
        "
      />


      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-10
          "
        >

          <div className="max-w-3xl">

            <p
              className="
                text-[#FF914D]
                uppercase
                tracking-[0.2em]
                text-sm
                font-bold
              "
            >
              Our Work
            </p>


            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-black
              "
            >
              Solutions designed to create

              <span className="text-[#FF914D]">
                {" "}real impact.
              </span>

            </h2>


            <p
              className="
                mt-6
                text-lg
                text-black/55
                leading-relaxed
                max-w-2xl
              "
            >
              Explore how digital strategy,
              software engineering and automation
              can turn business challenges into
              practical solutions.
            </p>

          </div>


          {/* Navigation buttons */}

          <div className="flex gap-3">

            <button
              onClick={previousSlide}
              aria-label="Previous case study"
              className="
                w-12
                h-12
                rounded-full
                border
                border-black/10
                bg-white
                text-black

                flex
                items-center
                justify-center

                hover:bg-black
                hover:text-white
                hover:border-black

                transition-all
                duration-300
              "
            >
              <ArrowLeft size={19} />
            </button>


            <button
              onClick={nextSlide}
              aria-label="Next case study"
              className="
                w-12
                h-12
                rounded-full
                bg-[#FF914D]
                text-black

                flex
                items-center
                justify-center

                hover:scale-105

                transition-transform
                duration-300
              "
            >
              <ArrowRight size={19} />
            </button>

          </div>

        </div>


        {/* ================= CASE STUDY ================= */}

        <div
          key={activeCaseStudy.id}
          className="
            mt-16

            grid
            lg:grid-cols-[0.9fr_1.1fr]

            bg-[#FFF9F5]
            border
            border-black/10

            rounded-[36px]

            overflow-hidden

            shadow-[0_25px_80px_rgba(0,0,0,0.06)]

            animate-[fadeIn_0.4s_ease]
          "
        >

          {/* LEFT SIDE */}

          <div
  className="
    relative
    bg-black
    text-white
    p-8
    md:p-12
    min-h-[520px]
    flex
    flex-col
    justify-between
    overflow-hidden
  "
>

  {/* ================= VIDEO BACKGROUND ================= */}

  {activeCaseStudy.video && (
    <video
      key={activeCaseStudy.video}
      autoPlay
      loop
      muted
      playsInline
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        z-0
      "
    >
      <source
        src={activeCaseStudy.video}
        type="video/mp4"
      />
    </video>
  )}


  {/* ================= DARK OVERLAY ================= */}

  <div
    className="
      absolute
      inset-0
      z-[1]
      bg-black/65
    "
  />


  {/* ================= BOTTOM GRADIENT ================= */}

  <div
    className="
      absolute
      inset-0
      z-[2]
      bg-gradient-to-b


      to-black/2
    "
  />


  {/* ================= ORANGE GLOW ================= */}

      <div
        className="
          absolute
          top-[-100px]
          right-[-100px]
          z-[3]
          w-80
          h-80
          opacity-20
          blur-[120px]
          rounded-full
        "
      />


       {/* ================= VIDEO BACKGROUND ================= */}

  {activeCaseStudy.video && (
    <video
      key={activeCaseStudy.video}
      autoPlay
      loop
      muted
      playsInline
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        z-0
      "
    >
      <source
        src={activeCaseStudy.video}
        type="video/mp4"
      />
    </video>
  )}

  {/* ================= DARK OVERLAY ================= */}

  <div
    className="
      absolute
      inset-0
      z-[1]
      
    "
  />


  {/* ================= BOTTOM GRADIENT ================= */}

  <div
    className="
      absolute
      inset-0
      z-[2]
    "
  />


  {/* ================= ORANGE GLOW ================= */}

  <div
    className="
      absolute
      top-[-100px]
      right-[-100px]
      z-[3]
      w-80
      h-80
      opacity-20
      blur-[120px]
      rounded-full
    "
  />


  {/* YOUR EXISTING CONTENT BELOW */}

            {/* Glow */}

            <div
              className="
                absolute
                top-[-100px]
                right-[-100px]
                w-80
                h-80
                bg-[#FF914D]
                opacity-20
                blur-[120px]
                rounded-full
              "
            />


            <div className="relative z-10">

              {/* Project number */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-white/30
                    text-sm
                    font-semibold
                  "
                >
                  CASE STUDY
                </span>


                <span
                  className="
                    text-[#FF914D]
                    text-sm
                    font-bold
                  "
                >
                  0{activeIndex + 1}
                </span>

              </div>


              {/* Category */}

              <div
                className="
                  inline-flex
                  mt-10
                  bg-[#FF914D]/10
                  border
                  border-[#FF914D]/20
                  text-[#FF914D]
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-semibold
                "
              >
                {activeCaseStudy.category}
              </div>


              {/* Title */}

              <h3
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-bold
                  tracking-tight
                "
              >
                {activeCaseStudy.title}
              </h3>


              <p
                className="
                  mt-6
                  text-white/55
                  leading-relaxed
                "
              >
                {activeCaseStudy.description}
              </p>

            </div>


            {/* Metric */}

            <div
              className="
                relative
                z-10
                mt-12
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-white/30
                "
              >
                Project Outcome
              </p>


              <div
                className="
                  flex
                  items-center
                  gap-3
                  mt-3
                "
              >

                <BarChart3
                  className="text-[#FF914D]"
                  size={28}
                />


                <p
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-[#FF914D]
                  "
                >
                  {activeCaseStudy.metric}
                </p>

              </div>


              <p
                className="
                  mt-2
                  text-sm
                  text-white/40
                "
              >
                {activeCaseStudy.metricLabel}
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="
              p-8
              md:p-12
              lg:p-14
            "
          >

            {/* Challenge */}

            <CaseDetail
              number="01"
              title="The Challenge"
              text={activeCaseStudy.challenge}
            />


            <div
              className="
                h-px
                bg-black/10
                my-9
              "
            />


            {/* Solution */}

            <CaseDetail
              number="02"
              title="The Solution"
              text={activeCaseStudy.solution}
            />


            {/* Tech stack */}

            <div className="mt-10">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  font-bold
                  text-black/35
                "
              >
                Technologies
              </p>


              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-4
                "
              >

                {activeCaseStudy.technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                      className="
                        px-4
                        py-2
                        bg-white
                        border
                        border-black/10
                        rounded-full
                        text-sm
                        font-semibold
                        text-black/65

                        hover:border-[#FF914D]
                        transition-colors
                      "
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


            {/* Bottom */}

            <div
              className="
                mt-12
                pt-8
                border-t
                border-black/10

                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-black/45
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-[#FF914D]"
                />

                Custom solution
              </div>


              <button
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-black
                  font-bold

                  hover:text-[#FF914D]

                  transition-colors
                "
              >
                View Case Study

                <ArrowUpRight size={18} />
              </button>

            </div>

          </div>

        </div>


        {/* ================= DOTS ================= */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-2
          "
        >

          {caseStudies.map((caseStudy, index) => (

            <button
              key={caseStudy.id}

              onClick={() =>
                setActiveIndex(index)
              }

              aria-label={`Open case study ${index + 1}`}

              className={`
                h-2
                rounded-full
                transition-all
                duration-300

                ${
                  index === activeIndex
                    ? "w-8 bg-[#FF914D]"
                    : "w-2 bg-black/15 hover:bg-black/30"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
};



const CaseDetail = ({
  number,
  title,
  text,
}) => {

  return (
    <div>

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <span
          className="
            text-xs
            font-bold
            text-[#FF914D]
          "
        >
          {number}
        </span>


        <h4
          className="
            text-xl
            font-bold
            text-black
          "
        >
          {title}
        </h4>

      </div>


      <p
        className="
          mt-4
          text-black/55
          leading-relaxed
        "
      >
        {text}
      </p>

    </div>
  );
};


export default CaseStudies;