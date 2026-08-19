import {
  CalendarDays,
  X,
  Video,
  Phone,
  Check,
  ArrowRight,
} from "lucide-react";

import { useEffect, useState } from "react";

import CalendarPicker from "./CalendarPicker";
import TimePicker from "./TimePicker";


const BookingCTA = () => {

  const [isOpen, setIsOpen] =
    useState(false);

  const [meetingType, setMeetingType] =
    useState("online");

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");


  const [showButton, setShowButton] =
    useState(false);

  // Replace this with the approved Gencey Global WhatsApp number.
  const WHATSAPP_NUMBER = "94703755535";

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }

    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please add the Gencey Global WhatsApp number before sending booking requests.");
      return;
    }

    const meetingLabel =
      meetingType === "online"
        ? "Online Meeting"
        : "Phone Call";

    const formattedDate = new Date(
      `${selectedDate}T00:00:00`
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const formattedTime = new Date(
      `2000-01-01T${selectedTime}`
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    const message = `Hello Gencey Global

I would like to book a meeting.

Meeting Type: ${meetingLabel}
Date: ${formattedDate}
Time: ${formattedTime}

Please let me know if this time is available.

Thank you!`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /*
    Show the floating button only
    after the visitor scrolls a bit.
  */

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /*
    Prevent background scrolling
    while modal is open.
  */

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }


    return () => {
      document.body.style.overflow = "";
    };

  }, [isOpen]);


  return (
    <>

      {/* ================= FLOATING BUTTON ================= */}

      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed
          right-4
          bottom-4
          sm:right-5
          sm:bottom-5
          lg:right-8
          lg:bottom-8

          z-40

          inline-flex
          items-center
          gap-3

          bg-[#FF914D]
          text-black

          px-4
          py-3
          sm:px-5
          sm:py-3.5

          rounded-full

          font-bold

          shadow-[0_15px_40px_rgba(255,145,77,0.35)]

          hover:scale-105

          transition-all
          duration-500

          ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >

        <CalendarDays size={19} />

        <span className="hidden sm:inline">
          Book a Free Call
        </span>

      </button>


      {/* ================= MODAL ================= */}

      {isOpen && (

        <div
          className="
            fixed
            inset-0
            z-[100]

            bg-black/40
            backdrop-blur-sm

            flex
            items-center
            justify-center

            p-5
          "
          onClick={() =>
            setIsOpen(false)
          }
        >

          {/* Modal */}

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              relative

              w-full
              max-w-4xl
              max-h-[calc(100vh-2.5rem)]

              bg-white

              rounded-[32px]

              shadow-[0_30px_100px_rgba(0,0,0,0.25)]

              overflow-y-auto
            "
          >

            {/* Close */}

            <button
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Close booking window"
              className="
                absolute
                top-5
                right-5

                z-10

                w-10
                h-10

                rounded-full

                bg-black/5
                text-black

                flex
                items-center
                justify-center

                hover:bg-black
                hover:text-white

                transition-all
              "
            >
              <X size={18} />
            </button>


            {/* Orange Header */}

            <div
              className="
                bg-[#FFF9F5]
                px-7
                md:px-10
                pt-10
                pb-8

                border-b
                border-black/10
              "
            >

              <div
                className="
                  w-12
                  h-12

                  bg-[#FF914D]

                  rounded-2xl

                  flex
                  items-center
                  justify-center
                "
              >
                <CalendarDays size={22} />
              </div>


              <h2
                className="
                  mt-6

                  text-3xl
                  md:text-4xl

                  font-bold
                  text-black
                "
              >
                Let's talk about your project.
              </h2>


              <p
                className="
                  mt-4
                  text-black/50
                  leading-relaxed
                  max-w-lg
                "
              >
                Book a short conversation with the
                Gencey Global team and tell us about
                your business challenge or digital idea.
              </p>

            </div>


            {/* Body */}

            <div
              className="
                p-7
                md:p-10
              "
            >

              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-4
                "
              >

                <MeetingOption
                  selected={meetingType === "phone"}
                  onClick={() => setMeetingType("phone")}
                  icon={<Phone size={19} />}
                  title="Phone Call"
                  text="Speak directly with the Gencey Global team."
                />


                <MeetingOption
                  selected={meetingType === "online"}
                  onClick={() => setMeetingType("online")}
                  icon={<Video size={19} />}
                  title="Online Meeting"
                  text="Meet with the team remotely."
                />

              </div>


              <div className="mt-7">

                <p
                  className="
                    text-sm
                    font-bold
                    text-black
                    mb-4
                  "
                >
                  Choose your preferred date and time
                </p>


                <div
                  className="
                    grid
                    gap-5
                    lg:grid-cols-2
                    items-stretch
                  "
                >

                  <CalendarPicker
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                  />


                  <TimePicker
                    selectedTime={selectedTime}
                    onSelect={setSelectedTime}
                  />

                </div>

              </div>


              {selectedDate && selectedTime && (

                <div
                  className="
                    mt-5
                    rounded-2xl
                    border
                    border-[#FF914D]/20
                    bg-[#FFF9F5]
                    p-5
                  "
                >

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      font-bold
                      text-[#FF914D]
                    "
                  >
                    Booking Summary
                  </p>


                  <div
                    className="
                      mt-3
                      space-y-2
                      text-sm
                      text-black/60
                    "
                  >

                    <p>
                      <strong className="text-black">
                        Meeting:
                      </strong>{" "}

                      {meetingType === "online"
                        ? "Online Meeting"
                        : "Phone Call"}
                    </p>


                    <p>
                      <strong className="text-black">
                        Date:
                      </strong>{" "}

                      {selectedDate}
                    </p>


                    <p>
                      <strong className="text-black">
                        Time:
                      </strong>{" "}

                      {selectedTime}
                    </p>

                  </div>

                </div>

              )}


              <button
                type="button"
                onClick={handleBooking}
                disabled={
                  !selectedDate ||
                  !selectedTime
                }
                className="
                  mt-7
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#FF914D]
                  text-black
                  px-6
                  py-4
                  rounded-full
                  font-bold
                  transition-all
                  duration-300
                  hover:scale-[1.01]
                  hover:shadow-[0_10px_30px_rgba(255,145,77,0.3)]
                  disabled:bg-black/10
                  disabled:text-black/30
                  disabled:cursor-not-allowed
                  disabled:hover:scale-100
                "
              >
                Send Booking Request

                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
};



const MeetingOption = ({
  icon,
  title,
  text,
  selected,
  onClick,
}) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        text-left
        border
        rounded-2xl
        p-5
        transition-all
        duration-300

        ${
          selected
            ? `
              border-[#FF914D]
              bg-[#FFF9F5]
              shadow-[0_10px_30px_rgba(255,145,77,0.12)]
            `
            : `
              border-black/10
              bg-white
              hover:border-[#FF914D]/50
            `
        }
      `}
    >

      {selected && (
        <div
          className="
            absolute
            top-4
            right-4
            w-5
            h-5
            rounded-full
            bg-[#FF914D]
            text-black
            flex
            items-center
            justify-center
          "
        >
          <Check size={12} strokeWidth={3} />
        </div>
      )}


      <div
        className="
          w-10
          h-10

          rounded-xl

          bg-[#FF914D]/10
          text-[#FF914D]

          flex
          items-center
          justify-center
        "
      >
        {icon}
      </div>


      <h3
        className="
          mt-4
          font-bold
          text-black
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-2
          text-sm
          text-black/45
          leading-relaxed
        "
      >
        {text}
      </p>

    </button>
  );
};


export default BookingCTA;
