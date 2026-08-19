import { motion } from "framer-motion";

import {
  ArrowLeft,
  BadgeCheck,
  BatteryFull,
  Camera,
  Check,
  CheckCheck,
  CheckCircle2,
  Mic,
  MoreVertical,
  Phone,
  Signal,
  Smile,
  Video,
  Wifi,
} from "lucide-react";


const WhatsAppIPhoneDemo = ({
  welcomeOpacity,
  welcomeY,
  productRequestOpacity,
  productRequestY,
  productReplyOpacity,
  productReplyY,
  confirmQuestionOpacity,
  confirmQuestionY,
  customerConfirmOpacity,
  customerConfirmY,
  chatScrollY,
  replyOpacity,
  replyY,
}) => {

  const productImage =
    "/images/Product/product.png";

  return (
    <div className="relative mx-auto w-[330px] max-w-[88vw]">
      <div className="absolute -left-[5px] top-[118px] h-16 w-[4px] rounded-full bg-[#4B4B4B]" />
      <div className="absolute -left-[5px] top-[205px] h-24 w-[4px] rounded-full bg-[#4B4B4B]" />
      <div className="absolute -right-[5px] top-[200px] h-28 w-[4px] rounded-full bg-[#4B4B4B]" />

      <div className="relative h-[700px] rounded-[3.7rem] bg-[#171717] p-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.22)]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[3.1rem] bg-[#F7F5F2]">
          <div className="absolute left-1/2 top-3 z-[100] h-[34px] w-[126px] -translate-x-1/2 rounded-full bg-black" />

          <div className="relative z-50 flex h-[54px] shrink-0 items-center justify-between bg-white px-6 pt-1">
            <span className="text-[15px] font-bold text-black">
              9:41
            </span>

            <div className="flex items-center gap-1.5 text-black">
              <Signal
                size={17}
                strokeWidth={2.7}
              />
              <Wifi
                size={17}
                strokeWidth={2.7}
              />
              <BatteryFull
                size={22}
                strokeWidth={2.3}
              />
            </div>
          </div>

          <div className="relative z-40 flex shrink-0 items-center justify-between border-b border-black/[0.08] bg-white px-4 pb-4 pt-2">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <ArrowLeft
                size={26}
                strokeWidth={2.2}
                className="shrink-0 text-black"
              />

              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                G
              </div>

              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-1.5">
                  <p className="truncate text-[18px] font-bold text-black">
                    Gencey Chat
                  </p>

                  <BadgeCheck
                    size={19}
                    strokeWidth={2.6}
                    className="shrink-0 fill-[#1FCB70] text-white"
                  />
                </div>

                <p className="mt-[1px] text-[13px] text-black/45">
                  Online
                </p>
              </div>
            </div>

            <div className="ml-2 flex shrink-0 items-center gap-4 text-black">
              <Video
                size={23}
                strokeWidth={2}
              />
              <Phone
                size={22}
                strokeWidth={2}
              />
              <MoreVertical
                size={23}
                strokeWidth={2.2}
              />
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#EFEAE2]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.075]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20px 20px, #6F655C 1.2px, transparent 1.4px),
                  radial-gradient(circle at 75px 45px, #6F655C 1.1px, transparent 1.3px),
                  radial-gradient(circle at 40px 90px, #6F655C 1px, transparent 1.2px)
                `,
                backgroundSize:
                  "110px 110px",
              }}
            />

            <motion.div
              style={{
                y:
                  chatScrollY,
              }}
              className="relative z-10 space-y-3 px-3 py-4 pb-28"
            >
              <motion.div
                style={{
                  opacity:
                    welcomeOpacity,
                  y:
                    welcomeY,
                }}
                className="flex justify-start"
              >
                <div className="max-w-[86%] rounded-[12px] rounded-tl-[4px] bg-white px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <p className="text-[14px] leading-[1.4] text-[#111B21]">
                    Hi. Welcome to Gencey Chat. How can I help you today?
                  </p>

                  <MessageMeta time="03:10 PM" />
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    productRequestOpacity,
                  y:
                    productRequestY,
                }}
                className="flex justify-end"
              >
                <div className="max-w-[84%] rounded-[12px] rounded-tr-[4px] bg-[#D9FDD3] px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <p className="text-[14px] leading-[1.35] text-[#111B21]">
                    Do you have this product?
                  </p>

                  <div className="mt-2 overflow-hidden rounded-lg bg-white">
                    <img
                      src={productImage}
                      alt="Customer requested product"
                      className="h-[135px] w-full object-cover"
                    />
                  </div>

                  <MessageMeta
                    time="03:11 PM"
                    outgoing
                  />
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    productReplyOpacity,
                  y:
                    productReplyY,
                }}
                className="flex justify-start"
              >
                <div className="w-[86%] overflow-hidden rounded-[12px] rounded-tl-[4px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <div className="m-2 flex overflow-hidden rounded-[10px] border border-black/[0.07] bg-white">
                    <img
                      src={productImage}
                      alt="Available product"
                      className="h-[122px] w-[46%] object-cover"
                    />

                    <div className="flex-1 p-3">
                      <p className="text-[15px] font-bold text-[#111B21]">
                        Requested Product
                      </p>

                      <p className="mt-1 text-[13px] text-black/45">
                        Available
                      </p>

                      <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[11px] font-bold text-green-600">
                        <Check size={12} />
                        In stock
                      </div>
                    </div>
                  </div>

                  <p className="border-t border-black/5 px-3 py-2 text-[14px] leading-[1.4] text-[#111B21]/70">
                    Yes. This product is currently available.
                  </p>

                  <div className="px-3 pb-2">
                    <MessageMeta time="03:11 PM" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    confirmQuestionOpacity,
                  y:
                    confirmQuestionY,
                }}
                className="flex justify-start"
              >
                <div className="max-w-[84%] rounded-[12px] rounded-tl-[4px] bg-white px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <p className="text-[14px] leading-[1.4] text-[#111B21]">
                    Would you like me to confirm delivery for this item?
                  </p>

                  <MessageMeta time="03:11 PM" />
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    customerConfirmOpacity,
                  y:
                    customerConfirmY,
                }}
                className="flex justify-end"
              >
                <div className="max-w-[78%] rounded-[12px] rounded-tr-[4px] bg-[#D9FDD3] px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <p className="text-[14px] leading-[1.4] text-[#111B21]">
                    Yes, please confirm the delivery.
                  </p>

                  <MessageMeta
                    time="03:12 PM"
                    outgoing
                  />
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity:
                    replyOpacity,
                  y:
                    replyY,
                }}
                className="flex justify-start"
              >
                <div className="w-[88%] rounded-[12px] rounded-tl-[4px] border border-[#FF914D]/30 bg-[#FFF1E8] px-3 py-3 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-[#FF914D]">
                        Customer Confirmation
                      </p>
                      <p className="mt-1 text-[14px] font-extrabold text-[#111B21]">
                        Delivery approved
                      </p>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check size={14} />
                    </div>
                  </div>

                  <div className="my-3 h-px bg-black/10" />

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#FF914D]"
                    />

                    <div>
                      <p className="text-[10px] font-bold uppercase text-[#FF914D]">
                        Order Status
                      </p>
                      <p className="mt-1 text-[14px] font-extrabold text-[#111B21]">
                        Delivery confirmed
                      </p>
                      <p className="mt-1 text-[12px] text-black/45">
                        Order #GG-1048 - Sent to fulfilment.
                      </p>
                    </div>
                  </div>

                  <MessageMeta time="03:12 PM" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative z-40 shrink-0 bg-[#F0F2F5] px-2 pb-5 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex h-[48px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                <Smile
                  size={22}
                  className="shrink-0 text-[#667781]"
                />

                <span className="min-w-0 flex-1 truncate text-[15px] text-[#667781]/70">
                  Type a message
                </span>

                <Camera
                  size={22}
                  className="shrink-0 text-[#667781]"
                />
              </div>

              <button
                type="button"
                aria-label="Record voice message"
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00A884] text-white"
              >
                <Mic
                  size={22}
                  strokeWidth={2.3}
                />
              </button>
            </div>
          </div>

          <div className="absolute bottom-[5px] left-1/2 z-[100] h-[5px] w-[125px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );

};


const MessageMeta = ({
  time,
  outgoing = false,
}) => {

  return (
    <div className="mt-1 flex items-center justify-end gap-1">
      <span className="text-[10px] text-[#667781]">
        {time}
      </span>

      {outgoing && (
        <CheckCheck
          size={14}
          strokeWidth={2.5}
          className="text-[#53BDEB]"
        />
      )}
    </div>
  );

};


export default WhatsAppIPhoneDemo;
