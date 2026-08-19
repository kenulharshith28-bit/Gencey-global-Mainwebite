import {
  Bot,
  Check,
  User,
} from "lucide-react";

import { motion } from "framer-motion";


const IPhoneOrderDemo = ({
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
}) => {

  const customerProductImage =
    "/images/Product/product.png";

  const availableProductImage =
    "/images/Product/product.png";

  return (
    <div className="relative w-[300px] mx-auto">
      <div className="absolute -left-[5px] top-24 h-14 w-[4px] rounded-full bg-black/65" />
      <div className="absolute -left-[5px] top-44 h-20 w-[4px] rounded-full bg-black/65" />
      <div className="absolute -right-[5px] top-44 h-24 w-[4px] rounded-full bg-black/65" />

      <div className="relative h-[620px] rounded-[3.2rem] bg-[#151515] p-[9px] shadow-[0_35px_80px_rgba(0,0,0,0.20)]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.7rem] bg-white">
          <div className="absolute left-1/2 top-3 z-50 h-8 w-28 -translate-x-1/2 rounded-full bg-black shadow-lg" />

          <div className="relative z-30 shrink-0 border-b border-black/10 bg-white px-5 pb-4 pt-14">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF914D] text-black">
                <Bot size={19} />
              </div>

              <div>
                <p className="font-bold text-black">
                  Gencey Chat
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-xs text-black/40">
                    Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#FFF9F5]">
            <motion.div
              style={{
                y:
                  chatScrollY,
              }}
              className="space-y-3 px-3 py-4 pb-16"
            >
            <motion.div
              style={{
                opacity:
                  welcomeOpacity,
                y:
                  welcomeY,
              }}
              className="flex items-end gap-2"
            >
              <BotAvatar />

              <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-black shadow-sm">
                Hi. Welcome to Gencey Chat. How can I help you today?
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity:
                  productRequestOpacity,
                y:
                  productRequestY,
              }}
              className="flex items-end justify-end gap-2"
            >
              <div className="w-[190px] overflow-hidden rounded-[19px] rounded-br-md bg-[#FF914D] shadow-sm">
                <div className="m-1.5 overflow-hidden rounded-[14px] bg-white">
                  <img
                    src={customerProductImage}
                    alt="Customer requested product"
                    className="h-[105px] w-full object-cover"
                  />
                </div>

                <p className="px-3 pb-3 text-[11px] font-medium text-black">
                  Do you have this product?
                </p>
              </div>

              <UserAvatar />
            </motion.div>

            <motion.div
              style={{
                opacity:
                  productReplyOpacity,
                y:
                  productReplyY,
              }}
              className="flex items-end gap-2"
            >
              <BotAvatar />

              <div className="w-[205px] overflow-hidden rounded-[19px] rounded-bl-md border border-black/10 bg-white shadow-sm">
                <div className="flex items-center gap-2 p-2.5">
                  <img
                    src={availableProductImage}
                    alt="Available product"
                    className="h-[60px] w-[60px] shrink-0 rounded-xl border border-black/5 object-cover"
                  />

                  <div className="min-w-0">
                    <p className="text-[11px] font-bold leading-tight text-black">
                      Requested Product
                    </p>

                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600">
                      <Check size={10} />
                      In stock
                    </div>
                  </div>
                </div>

                <p className="border-t border-black/5 px-3 py-2.5 text-[11px] leading-relaxed text-black/70">
                  Yes. This product is currently available.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity:
                  confirmQuestionOpacity,
                y:
                  confirmQuestionY,
              }}
              className="flex items-end gap-2"
            >
              <BotAvatar />

              <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-black shadow-sm">
                Would you like me to confirm delivery for this item?
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity:
                  customerConfirmOpacity,
                y:
                  customerConfirmY,
              }}
              className="flex items-end justify-end gap-2"
            >
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[#FF914D] px-3 py-2.5 text-[11px] font-medium text-black shadow-sm">
                Yes, please confirm the delivery.
              </div>

              <UserAvatar />
            </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-2 left-1/2 z-50 h-1.5 w-28 -translate-x-1/2 rounded-full bg-black/75" />
        </div>
      </div>
    </div>
  );

};


const BotAvatar = () => {

  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[#FF914D]">
      <Bot size={13} />
    </div>
  );

};


const UserAvatar = () => {

  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
      <User size={13} />
    </div>
  );

};


export default IPhoneOrderDemo;
