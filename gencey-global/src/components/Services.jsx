import {
  Code2,
  Bot,
  Database,
  Globe2,
  Smartphone,
  Cloud,
} from "lucide-react";

import ServiceCard from "./ServiceCard";


const services = [
  {
    id: 1,

    title: "Custom Software",

    description:
      "Tailored software solutions engineered around your business processes, challenges and growth goals.",

    icon: <Code2 size={22} />,
  },

  {
    id: 2,

    title: "AI & Automation",

    description:
      "Intelligent AI-powered solutions that automate conversations, workflows and repetitive business processes.",

    icon: <Bot size={22} />,
  },

  {
    id: 3,

    title: "CRM Systems",

    description:
      "Connected CRM platforms that help businesses manage customers, leads, sales and internal operations.",

    icon: <Database size={22} />,
  },

  {
    id: 4,

    title: "Web Development",

    description:
      "Modern, responsive and high-performance websites and web applications built for real business results.",

    icon: <Globe2 size={22} />,
  },

  {
    id: 5,

    title: "Mobile Applications",

    description:
      "User-focused mobile experiences designed to connect businesses with customers wherever they are.",

    icon: <Smartphone size={22} />,
  },

  {
    id: 6,

    title: "Cloud Solutions",

    description:
      "Secure and scalable cloud infrastructure designed to support modern applications and growing businesses.",

    icon: <Cloud size={22} />,
  },
];


const Services = () => {

  return (
    <section
      id="services"
      className="
        bg-[#FFF9F5]
        py-28
        md:py-36
      "
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Section Header */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-end
            mb-16
          "
        >

          <div>

            <p
              className="
                text-[#FF914D]
                text-sm
                font-bold
                tracking-[0.2em]
                uppercase
                mb-5
              "
            >
              What We Do
            </p>


            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-black
                max-w-2xl
              "
            >
              Solutions built around

              <span className="text-[#FF914D]">
                {" "}your business.
              </span>

            </h2>

          </div>


          <div>

            <p
              className="
                text-black/60
                text-lg
                leading-relaxed
                max-w-lg
                lg:ml-auto
              "
            >
              We combine strategy, technology and design
              to create digital systems that solve real
              business problems and support long-term growth.
            </p>

          </div>

        </div>


        {/* Service Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >

          {services.map((service, index) => (

            <ServiceCard
              key={service.id}

              icon={service.icon}

              number={`0${index + 1}`}

              title={service.title}

              description={service.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
};


export default Services;