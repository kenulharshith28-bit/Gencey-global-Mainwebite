import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  CheckCircle2,
  Package,
  Sparkles,
} from "lucide-react";

import MacbookOrderDashboard
  from "./MacbookOrderDashboard";
import ReceivingHand from "./ReceivingHand";
import WhatsAppIPhoneDemo from "./WhatsAppIPhoneDemo";
import BucketShell from "./ui/bucket-shell";


const OrderFlowStory = () => {

  const storyRef =
    useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target:
      storyRef,
    offset: [
      "start start",
      "end end",
    ],
  });

  const progress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 90,
        damping: 26,
        mass: 0.25,
      }
    );

  const devicesOpacity =
    useTransform(
      progress,
      [0, 0.29, 0.34],
      [1, 1, 0]
    );

  const devicesScale =
    useTransform(
      progress,
      [0.29, 0.34],
      [1, 0.92]
    );

  const phoneX =
    useTransform(
      progress,
      [0.29, 0.34],
      [0, -100]
    );

  const macX =
    useTransform(
      progress,
      [0.29, 0.34],
      [0, 100]
    );

  const mobilePhoneOpacity =
    useTransform(
      progress,
      [0, 0.18, 0.24],
      [1, 1, 0]
    );

  const mobilePhoneScale =
    useTransform(
      progress,
      [0, 0.18, 0.24],
      [0.72, 0.72, 0.64]
    );

  const mobileMacOpacity =
    useTransform(
      progress,
      [0.18, 0.24, 0.31, 0.36],
      [0, 1, 1, 0]
    );

  const mobileMacScale =
    useTransform(
      progress,
      [0.18, 0.24, 0.31, 0.36],
      [0.86, 0.96, 0.96, 0.9]
    );

  const welcomeOpacity =
    useTransform(
      progress,
      [0.01, 0.04],
      [0, 1]
    );

  const welcomeY =
    useTransform(
      progress,
      [0.01, 0.04],
      [20, 0]
    );

  const productRequestOpacity =
    useTransform(
      progress,
      [0.05, 0.09],
      [0, 1]
    );

  const productRequestY =
    useTransform(
      progress,
      [0.05, 0.09],
      [20, 0]
    );

  const productReplyOpacity =
    useTransform(
      progress,
      [0.10, 0.15],
      [0, 1]
    );

  const productReplyY =
    useTransform(
      progress,
      [0.10, 0.15],
      [20, 0]
    );

  const confirmQuestionOpacity =
    useTransform(
      progress,
      [0.16, 0.20],
      [0, 1]
    );

  const confirmQuestionY =
    useTransform(
      progress,
      [0.16, 0.20],
      [20, 0]
    );

  const customerConfirmOpacity =
    useTransform(
      progress,
      [0.21, 0.25],
      [0, 1]
    );

  const customerConfirmY =
    useTransform(
      progress,
      [0.21, 0.25],
      [20, 0]
    );

  const chatScrollY =
    useTransform(
      progress,
      [0.00, 0.07, 0.12, 0.17, 0.22, 0.28],
      [0, 0, -70, -170, -285, -390]
    );

  const replyOpacity =
    useTransform(
      progress,
      [0.23, 0.27],
      [0, 1]
    );

  const replyY =
    useTransform(
      progress,
      [0.23, 0.27],
      [20, 0]
    );

  const deliveryOpacity =
    useTransform(
      progress,
      [0.32, 0.36, 0.58, 0.63],
      [0, 1, 1, 0]
    );

  const deliveryY =
    useTransform(
      progress,
      [0.32, 0.38, 0.44, 0.60],
      [-180, 0, 0, 250]
    );

  const deliveryScale =
    useTransform(
      progress,
      [0.32, 0.38, 0.50, 0.60],
      [0.75, 1.1, 1.1, 0.68]
    );

  const deliveryRotate =
    useTransform(
      progress,
      [0.48, 0.60],
      [0, 8]
    );

  const bucketOpacity =
    useTransform(
      progress,
      [0.39, 0.45, 0.70, 0.76],
      [0, 1, 1, 0]
    );

  const bucketY =
    useTransform(
      progress,
      [0.39, 0.47],
      [300, 80]
    );

  const bucketScale =
    useTransform(
      progress,
      [0.39, 0.47, 0.59, 0.63, 0.72],
      [0.7, 1, 1, 1.08, 0.9]
    );

  const parcelOpacity =
    useTransform(
      progress,
      [0.59, 0.63, 0.70, 0.73],
      [0, 1, 1, 0]
    );

  const parcelX =
    useTransform(
      progress,
      [0.59, 0.72],
      [70, 70]
    );

  const parcelY =
    useTransform(
      progress,
      [0.59, 0.63, 0.68, 0.72],
      [-170, -100, 85, 125]
    );

  const parcelScale =
    useTransform(
      progress,
      [0.59, 0.66, 0.72],
      [0.9, 0.72, 0.42]
    );

  const parcelRotate =
    useTransform(
      progress,
      [0.59, 0.64, 0.68, 0.72],
      [-8, 5, -3, 0]
    );

  const dispatchTruckOpacity =
    useTransform(
      progress,
      [0.56, 0.60, 0.78, 0.81],
      [0, 1, 1, 0]
    );

  const dispatchTruckX =
    useTransform(
      progress,
      [0.56, 0.63, 0.71, 0.80],
      [520, 0, 0, -900]
    );

  const dispatchWheelRotation =
    useTransform(
      progress,
      [0.56, 0.63, 0.71, 0.80],
      [0, -540, -540, -1620]
    );

  const receiveTruckOpacity =
    useTransform(
      progress,
      [0.81, 0.85, 0.96, 1],
      [0, 1, 1, 0]
    );

  const receiveTruckX =
    useTransform(
      progress,
      [0.81, 0.86, 0.94, 1],
      [700, 130, 130, -850]
    );

  const receiveWheelRotation =
    useTransform(
      progress,
      [0.81, 0.86, 0.94, 1],
      [0, -480, -480, -1400]
    );

  const handOpacity =
    useTransform(
      progress,
      [0.84, 0.88],
      [0, 1]
    );

  const handY =
    useTransform(
      progress,
      [0.84, 0.90],
      [190, 28]
    );

  const handScale =
    useTransform(
      progress,
      [0.84, 0.90],
      [0.88, 1]
    );

  const receivedParcelOpacity =
    useTransform(
      progress,
      [0.86, 0.89, 0.98],
      [0, 1, 1]
    );

  const receivedParcelX =
    useTransform(
      progress,
      [0.86, 0.92, 0.98],
      [20, 20, 8]
    );

  const receivedParcelY =
    useTransform(
      progress,
      [0.86, 0.92, 0.98],
      [0, 165, 220]
    );

  const receivedParcelScale =
    useTransform(
      progress,
      [0.86, 0.98],
      [0.65, 0.78]
    );

  const receivedParcelRotate =
    useTransform(
      progress,
      [0.92, 0.96, 0.98],
      [0, 6, 0]
    );

  const deliveredOpacity =
    useTransform(
      progress,
      [0.965, 0.99],
      [0, 1]
    );

  const deliveredY =
    useTransform(
      progress,
      [0.965, 0.99],
      [20, 0]
    );

  const progressScale =
    useTransform(
      progress,
      [0, 1],
      [0, 1]
    );

  const captionOne =
    useTransform(
      progress,
      [0, 0.05, 0.25, 0.30],
      [0, 1, 1, 0]
    );

  const captionTwo =
    useTransform(
      progress,
      [0.28, 0.34, 0.58, 0.63],
      [0, 1, 1, 0]
    );

  const captionThree =
    useTransform(
      progress,
      [0.42, 0.48, 0.69, 0.74],
      [0, 1, 1, 0]
    );

  const captionFour =
    useTransform(
      progress,
      [0.68, 0.72, 0.78, 0.82],
      [0, 1, 1, 0]
    );

  const captionFive =
    useTransform(
      progress,
      [0.78, 0.84, 0.93, 0.96],
      [0, 1, 1, 0]
    );

  const captionSix =
    useTransform(
      progress,
      [0.95, 0.98, 1],
      [0, 1, 1]
    );

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF914D]/20 bg-[#FFF9F5] px-4 py-2 text-sm font-semibold text-[#FF914D]">
          <Sparkles size={15} />
          Gencey In Action
        </div>

        <h2 className="max-w-4xl mx-auto mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
          One conversation.
          <span className="text-[#FF914D]">
            {" "}One automated journey.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-lg leading-relaxed text-black/50">
          Scroll to see how a customer request moves from conversation
          to fulfilment and delivery.
        </p>
      </div>

      <div
        ref={storyRef}
        className="relative h-[520vh] md:h-[620vh] lg:h-[760vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden border-y border-black/5 bg-[#FFF9F5]">
          <div className="absolute left-0 top-0 z-[100] h-1 w-full bg-black/5">
            <motion.div
              style={{
                scaleX:
                  progressScale,
              }}
              className="h-full w-full origin-left bg-[#FF914D]"
            />
          </div>

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize:
                "60px 60px",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF914D]/10 blur-[150px]" />

          <div className="absolute right-8 top-8 z-50 hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-black/30">
            Scroll to play
            <ArrowDown size={14} />
          </div>

          <motion.div
            style={{
              scale:
                devicesScale,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative h-full w-full lg:hidden">
              <motion.div
                style={{
                  opacity:
                    mobilePhoneOpacity,
                  scale:
                    mobilePhoneScale,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <WhatsAppIPhoneDemo
                  welcomeOpacity={
                    welcomeOpacity
                  }
                  welcomeY={
                    welcomeY
                  }
                  productRequestOpacity={
                    productRequestOpacity
                  }
                  productRequestY={
                    productRequestY
                  }
                  productReplyOpacity={
                    productReplyOpacity
                  }
                  productReplyY={
                    productReplyY
                  }
                  confirmQuestionOpacity={
                    confirmQuestionOpacity
                  }
                  confirmQuestionY={
                    confirmQuestionY
                  }
                  customerConfirmOpacity={
                    customerConfirmOpacity
                  }
                  customerConfirmY={
                    customerConfirmY
                  }
                  chatScrollY={
                    chatScrollY
                  }
                  replyOpacity={
                    replyOpacity
                  }
                  replyY={
                    replyY
                  }
                />
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    mobileMacOpacity,
                  scale:
                    mobileMacScale,
                }}
                className="absolute inset-0 flex items-center justify-center px-3 sm:px-6"
              >
                <MacbookOrderDashboard
                  welcomeOpacity={
                    welcomeOpacity
                  }
                  welcomeY={
                    welcomeY
                  }
                  productRequestOpacity={
                    productRequestOpacity
                  }
                  productRequestY={
                    productRequestY
                  }
                  productReplyOpacity={
                    productReplyOpacity
                  }
                  productReplyY={
                    productReplyY
                  }
                  confirmQuestionOpacity={
                    confirmQuestionOpacity
                  }
                  confirmQuestionY={
                    confirmQuestionY
                  }
                  customerConfirmOpacity={
                    customerConfirmOpacity
                  }
                  customerConfirmY={
                    customerConfirmY
                  }
                  chatScrollY={
                    chatScrollY
                  }
                  replyOpacity={
                    replyOpacity
                  }
                  replyY={
                    replyY
                  }
                />
              </motion.div>
            </div>

            <motion.div
              style={{
                opacity:
                  devicesOpacity,
              }}
              className="hidden w-full max-w-7xl grid-cols-[0.75fr_1.25fr] items-center gap-20 px-10 lg:grid"
            >
              <motion.div
                style={{
                  x:
                    phoneX,
                }}
                className="flex justify-center"
              >
                <WhatsAppIPhoneDemo
                  welcomeOpacity={
                    welcomeOpacity
                  }
                  welcomeY={
                    welcomeY
                  }
                  productRequestOpacity={
                    productRequestOpacity
                  }
                  productRequestY={
                    productRequestY
                  }
                  productReplyOpacity={
                    productReplyOpacity
                  }
                  productReplyY={
                    productReplyY
                  }
                  confirmQuestionOpacity={
                    confirmQuestionOpacity
                  }
                  confirmQuestionY={
                    confirmQuestionY
                  }
                  customerConfirmOpacity={
                    customerConfirmOpacity
                  }
                  customerConfirmY={
                    customerConfirmY
                  }
                  chatScrollY={
                    chatScrollY
                  }
                  replyOpacity={
                    replyOpacity
                  }
                  replyY={
                    replyY
                  }
                />
              </motion.div>

              <motion.div
                style={{
                  x:
                    macX,
                }}
                className="flex justify-center"
              >
                <MacbookOrderDashboard
                  welcomeOpacity={
                    welcomeOpacity
                  }
                  welcomeY={
                    welcomeY
                  }
                  productRequestOpacity={
                    productRequestOpacity
                  }
                  productRequestY={
                    productRequestY
                  }
                  productReplyOpacity={
                    productReplyOpacity
                  }
                  productReplyY={
                    productReplyY
                  }
                  confirmQuestionOpacity={
                    confirmQuestionOpacity
                  }
                  confirmQuestionY={
                    confirmQuestionY
                  }
                  customerConfirmOpacity={
                    customerConfirmOpacity
                  }
                  customerConfirmY={
                    customerConfirmY
                  }
                  chatScrollY={
                    chatScrollY
                  }
                  replyOpacity={
                    replyOpacity
                  }
                  replyY={
                    replyY
                  }
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              opacity:
                deliveryOpacity,
              y:
                deliveryY,
              scale:
                deliveryScale,
              rotate:
                deliveryRotate,
            }}
            className="absolute left-1/2 top-[40%] z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <DeliveryCard />
          </motion.div>

          <motion.div
            style={{
              opacity:
                bucketOpacity,
              y:
                bucketY,
              scale:
                bucketScale,
            }}
            className="absolute left-1/2 top-[48%] z-30 w-[min(520px,90vw)] -translate-x-1/2"
          >
            <BucketShell />
          </motion.div>

          <motion.div
            style={{
              opacity:
                parcelOpacity,
              x:
                parcelX,
              y:
                parcelY,
              scale:
                parcelScale,
              rotate:
                parcelRotate,
            }}
            className="absolute left-1/2 top-[42%] z-40 -translate-x-1/2"
          >
            <Parcel />
          </motion.div>

          <motion.div
            style={{
              opacity:
                dispatchTruckOpacity,
              x:
                dispatchTruckX,
            }}
            className="absolute left-1/2 top-[53%] z-30 -translate-x-1/2"
          >
            <div className="-scale-x-100">
              <DeliveryTruck
                wheelRotation={
                  dispatchWheelRotation
                }
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity:
                receiveTruckOpacity,
              x:
                receiveTruckX,
            }}
            className="absolute left-1/2 top-[51%] z-30 -translate-x-1/2"
          >
            <div className="-scale-x-100">
              <DeliveryTruck
                wheelRotation={
                  receiveWheelRotation
                }
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity:
                handOpacity,
              y:
                handY,
              scale:
                handScale,
            }}
            className="absolute left-1/2 top-[50%] z-40 -translate-x-1/2"
          >
            <div className="-scale-x-100 origin-center">
              <ReceivingHand />
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity:
                receivedParcelOpacity,
              x:
                receivedParcelX,
              y:
                receivedParcelY,
              scale:
                receivedParcelScale,
              rotate:
                receivedParcelRotate,
            }}
            className="absolute left-1/2 top-[26%] z-50 -translate-x-1/2"
          >
            <Parcel />
          </motion.div>

          <motion.div
            style={{
              opacity:
                deliveredOpacity,
              y:
                deliveredY,
            }}
            className="absolute left-1/2 top-[25%] z-50 -translate-x-1/2"
          >
            <DeliveredBadge />
          </motion.div>

          <div className="pointer-events-none absolute bottom-7 left-1/2 z-50 -translate-x-1/2 text-center sm:bottom-10 lg:bottom-12">
            <StoryCaption
              opacity={
                captionOne
              }
              step="01"
              text="A customer starts a conversation."
            />

            <StoryCaption
              opacity={
                captionTwo
              }
              step="02"
              text="Gencey AI confirms the delivery."
            />

            <StoryCaption
              opacity={
                captionThree
              }
              step="03"
              text="The confirmed order moves into fulfilment."
            />

            <StoryCaption
              opacity={
                captionFour
              }
              step="04"
              text="The package is loaded and dispatched."
            />

            <StoryCaption
              opacity={
                captionFive
              }
              step="05"
              text="The delivery reaches the customer."
            />

            <StoryCaption
              opacity={
                captionSix
              }
              step="06"
              text="Order delivered successfully."
            />
          </div>
        </div>
      </div>
    </section>
  );

};


const DeliveryCard = () => {

  return (
    <div className="w-[calc(100vw-40px)] max-w-[360px] rounded-[22px] border border-[#FF914D]/20 bg-white/90 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#FF914D]">
          <CheckCircle2 size={22} />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF914D]">
            AI Order Update
          </p>
          <p className="mt-1 text-xl font-bold text-black">
            Delivery confirmed
          </p>
          <p className="mt-1 text-sm text-black/45">
            Order sent to fulfilment.
          </p>
        </div>
      </div>
    </div>
  );

};


const Parcel = () => {

  return (
    <div className="flex h-24 w-28 items-center justify-center rounded-[22px] border border-[#FF914D]/25 bg-[#FFF1E8] shadow-[0_20px_45px_rgba(255,145,77,0.20)]">
      <Package
        size={38}
        className="text-[#FF914D]"
      />
    </div>
  );

};


const DeliveredBadge = () => {

  return (
    <div className="flex items-center gap-3 rounded-full border border-[#FF914D]/20 bg-white/90 px-6 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF914D] text-black">
        <CheckCircle2 size={18} />
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FF914D]">
          Order Complete
        </p>

        <p className="text-sm font-bold text-black">
          Delivered successfully
        </p>
      </div>
    </div>
  );

};


const StoryCaption = ({
  opacity,
  step,
  text,
}) => {

  return (
    <motion.div
      style={{
        opacity,
      }}
      className="absolute left-1/2 bottom-0 w-[min(500px,88vw)] -translate-x-1/2"
    >
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF914D]">
        Step {step}
      </p>
      <p className="mt-2 text-lg font-bold text-black sm:text-xl md:text-2xl">
        {text}
      </p>
    </motion.div>
  );

};


const DeliveryTruck = ({
  wheelRotation,
}) => {
  return (
    <div
      className="
        relative
        w-[270px]
        sm:w-[320px]
        md:w-[360px]
      "
    >
      <svg
        viewBox="0 0 360 190"
        className="
          w-full
          h-auto
          overflow-visible
        "
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* =====================================
            GROUND SHADOW
        ===================================== */}

        <ellipse
          cx="180"
          cy="162"
          rx="145"
          ry="10"
          fill="rgba(0,0,0,0.08)"
        />


        {/* =====================================
            REAR SMALL LINE
        ===================================== */}

        <rect
          x="2"
          y="68"
          width="27"
          height="7"
          rx="3.5"
          fill="#8FD0ED"
        />


        {/* =====================================
            CARGO BOX
        ===================================== */}

        <rect
          x="20"
          y="30"
          width="188"
          height="108"
          rx="20"
          fill="#8FD0ED"
          stroke="#69B6D9"
          strokeWidth="1.5"
        />


        {/* Cargo highlight */}

        <path
          d="M39 31 H188"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
        />


        {/* Divider */}

        <line
          x1="208"
          y1="72"
          x2="208"
          y2="137"
          stroke="#65B5D8"
          strokeWidth="1.5"
        />


        {/* =====================================
            CARGO LABEL
        ===================================== */}

        <g>

          <rect
            x="42"
            y="46"
            width="91"
            height="32"
            rx="16"
            fill="rgba(255,255,255,0.88)"
          />


          {/* parcel icon */}

          <g
            transform="
              translate(54 55)
            "
            stroke="#FF914D"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 4 L7 0 L14 4 L7 8 Z" />
            <path d="M0 4 V12 L7 16 L14 12 V4" />
            <path d="M7 8 V16" />
          </g>


          <text
            x="77"
            y="66"
            fill="#FF914D"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.8"
          >
            CARGO
          </text>

        </g>



        {/* =====================================
            CABIN BODY
        ===================================== */}

        <path
          d="
            M208 74
            H235

            L252 49

            H294

            C299 49
              303 52
              307 57

            L329 84

            C333 89
              335 96
              335 103

            V127

            C335 134
              330 138
              323 138

            H208

            Z
          "
          fill="#8FD0ED"
          stroke="#69B6D9"
          strokeWidth="1.5"
        />


        {/* =====================================
            WINDSHIELD
        ===================================== */}

        <path
          d="
            M253 56
            H287

            C290 56
              292 57
              294 60

            L313 84

            H263

            Z
          "
          fill="#EAF7FC"
          stroke="#BDE6F6"
          strokeWidth="1.5"
        />


        {/* Window reflection */}

        <path
          d="
            M264 58
            L278 82
          "
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="
            M280 58
            L293 81
          "
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="5"
          strokeLinecap="round"
        />


        {/* =====================================
            DOOR
        ===================================== */}

        <line
          x1="235"
          y1="77"
          x2="235"
          y2="129"
          stroke="#5FAFD3"
          strokeWidth="1.5"
        />


        {/* Door handle */}

        <rect
          x="249"
          y="93"
          width="13"
          height="5"
          rx="2.5"
          fill="#444444"
        />


        {/* =====================================
            MIRROR
        ===================================== */}

        <rect
          x="311"
          y="61"
          width="6"
          height="23"
          rx="3"
          fill="#555555"
        />


        {/* =====================================
            HEADLIGHT
        ===================================== */}

        <circle
          cx="333"
          cy="102"
          r="5"
          fill="#F4C94F"
        />


        {/* =====================================
            CHASSIS
        ===================================== */}

        <path
          d="
            M22 127
            H328

            C334 127
              338 131
              338 136

            V140

            H20

            V133

            C20 130
              21 128
              22 127
          "
          fill="#4A4A4A"
        />


        {/* Rear bumper */}

        <rect
          x="8"
          y="124"
          width="34"
          height="18"
          rx="5"
          fill="#555555"
        />


        {/* Front bumper */}

        <rect
          x="323"
          y="126"
          width="27"
          height="16"
          rx="5"
          fill="#444444"
        />



        {/* =====================================
            REAR WHEEL
        ===================================== */}

        <motion.g
          style={{
            rotate: wheelRotation,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >

          <circle
            cx="91"
            cy="140"
            r="30"
            fill="#575757"
          />

          <circle
            cx="91"
            cy="140"
            r="22"
            fill="#8A8A8A"
          />

          <circle
            cx="91"
            cy="140"
            r="15"
            fill="#9ED7EF"
          />

          <circle
            cx="91"
            cy="140"
            r="5"
            fill="#656565"
          />


          {/* rotation marker */}

          <line
            x1="91"
            y1="126"
            x2="91"
            y2="135"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
          />

        </motion.g>



        {/* =====================================
            FRONT WHEEL
        ===================================== */}

        <motion.g
          style={{
            rotate: wheelRotation,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >

          <circle
            cx="275"
            cy="140"
            r="30"
            fill="#575757"
          />

          <circle
            cx="275"
            cy="140"
            r="22"
            fill="#8A8A8A"
          />

          <circle
            cx="275"
            cy="140"
            r="15"
            fill="#9ED7EF"
          />

          <circle
            cx="275"
            cy="140"
            r="5"
            fill="#656565"
          />


          <line
            x1="275"
            y1="126"
            x2="275"
            y2="135"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
          />

        </motion.g>



        {/* =====================================
            ROAD
        ===================================== */}

        <line
          x1="15"
          y1="174"
          x2="340"
          y2="174"
          stroke="#777777"
          strokeWidth="4"
          strokeLinecap="round"
        />


        <line
          x1="-20"
          y1="174"
          x2="3"
          y2="174"
          stroke="#777777"
          strokeWidth="4"
          strokeLinecap="round"
        />

      </svg>

    </div>
  );
};


export default OrderFlowStory;
