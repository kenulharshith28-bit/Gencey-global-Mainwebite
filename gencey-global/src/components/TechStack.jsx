import {
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiWhatsapp,
} from "react-icons/si";

import {
  Cloud,
  Braces,
  Bot,
} from "lucide-react";


const technologies = [
  {
    id: 1,
    name: "React",
    icon: SiReact,
  },
  {
    id: 2,
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    id: 3,
    name: "PHP",
    icon: SiPhp,
  },
  {
    id: 4,
    name: "MySQL",
    icon: SiMysql,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: 6,
    name: "Cloud",
    icon: Cloud,
  },
  {
    id: 7,
    name: "REST APIs",
    icon: Braces,
  },
  {
    id: 8,
    name: "WhatsApp API",
    icon: SiWhatsapp,
  },
  {
    id: 9,
    name: "AI Automation",
    icon: Bot,
  },
];


const TechStack = () => {
  return (
    <section
      className="
        bg-white
        border-y
        border-black/10
        py-12
        overflow-hidden
      "
    >

      {/* Heading */}

      <div className="mb-8">

        <p
          className="
            text-center
            text-xs
            md:text-sm
            font-bold
            tracking-[0.3em]
            uppercase
            text-black/40
          "
        >
          Technologies We Work With
        </p>

      </div>


      {/* Marquee */}

      <div className="relative w-full overflow-hidden">

        {/* Fade left */}

        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-20
            md:w-40
            bg-gradient-to-r
            from-white
            to-transparent
            z-10
            pointer-events-none
          "
        />


        {/* Fade right */}

        <div
          className="
            absolute
            right-0
            top-0
            bottom-0
            w-20
            md:w-40
            bg-gradient-to-l
            from-white
            to-transparent
            z-10
            pointer-events-none
          "
        />


        <div className="tech-marquee">

          {/* FIRST SET */}

          <TechnologyGroup />


          {/* DUPLICATE SET */}

          <TechnologyGroup />

        </div>

      </div>

    </section>
  );
};



const TechnologyGroup = () => {
  return (
    <div className="flex shrink-0 gap-5 pr-5">

      {technologies.map((technology) => {

        const Icon = technology.icon;

        return (

          <div
            key={technology.id}
            className="
              group

              flex
              items-center
              gap-3

              min-w-max

              px-6
              py-3

              rounded-full

              bg-white

              border
              border-black/10

              shadow-sm

              hover:border-[#FF914D]
              hover:bg-[#FFF9F5]

              transition-all
              duration-300
            "
          >

            <Icon
              size={21}
              className="
                text-[#FF914D]

                group-hover:scale-110

                transition-transform
                duration-300
              "
            />


            <span
              className="
                text-sm
                md:text-base

                font-bold
                text-black
              "
            >
              {technology.name}
            </span>

          </div>

        );

      })}

    </div>
  );
};


export default TechStack;