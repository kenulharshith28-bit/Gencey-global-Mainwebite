import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Database,
  Globe2,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCanvas from "../components/services/ServiceCanvas";


/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    id: "software-crm",
    number: "01",
    category: "Custom Systems · Development",
    title: "Software & CRM",
    icon: Database,

    description:
      "Enterprise-grade customer relationship systems, custom internal automations, and CRM integrations made to optimize your workflow — built around how your team actually works, not a generic pipeline.",

    features: [
      "Custom-built CRM tailored to your sales/support process, not a rigid off-the-shelf template",
      "Internal automation tools to remove repetitive manual work",
      "Integrations with WhatsApp, email, and existing business tools",
      "Role-based access so teams only see what's relevant to them",
    ],

    stats: [
      {
        value: "4–8wk",
        label: "Typical build time",
      },
      {
        value: "100%",
        label: "Tailored to your process",
      },
    ],

    technologies: [
      "PHP",
      "MySQL",
      "React",
      "REST APIs",
    ],

    goodFor:
      "Teams currently managing leads or customers in spreadsheets, or outgrowing a generic off-the-shelf CRM.",
  },

  {
    id: "mobile-apps",
    number: "02",
    category: "iOS & Android · Development",
    title: "Mobile Apps",
    icon: Smartphone,

    description:
      "High-performance native companion apps focused on absolute speed, a premium interactive feel, and deep integration with your existing systems.",

    features: [
      "Native iOS and Android builds, or cross-platform where it fits the budget",
      "Push notifications, offline support, and native device features",
      "Connected directly to your CRM or backend — not a bolt-on",
      "App Store / Play Store submission handled end-to-end",
    ],

    stats: [
      {
        value: "6–12wk",
        label: "Typical build time",
      },
      {
        value: "2",
        label: "Platforms covered",
      },
    ],

    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
    ],

    goodFor:
      "Businesses that need a customer-facing or field-team app tied directly to their existing CRM data.",
  },

  {
    id: "web-apps",
    number: "03",
    category: "React & Next.js · Development",
    title: "Web & Web Apps",
    icon: Globe2,

    description:
      "Lightning-fast platforms, database-driven cloud applications, and responsive portals engineered for deep scalability.",

    features: [
      "Marketing sites through to full web applications with logins and dashboards",
      "Built on modern frameworks for speed and long-term maintainability",
      "Responsive by default — works cleanly on mobile, tablet, and desktop",
      "SEO-friendly structure from day one",
    ],

    stats: [
      {
        value: "3–10wk",
        label: "Typical build time",
      },
      {
        value: "A–Z",
        label: "Design to deploy",
      },
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
    ],

    goodFor:
      "Businesses that need a portal, dashboard, or web app beyond what a page-builder can handle.",
  },

  {
    id: "ui-ux",
    number: "04",
    category:
      "High-Fidelity Branding · Design & Marketing",
    title: "UI/UX Design",
    icon: Palette,

    description:
      "Unforgettable navigation paths, responsive design grids, and unified design libraries that drive continuous engagement.",

    features: [
      "Full design systems — components, spacing, and typography rules kept consistent",
      "User flow mapping before any visual design starts",
      "Figma prototypes you can click through before development begins",
      "Handoff-ready specs so nothing gets lost between design and build",
    ],

    stats: [
      {
        value: "2–4wk",
        label: "Typical design phase",
      },
      {
        value: "1",
        label: "Unified design system",
      },
    ],

    technologies: [
      "Figma",
      "Design tokens",
      "Prototyping",
    ],

    goodFor:
      "Products that work functionally but feel dated, inconsistent, or hard to navigate.",
  },

  {
    id: "ecommerce",
    number: "05",
    category: "Converting Shops · Development",
    title: "E-Commerce",
    icon: ShoppingCart,

    description:
      "Immersive shopping systems, simple payment modules, and dynamic checkouts optimized to increase average order value.",

    features: [
      "Custom storefronts or optimized Shopify/WooCommerce builds",
      "Streamlined, low-friction checkout flows",
      "Local and international payment gateway integration",
      "Inventory and order management tied to your CRM",
    ],

    stats: [
      {
        value: "4–8wk",
        label: "Typical build time",
      },
      {
        value: "Multi",
        label: "Payment gateways",
      },
    ],

    technologies: [
      "Shopify",
      "WooCommerce",
      "Stripe",
      "PayHere",
    ],

    goodFor:
      "Retail or product businesses ready to sell online or improve a slow, clunky existing store.",
  },

  {
    id: "seo-marketing",
    number: "06",
    category:
      "Traffic Optimization · Design & Marketing",
    title: "SEO & Marketing",
    icon: TrendingUp,

    description:
      "Organic search positioning, content engineering, and marketing configurations designed to capture qualified demand.",

    features: [
      "Technical SEO audit and fixes (site speed, structure, metadata)",
      "Keyword-driven content strategy tied to what buyers actually search",
      "Analytics and conversion tracking set up properly from the start",
      "Ongoing reporting so you can see what's actually working",
    ],

    stats: [
      {
        value: "Ongoing",
        label: "Engagement model",
      },
      {
        value: "Monthly",
        label: "Reporting cadence",
      },
    ],

    technologies: [
      "Google Search Console",
      "GA4",
      "Ahrefs",
    ],

    goodFor:
      "Businesses with a good site that isn't showing up in search, or with no visibility into what's converting.",
  },

  {
    id: "cloud",
    number: "07",
    category: "Scalable Infrastructure · Strategy",
    title: "Cloud Solutions",
    icon: Cloud,

    description:
      "Safe user auth patterns, microservice backends, load-balanced containers, and secure global data services.",

    features: [
      "Migration from on-prem or shared hosting to cloud-native infrastructure",
      "Auto-scaling setups that handle traffic spikes without manual intervention",
      "Secure authentication and data handling patterns built in from the start",
      "Monitoring and uptime alerting configured before launch",
    ],

    stats: [
      {
        value: "Zero",
        label: "Downtime migrations",
      },
      {
        value: "24/7",
        label: "Monitoring set up",
      },
    ],

    technologies: [
      "AWS",
      "Docker",
      "Nginx",
      "CI/CD",
    ],

    goodFor:
      "Growing systems on hosting that's becoming a bottleneck, or teams needing better reliability guarantees.",
  },

  {
    id: "modernization",
    number: "08",
    category: "Code Renovation · Strategy",
    title: "Tech Modernization",
    icon: Wrench,

    description:
      "Technical refactoring to transition legacy products over into lightweight, high-performance, futureproof modern systems.",

    features: [
      "Audit of legacy code to identify what to keep, refactor, or rebuild",
      "Incremental migration paths so the business doesn't stop running mid-project",
      "Performance and security improvements as part of the rebuild",
      "Documentation left behind so your team isn't dependent on us long-term",
    ],

    stats: [
      {
        value: "Phased",
        label: "Migration approach",
      },
      {
        value: "Docs",
        label: "Included, always",
      },
    ],

    technologies: [
      "Legacy audit",
      "Refactoring",
      "Security review",
    ],

    goodFor:
      "Teams stuck maintaining an old system that's slow, fragile, or too risky to change.",
  },
];


/* =========================================================
   SERVICES PAGE
========================================================= */

const Services = () => {

  const scrollToService = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  return (
    <>
      <Navbar />


      <main className="bg-white">


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative
            overflow-hidden
            border-b
            border-black/5
            bg-[#FFF9F5]
          "
        >

          {/* GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
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


          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-150px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#FF914D]/15
              blur-[150px]
            "
          />


          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
              px-4
              pb-20
              pt-28
              sm:px-6
              md:pb-24
              md:pt-36
              lg:px-8
            "
          >

            <div className="grid items-center gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:gap-14">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.75,
                }}

                className="max-w-5xl"
              >

              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#FF914D]/20
                  bg-white/70
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#FF914D]
                  backdrop-blur-xl
                "
              >

                <Sparkles size={15} />

                What we build

              </div>


              <h1
                className="
                  mt-7
                  max-w-5xl
                  text-[44px]
                  font-bold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-black
                  sm:text-6xl
                  lg:text-[78px]
                "
              >

                Everything we build,

                <span className="text-[#FF914D]">
                  {" "}built around your business.
                </span>

              </h1>


              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-black/55
                  sm:text-lg
                "
              >

                From custom CRMs to cloud infrastructure,
                we design and build digital products around
                the way your business actually works.

              </p>

              </motion.div>


              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 24,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="relative -mx-4 sm:mx-0"
              >

                <ServiceCanvas />

              </motion.div>

            </div>



            {/* SERVICE QUICK NAV */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.2,
              }}

              className="
                mt-12
                flex
                gap-3
                overflow-x-auto
                pb-3
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                lg:flex-wrap
              "
            >

              {services.map(
                (service) => (

                  <button
                    key={service.id}

                    onClick={() =>
                      scrollToService(
                        service.id
                      )
                    }

                    className="
                      shrink-0
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-black/65
                      transition-all
                      duration-300
                      hover:border-[#FF914D]/40
                      hover:bg-[#FFF1E8]
                      hover:text-black
                    "
                  >

                    {service.title}

                  </button>

                )
              )}

            </motion.div>

          </div>

        </section>



        {/* =================================================
            SERVICE GRID
        ================================================= */}

        <section
          className="
            relative
            py-20
            sm:py-24
            lg:py-32
          "
        >

          <div
            className="
              mx-auto
              max-w-7xl
              px-4
              sm:px-6
              lg:px-8
            "
          >


            {/* SECTION INTRO */}

            <div
              className="
                mb-12
                max-w-2xl
                lg:mb-16
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#FF914D]
                "
              >
                Capabilities
              </p>


              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  tracking-[-0.045em]
                  text-black
                  sm:text-5xl
                "
              >

                Pick the problem.

                <span className="text-black/35">
                  {" "}We'll help shape the solution.
                </span>

              </h2>

            </div>



            {/* CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-5
                lg:grid-cols-2
                lg:gap-7
              "
            >

              {services.map(
                (service, index) => (

                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />

                )
              )}

            </div>

          </div>

        </section>



        {/* =================================================
            CTA
        ================================================= */}

        <section
          className="
            px-4
            pb-20
            sm:px-6
            lg:px-8
            lg:pb-28
          "
        >

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              overflow-hidden
              rounded-[30px]
              bg-black
              px-6
              py-16
              text-center
              sm:px-10
              lg:rounded-[38px]
              lg:px-16
              lg:py-24
            "
          >

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-[400px]
                w-[600px]
                -translate-x-1/2
                rounded-full
                bg-[#FF914D]/20
                blur-[150px]
              "
            />


            <div
              className="
                relative
                z-10
                mx-auto
                max-w-3xl
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#FF914D]
                "
              >
                Not sure which service fits?
              </p>


              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >

                Tell us what you're
                working with.

              </h2>


              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-white/55
                  sm:text-lg
                "
              >

                We'll tell you honestly what's actually
                needed and help you find the right way
                forward.

              </p>


              <Link
                to="/contact"

                className="
                  group
                  mt-9
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#FF914D]
                  px-7
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  sm:w-auto
                "
              >

                Book a Free Consultation

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </>
  );
};


/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  index,
}) => {

  const Icon = service.icon;


  return (

    <motion.article
      id={service.id}

      initial={{
        opacity: 0,
        y: 45,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.65,
        delay:
          index % 2 === 0
            ? 0
            : 0.08,
      }}

      className="
        group
        scroll-mt-28
        overflow-hidden
        rounded-[28px]
        border
        border-black/10
        bg-[#FCFCFC]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#FF914D]/35
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]
        sm:rounded-[32px]
      "
    >


      {/* =====================================
          TOP
      ===================================== */}

      <div
        className="
          relative
          border-b
          border-black/[0.06]
          p-6
          sm:p-8
        "
      >

        {/* number */}

        <span
          className="
            absolute
            right-6
            top-6
            text-sm
            font-bold
            text-black/15
            sm:right-8
            sm:top-8
          "
        >
          {service.number}
        </span>


        {/* icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#FFF1E8]
            text-[#FF914D]
            transition-all
            duration-300
            group-hover:rotate-3
            group-hover:scale-105
          "
        >

          <Icon size={24} />

        </div>


        <p
          className="
            mt-7
            text-[11px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#FF914D]
          "
        >
          {service.category}
        </p>


        <h3
          className="
            mt-3
            text-2xl
            font-bold
            tracking-[-0.035em]
            text-black
            sm:text-3xl
          "
        >
          {service.title}
        </h3>


        <p
          className="
            mt-4
            text-sm
            leading-6
            text-black/50
            sm:text-base
            sm:leading-7
          "
        >
          {service.description}
        </p>

      </div>



      {/* =====================================
          CAPABILITIES
      ===================================== */}

      <div
        className="
          p-6
          sm:p-8
        "
      >

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.14em]
            text-black/35
          "
        >
          What's included
        </p>


        <div
          className="
            mt-5
            space-y-4
          "
        >

          {service.features.map(
            (feature) => (

              <div
                key={feature}
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <div
                  className="
                    mt-[2px]
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF1E8]
                    text-[#FF914D]
                  "
                >

                  <Check
                    size={12}
                    strokeWidth={3}
                  />

                </div>


                <p
                  className="
                    text-sm
                    leading-6
                    text-black/60
                  "
                >
                  {feature}
                </p>

              </div>

            )
          )}

        </div>



        {/* =================================
            STATS
        ================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
          "
        >

          {service.stats.map(
            (stat) => (

              <div
                key={stat.label}

                className="
                  rounded-2xl
                  border
                  border-black/[0.06]
                  bg-white
                  p-4
                "
              >

                <p
                  className="
                    text-2xl
                    font-bold
                    tracking-[-0.04em]
                    text-black
                  "
                >
                  {stat.value}
                </p>


                <p
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.09em]
                    text-black/35
                  "
                >
                  {stat.label}
                </p>

              </div>

            )
          )}

        </div>



        {/* =================================
            TECH
        ================================= */}

        <div className="mt-7">

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-black/30
            "
          >
            Technology
          </p>


          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-2
            "
          >

            {service.technologies.map(
              (technology) => (

                <span
                  key={technology}

                  className="
                    rounded-full
                    border
                    border-black/[0.07]
                    bg-white
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-black/55
                  "
                >
                  {technology}
                </span>

              )
            )}

          </div>

        </div>



        {/* =================================
            GOOD FIT
        ================================= */}

        <div
          className="
            mt-7
            rounded-[22px]
            bg-[#FFF7F1]
            p-5
          "
        >

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#FF914D]
            "
          >
            Good fit for
          </p>


          <p
            className="
              mt-2
              text-sm
              leading-6
              text-black/60
            "
          >
            {service.goodFor}
          </p>

        </div>



        {/* CONTACT LINK */}

        <Link
          to="/contact"

          className="
            mt-7
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-black
            transition-colors
            hover:text-[#FF914D]
          "
        >

          Discuss this service

          <ArrowUpRight size={16} />

        </Link>

      </div>

    </motion.article>

  );
};


export default Services;
