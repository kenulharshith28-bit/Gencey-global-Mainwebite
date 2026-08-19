import {
  ArrowUpRight,
  AtSign,
  MessageCircle,
  Share2,
} from "lucide-react";


const Footer = () => {

  const currentYear = new Date().getFullYear();


  return (
    <footer
      className="
        bg-white
        border-t
        border-black/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          pt-16
          pb-8
        "
      >

        {/* ================= TOP ================= */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]
            gap-12
          "
        >

          {/* BRAND */}

          <div>

            <a
              href="#home"
              className="
                text-2xl
                font-bold
                text-black
              "
            >
              GENCEY

              <span className="text-[#FF914D]">
                {" "}GLOBAL
              </span>
            </a>


            <p
              className="
                mt-5
                text-black/50
                leading-relaxed
                max-w-sm
              "
            >
              Building modern digital solutions
              that help businesses work smarter,
              connect better and grow with confidence.
            </p>


            {/* Socials */}

            <div
              className="
                mt-7
                flex
                gap-3
              "
            >

              <SocialButton
                icon={<AtSign size={18} />}
                href="#"
                label="LinkedIn"
              />

              <SocialButton
                icon={<MessageCircle size={18} />}
                href="#"
                label="Facebook"
              />

              <SocialButton
                icon={<Share2 size={18} />}
                href="#"
                label="Instagram"
              />

            </div>

          </div>


          {/* COMPANY */}

          <FooterColumn
            title="Company"
            links={[
              {
                label: "Home",
                href: "#home",
              },
              {
                label: "About",
                href: "#about",
              },
              {
                label: "Our Work",
                href: "#work",
              },
              {
                label: "Contact",
                href: "#contact",
              },
            ]}
          />


          {/* SERVICES */}

          <FooterColumn
            title="Services"
            links={[
              {
                label: "Custom Software",
                href: "#services",
              },
              {
                label: "AI & Automation",
                href: "#services",
              },
              {
                label: "CRM Systems",
                href: "#services",
              },
              {
                label: "Web Development",
                href: "#services",
              },
              {
                label: "Cloud Solutions",
                href: "#services",
              },
            ]}
          />


          {/* CONTACT */}

          <div>

            <h3
              className="
                font-bold
                text-black
              "
            >
              Start a Conversation
            </h3>


            <p
              className="
                mt-4
                text-sm
                text-black/50
                leading-relaxed
              "
            >
              Have an idea or a business challenge?
              Talk to the Gencey Global team.
            </p>


            <a
              href="#contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-2

                text-[#FF914D]
                font-bold

                hover:text-black

                transition-colors
              "
            >
              Contact us

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-16
            pt-7

            border-t
            border-black/10

            flex
            flex-col
            md:flex-row

            justify-between
            gap-5

            text-sm
            text-black/40
          "
        >

          <p>
            © {currentYear} Gencey Global.
            All rights reserved.
          </p>


          <div className="flex gap-6">

            <button className="hover:text-black transition-colors">
              Privacy Policy
            </button>

            <button className="hover:text-black transition-colors">
              Terms
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};



const FooterColumn = ({
  title,
  links,
}) => {

  return (
    <div>

      <h3 className="font-bold text-black">
        {title}
      </h3>


      <div
        className="
          mt-5
          flex
          flex-col
          gap-3
        "
      >

        {links.map((link) => (

          <a
            key={link.label}
            href={link.href}
            className="
              text-sm
              text-black/50

              hover:text-[#FF914D]
              hover:translate-x-1

              transition-all
              duration-300
            "
          >
            {link.label}
          </a>

        ))}

      </div>

    </div>
  );
};



const SocialButton = ({
  icon,
  href,
  label,
}) => {

  return (
    <a
      href={href}
      aria-label={label}
      className="
        w-10
        h-10

        rounded-full

        border
        border-black/10

        flex
        items-center
        justify-center

        text-black

        hover:bg-[#FF914D]
        hover:border-[#FF914D]
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {icon}
    </a>
  );
};


export default Footer;
