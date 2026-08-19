import { useState } from "react";

import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Send,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCTA from "../components/BookingCTA";


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Custom CRM",
    message: "",
  });


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setFormData((currentData) => ({
      ...currentData,

      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();


    const subject =
      encodeURIComponent(
        `New Gencey Global enquiry from ${formData.name}`
      );


    const body =
      encodeURIComponent(
`Hello Gencey Global,

I would like to discuss a project.

Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Interested In:
${formData.interest}

Message:
${formData.message}

Thank you.`
      );


    window.location.href =
      `mailto:hello@genceyglobal.com?subject=${subject}&body=${body}`;

  };


  return (
    <>

      <Navbar />


      <main>

        {/* =====================================
            CONTACT HERO
        ===================================== */}

        <section
          className="
            relative

            overflow-hidden

            bg-black

            pt-36
            pb-24

            text-white
          "
        >

          <img
            src="/images/contact/contact.avif"
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-45
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/85
              to-black/55
              pointer-events-none
            "
          />

          {/* Orange glow */}

          <div
            className="
              absolute

              right-[-150px]
              top-[-150px]

              h-[500px]
              w-[500px]

              rounded-full

              bg-[#FF914D]

              opacity-20

              blur-[160px]

              pointer-events-none
            "
          />


          <div
            className="
              absolute

              bottom-[-150px]
              left-[20%]

              h-[350px]
              w-[350px]

              rounded-full

              bg-[#FF914D]

              opacity-[0.08]

              blur-[130px]

              pointer-events-none
            "
          />


          {/* Grid background */}

          <div
            className="
              absolute
              inset-0

              opacity-[0.04]

              pointer-events-none
            "

            style={{
              backgroundImage: `
                linear-gradient(to right, #fff 1px, transparent 1px),
                linear-gradient(to bottom, #fff 1px, transparent 1px)
              `,

              backgroundSize:
                "70px 70px",
            }}
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

            {/* Breadcrumb */}

            <div
              className="
                flex
                items-center
                gap-2

                text-sm

                text-white/40
              "
            >

              <a
                href="/"
                className="
                  hover:text-[#FF914D]

                  transition-colors
                "
              >
                Home
              </a>


              <span>/</span>


              <span className="text-white/70">
                Contact
              </span>

            </div>


            <div
              className="
                mt-10
                max-w-4xl
              "
            >
              <div>
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-white/10

                bg-white/[0.05]

                px-4
                py-2

                backdrop-blur-xl
              "
            >

              <Sparkles
                size={15}
                className="
                  text-[#FF914D]
                "
              />


              <span
                className="
                  text-xs

                  font-bold

                  uppercase

                  tracking-[0.16em]

                  text-white/65
                "
              >
                Let's Talk
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                mt-7

                max-w-4xl

                text-5xl
                md:text-6xl
                lg:text-7xl

                font-bold

                leading-[0.95]

                tracking-[-0.05em]
              "
            >

              Tell us what you're

              <span
                className="
                  text-[#FF914D]
                "
              >
                {" "}working with.
              </span>

            </h1>


            <p
              className="
                mt-7

                max-w-2xl

                text-lg

                leading-relaxed

                text-white/55
              "
            >
              Fill in a few details below,
              or book a call directly —
              we'll get back to you within
              one business day.
            </p>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================
            CONTACT CONTENT
        ===================================== */}

        <section
          className="
            relative

            overflow-hidden

            bg-[#FFF9F5]

            py-24
            md:py-32
          "
        >

          {/* background glow */}

          <div
            className="
              absolute

              left-[-120px]
              top-[20%]

              h-[350px]
              w-[350px]

              rounded-full

              bg-[#FF914D]

              opacity-[0.08]

              blur-[120px]
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


            <div
              className="
                grid

                gap-12

                lg:grid-cols-[0.9fr_1.1fr]

                items-start
              "
            >


              {/* =====================================
                  LEFT SIDE
              ===================================== */}

              <div>

                <p
                  className="
                    text-xs

                    font-bold

                    uppercase

                    tracking-[0.18em]

                    text-[#FF914D]
                  "
                >
                  Reach Us Directly
                </p>


                <h2
                  className="
                    mt-4

                    text-3xl
                    md:text-4xl

                    font-bold

                    tracking-tight

                    text-black
                  "
                >
                  Prefer a direct conversation?
                </h2>


                <p
                  className="
                    mt-4

                    max-w-lg

                    text-black/50

                    leading-relaxed
                  "
                >
                  Get in touch through email,
                  Genie or speak with the team
                  directly about your project.
                </p>



                {/* CONTACT CARDS */}

                <div
                  className="
                    mt-10

                    space-y-4
                  "
                >

                  <ContactCard

                    icon={
                      <Mail size={21} />
                    }

                    label="Email"

                    value="hello@genceyglobal.com"

                    subtext="Usually replies within one business day"

                    href="mailto:hello@genceyglobal.com"

                  />


                  <ContactCard

                    icon={
                      <MessageCircle size={21} />
                    }

                    label="WhatsApp"

                    value="Chat with Genie, our AI assistant"

                    subtext="For quick questions, any time"

                    href="/#ai-demo"

                  />


                  <ContactCard

                    icon={
                      <MapPin size={21} />
                    }

                    label="Based In"

                    value="Kandy, Sri Lanka"

                    subtext="Working with clients globally"

                  />

                </div>



                {/* SOCIALS */}

                <div
                  className="
                    mt-7

                    flex
                    flex-wrap

                    gap-3
                  "
                >

                  <SocialButton
                    icon={
                      <FaLinkedinIn size={17} />
                    }

                    label="LinkedIn"
                  />


                  <SocialButton
                    icon={
                      <FaInstagram size={17} />
                    }

                    label="Instagram"
                  />


                  <SocialButton
                    icon={
                      <FaXTwitter size={17} />
                    }

                    label="X / Twitter"
                  />

                </div>



                {/* BOOK CARD */}

                <div
                  className="
                    mt-8

                    relative

                    overflow-hidden

                    rounded-[28px]

                    border
                    border-[#FF914D]/20

                    bg-white

                    p-7

                    shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                  "
                >

                  <div
                    className="
                      absolute

                      right-[-60px]
                      top-[-60px]

                      h-40
                      w-40

                      rounded-full

                      bg-[#FF914D]

                      opacity-15

                      blur-[60px]
                    "
                  />


                  <div
                    className="
                      relative
                      z-10
                    "
                  >

                    <div
                      className="
                        flex

                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-xl

                        bg-[#FFF1E8]

                        text-[#FF914D]
                      "
                    >

                      <CalendarDays size={20} />

                    </div>


                    <h3
                      className="
                        mt-5

                        text-xl

                        font-bold

                        text-black
                      "
                    >
                      Prefer to just talk it through?
                    </h3>


                    <p
                      className="
                        mt-2

                        text-sm

                        leading-relaxed

                        text-black/45
                      "
                    >
                      Skip the form — use our
                      Book a Free Call option to
                      choose a date and time.
                    </p>


                    <a
                      href="#contact-form"

                      className="
                        group

                        mt-5

                        inline-flex

                        items-center

                        gap-2

                        font-bold

                        text-[#FF914D]

                        hover:text-black

                        transition-colors
                      "
                    >
                      Send us your details

                      <ArrowRight
                        size={17}

                        className="
                          transition-transform

                          group-hover:translate-x-1
                        "
                      />

                    </a>

                  </div>

                </div>

              </div>



              {/* =====================================
                  CONTACT FORM
              ===================================== */}

              <div
                id="contact-form"

                className="
                  relative

                  overflow-hidden

                  rounded-[36px]

                  bg-black

                  p-7
                  md:p-10

                  shadow-[0_30px_90px_rgba(0,0,0,0.15)]
                "
              >

                {/* orange glow */}

                <div
                  className="
                    absolute

                    right-[-100px]
                    top-[-100px]

                    h-72
                    w-72

                    rounded-full

                    bg-[#FF914D]

                    opacity-20

                    blur-[100px]
                  "
                />


                {/* glass shine */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_30%,transparent_70%,rgba(255,145,77,0.06))]

                    pointer-events-none
                  "
                />


                <div
                  className="
                    relative
                    z-10
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
                    Project Enquiry
                  </p>


                  <h2
                    className="
                      mt-4

                      text-3xl
                      md:text-4xl

                      font-bold

                      tracking-tight

                      text-white
                    "
                  >
                    Send us a message.
                  </h2>


                  <p
                    className="
                      mt-3

                      text-sm

                      leading-relaxed

                      text-white/45
                    "
                  >
                    Tell us roughly what you need —
                    we'll follow up with specifics.
                  </p>



                  <form
                    onSubmit={handleSubmit}

                    className="
                      mt-9
                    "
                  >


                    {/* NAME + COMPANY */}

                    <div
                      className="
                        grid

                        sm:grid-cols-2

                        gap-4
                      "
                    >

                      <ContactField
                        label="Name"

                        name="name"

                        value={
                          formData.name
                        }

                        onChange={
                          handleChange
                        }

                        placeholder="Your name"

                        required
                      />


                      <ContactField
                        label="Company"

                        name="company"

                        value={
                          formData.company
                        }

                        onChange={
                          handleChange
                        }

                        placeholder="Company (optional)"
                      />

                    </div>



                    {/* EMAIL + PHONE */}

                    <div
                      className="
                        grid

                        sm:grid-cols-2

                        gap-4
                      "
                    >

                      <ContactField
                        label="Email"

                        name="email"

                        type="email"

                        value={
                          formData.email
                        }

                        onChange={
                          handleChange
                        }

                        placeholder="you@company.com"

                        required
                      />


                      <ContactField
                        label="Phone"

                        name="phone"

                        value={
                          formData.phone
                        }

                        onChange={
                          handleChange
                        }

                        placeholder="+94 ..."
                      />

                    </div>



                    {/* INTEREST */}

                    <div
                      className="
                        mt-4
                      "
                    >

                      <label
                        className="
                          mb-2

                          block

                          text-xs

                          font-semibold

                          uppercase

                          tracking-[0.12em]

                          text-white/45
                        "
                      >
                        What are you interested in?
                      </label>


                      <select
                        name="interest"

                        value={
                          formData.interest
                        }

                        onChange={
                          handleChange
                        }

                        className="
                          w-full

                          rounded-2xl

                          border
                          border-white/10

                          bg-white/[0.06]

                          px-4
                          py-4

                          text-sm

                          text-white

                          outline-none

                          backdrop-blur-md

                          transition-colors

                          focus:border-[#FF914D]
                        "
                      >

                        <option
                          className="
                            bg-black
                          "
                        >
                          Custom CRM
                        </option>


                        <option
                          className="
                            bg-black
                          "
                        >
                          Genie — AI Chatbot
                        </option>


                        <option
                          className="
                            bg-black
                          "
                        >
                          Web / Mobile App
                        </option>


                        <option
                          className="
                            bg-black
                          "
                        >
                          Cloud Solutions
                        </option>


                        <option
                          className="
                            bg-black
                          "
                        >
                          Not sure yet
                        </option>

                      </select>

                    </div>



                    {/* MESSAGE */}

                    <div
                      className="
                        mt-4
                      "
                    >

                      <label
                        className="
                          mb-2

                          block

                          text-xs

                          font-semibold

                          uppercase

                          tracking-[0.12em]

                          text-white/45
                        "
                      >
                        Message
                      </label>


                      <textarea
                        name="message"

                        value={
                          formData.message
                        }

                        onChange={
                          handleChange
                        }

                        placeholder="Tell us a bit about what you're working with..."

                        required

                        rows={6}

                        className="
                          w-full

                          resize-none

                          rounded-2xl

                          border
                          border-white/10

                          bg-white/[0.06]

                          px-4
                          py-4

                          text-sm

                          text-white

                          outline-none

                          placeholder:text-white/25

                          backdrop-blur-md

                          transition-colors

                          focus:border-[#FF914D]
                        "
                      />

                    </div>



                    {/* SUBMIT */}

                    <button
                      type="submit"

                      className="
                        group

                        mt-6

                        flex

                        w-full

                        items-center
                        justify-center

                        gap-3

                        rounded-full

                        bg-[#FF914D]

                        px-6
                        py-4

                        font-bold

                        text-black

                        transition-all

                        hover:scale-[1.01]

                        hover:shadow-[0_12px_35px_rgba(255,145,77,0.30)]
                      "
                    >

                      Send Message


                      <Send
                        size={17}

                        className="
                          transition-transform

                          group-hover:translate-x-1
                        "
                      />

                    </button>


                    <p
                      className="
                        mt-4

                        text-center

                        text-xs

                        text-white/25
                      "
                    >
                      This currently opens your
                      email application with the
                      enquiry details pre-filled.
                    </p>

                  </form>

                </div>

              </div>

            </div>

            <div
              className="
                mt-16
                overflow-hidden
                rounded-[32px]
                border
                border-black/10
                bg-white
                shadow-[0_24px_80px_rgba(0,0,0,0.10)]
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29735773.967506792!2d111.83641223999192!3d-24.525091651371408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2slk!4v1786953802567!5m2!1sen!2slk"
                title="Gencey Global location map"
                className="
                  h-[340px]
                  w-full
                  md:h-[450px]
                "
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>

        </section>

      </main>


      <Footer />


      <BookingCTA />

    </>
  );
};



/* =============================================
   CONTACT CARD
============================================= */

const ContactCard = ({
  icon,
  label,
  value,
  subtext,
  href,
}) => {

  const content = (

    <div
      className="
        group

        flex

        gap-4

        rounded-[24px]

        border
        border-black/10

        bg-white

        p-5

        shadow-[0_8px_30px_rgba(0,0,0,0.035)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#FF914D]

        hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      "
    >

      <div
        className="
          flex

          h-12
          w-12

          shrink-0

          items-center
          justify-center

          rounded-2xl

          bg-[#FFF1E8]

          text-[#FF914D]

          transition-all

          group-hover:bg-[#FF914D]

          group-hover:text-black
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
            text-xs

            font-bold

            uppercase

            tracking-[0.12em]

            text-[#FF914D]
          "
        >
          {label}
        </p>


        <p
          className="
            mt-1

            font-bold

            text-black
          "
        >
          {value}
        </p>


        <p
          className="
            mt-1

            text-sm

            text-black/40
          "
        >
          {subtext}
        </p>

      </div>

    </div>

  );


  if (href) {

    return (
      <a href={href}>
        {content}
      </a>
    );

  }


  return content;
};



/* =============================================
   SOCIAL BUTTON
============================================= */

const SocialButton = ({
  icon,
  label,
}) => {

  return (

    <button
      type="button"

      className="
        inline-flex

        items-center

        gap-2

        rounded-full

        border
        border-black/10

        bg-white

        px-4
        py-2.5

        text-sm

        font-semibold

        text-black/55

        transition-all

        hover:-translate-y-1

        hover:border-[#FF914D]

        hover:text-black
      "
    >

      {icon}

      {label}

    </button>

  );
};



/* =============================================
   FORM FIELD
============================================= */

const ContactField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {

  return (

    <div className="mt-4">

      <label
        className="
          mb-2

          block

          text-xs

          font-semibold

          uppercase

          tracking-[0.12em]

          text-white/45
        "
      >
        {label}
      </label>


      <input
        type={type}

        name={name}

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        required={required}

        className="
          w-full

          rounded-2xl

          border
          border-white/10

          bg-white/[0.06]

          px-4
          py-4

          text-sm

          text-white

          outline-none

          placeholder:text-white/25

          backdrop-blur-md

          transition-colors

          focus:border-[#FF914D]
        "
      />

    </div>

  );
};


export default Contact;
