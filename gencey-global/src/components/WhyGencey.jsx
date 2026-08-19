import {
  Blocks,
  Rocket,
  ShieldCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";


const reasons = [
  {
    id: 1,
    number: "01",
    title: "Built Around Your Business",
    description:
      "We focus on understanding the business challenge first, then design technology around the actual requirement.",
    icon: Blocks,
  },

  {
    id: 2,
    number: "02",
    title: "Modern Technologies",
    description:
      "Our solutions use modern development approaches and technologies suited to today's digital businesses.",
    icon: Rocket,
  },

  {
    id: 3,
    number: "03",
    title: "Designed to Scale",
    description:
      "We build systems with growth in mind so your digital products can evolve alongside your business.",
    icon: ShieldCheck,
  },

  {
    id: 4,
    number: "04",
    title: "A Technology Partner",
    description:
      "Our goal is to create practical digital solutions and support businesses through their technology journey.",
    icon: Handshake,
  },
];


const WhyGencey = () => {

  return (
    <section
      id="about"
      className="
        bg-[#FFF9F5]
        py-28
        md:py-36
      "
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-end
          "
        >

          <div>

            <p
              className="
                text-[#FF914D]
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
              "
            >
              Why Gencey Global
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
              Technology should solve

              <span className="text-[#FF914D]">
                {" "}real problems.
              </span>
            </h2>

          </div>


          <p
            className="
              text-lg
              leading-relaxed
              text-black/55
              max-w-lg
              lg:ml-auto
            "
          >
            We combine business understanding,
            thoughtful design and software engineering
            to create solutions that are practical,
            scalable and built with purpose.
          </p>

        </div>


        {/* Reason cards */}

        <div
          className="
            mt-16
            grid
            md:grid-cols-2
            gap-5
          "
        >

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (

              <div
                key={reason.id}
                className="
                  group

                  bg-white

                  border
                  border-black/10

                  rounded-[28px]

                  p-7
                  md:p-8

                  flex
                  gap-6

                  hover:border-[#FF914D]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]

                  transition-all
                  duration-400
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    shrink-0

                    rounded-2xl

                    bg-[#FF914D]/10
                    text-[#FF914D]

                    flex
                    items-center
                    justify-center

                    group-hover:bg-[#FF914D]
                    group-hover:text-black

                    transition-all
                    duration-300
                  "
                >
                  <Icon size={24} />
                </div>


                {/* Content */}

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      text-[#FF914D]
                    "
                  >
                    {reason.number}
                  </p>


                  <h3
                    className="
                      mt-2
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                    "
                  >
                    {reason.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-black/50
                      leading-relaxed
                    "
                  >
                    {reason.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>


        {/* Small bottom CTA */}

        <div
          className="
            mt-12
            flex
            justify-center
          "
        >

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2

              font-bold
              text-black

              hover:text-[#FF914D]

              transition-colors
            "
          >
            Talk to our team

            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
};


export default WhyGencey;