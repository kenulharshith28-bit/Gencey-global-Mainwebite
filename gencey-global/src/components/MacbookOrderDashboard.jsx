import { motion } from "framer-motion";

import {
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  Home,
  MessageCircle,
  Package,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { MacbookPro } from "./ui/macbook-pro";


const MacbookOrderDashboard = ({
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

  const customerProductImage =
    "/images/Product/product.png";

  const availableProductImage =
    "/images/Product/product.png";

  return (
    <div className="relative mx-auto w-[96vw] max-w-[700px]">
      <MacbookPro className="w-full h-auto text-[#F5F1EB] drop-shadow-[0_30px_45px_rgba(0,0,0,0.18)]" />

      <div className="absolute left-[11.46%] top-[5.33%] h-[80.96%] w-[77.11%] overflow-hidden rounded-[5px] bg-[#F5F2EC]">
        <div className="flex h-full">
          <aside className="w-[20%] shrink-0 bg-gradient-to-b from-[#FFAA75] to-[#FF914D] p-[2.5%]">
            <div className="rounded-[10px] bg-white/90 px-[8%] py-[7%] shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FF914D] text-black">
                  <Bot size={12} />
                </div>
                <div>
                  <p className="text-[clamp(7px,0.75vw,11px)] font-extrabold text-[#FF914D]">
                    Gencey
                  </p>
                  <p className="text-[clamp(4px,0.4vw,6px)] text-black/40">
                    Dashboard
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[10%] space-y-[3%]">
              <SidebarItem icon={<Home />} text="Home" />
              <SidebarItem icon={<MessageCircle />} text="Live Chat" active />
              <SidebarItem icon={<Users />} text="Customers" />
              <SidebarItem icon={<Package />} text="Inventory" />
              <SidebarItem icon={<ShoppingCart />} text="Orders" />
              <SidebarItem icon={<BarChart3 />} text="Reports" />
              <SidebarItem icon={<Settings />} text="Settings" />
            </div>
          </aside>

          <main className="min-w-0 flex-1 p-[2.5%]">
            <div className="rounded-[11px] bg-white px-[3%] py-[2.5%] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
              <p className="text-[clamp(4px,0.48vw,7px)] font-bold uppercase tracking-[0.12em] text-[#FF914D]">
                Customer Inbox
              </p>
              <h3 className="mt-[0.5%] text-[clamp(9px,1.3vw,18px)] font-extrabold leading-none text-black">
                Live Webhook Chat
              </h3>
              <p className="mt-[1%] text-[clamp(4px,0.43vw,6px)] text-black/45">
                Monitor the same customer conversation from the business side.
              </p>
            </div>

            <div className="mt-[2.5%] grid h-[72%] grid-cols-[0.35fr_0.65fr] gap-[2%]">
              <section className="overflow-hidden rounded-[12px] border border-black/[0.06] bg-white p-[3%] shadow-sm">
                <div className="flex items-center gap-1.5 rounded-[8px] border border-black/10 bg-[#FAF8F5] px-[4%] py-[4%]">
                  <Search className="h-[10px] w-[10px] text-black/30" />
                  <span className="text-[clamp(4px,0.42vw,6px)] text-black/35">
                    Search customers...
                  </span>
                </div>

                <div className="mt-[4%] space-y-[3%]">
                  <CustomerItem name="Harshith" number="94740780496" active />
                  <CustomerItem name="Test User" number="94728506970" />
                  <CustomerItem name="Customer" number="94770000000" />
                </div>
              </section>

              <section className="relative flex min-w-0 flex-col overflow-hidden rounded-[12px] border border-black/[0.06] bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-black/[0.06] px-[4%] py-[3%]">
                  <div>
                    <p className="text-[clamp(7px,0.85vw,12px)] font-extrabold leading-none text-black">
                      Harshith
                    </p>
                    <p className="mt-1 text-[clamp(4px,0.4vw,6px)] text-black/40">
                      94740780496 · WhatsApp
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-green-50 px-[3%] py-[1.5%] text-[clamp(4px,0.4vw,6px)] font-bold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    AI Active
                  </div>
                </div>

                <div className="flex-1 overflow-hidden bg-[#FFFCF9] px-[4%] py-[3%]">
                  <motion.div
                    style={{
                      y:
                        chatScrollY,
                    }}
                    className="space-y-[2.5%] pb-[12%]"
                  >
                    <motion.div
                      style={{
                        opacity:
                          welcomeOpacity,
                        y:
                          welcomeY,
                      }}
                    >
                      <ChatLabel text="Gencey AI · 03:10 PM" />
                      <div className="mt-[1%] w-[74%] rounded-[9px] border border-[#FF914D]/20 bg-[#FFF7F1] px-[3%] py-[2.4%] shadow-sm">
                        <p className="text-[clamp(5px,0.54vw,8px)] leading-relaxed text-black/75">
                          Hi. Welcome to Gencey Chat. How can I help you today?
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      style={{
                        opacity:
                          productRequestOpacity,
                        y:
                          productRequestY,
                      }}
                      className="flex flex-col items-end"
                    >
                      <ChatLabel text="Customer · 03:11 PM" />
                      <div className="mt-[1%] w-[52%] rounded-[9px] border border-black/[0.07] bg-white p-[2%] shadow-sm">
                        <p className="text-[clamp(5px,0.54vw,8px)] font-medium text-black">
                          Do you have this product?
                        </p>
                        <img
                          src={customerProductImage}
                          alt="Customer requested product"
                          className="mt-[3%] h-[42px] w-full rounded-[6px] object-cover"
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
                    >
                      <ChatLabel text="Gencey AI · 03:11 PM" />
                      <div className="mt-[1%] w-[78%] overflow-hidden rounded-[10px] border border-[#FF914D]/25 bg-[#FFF7F1] shadow-sm">
                        <div className="flex items-center gap-2 p-[2.5%]">
                          <img
                            src={availableProductImage}
                            alt="Available product"
                            className="h-[35px] w-[35px] shrink-0 rounded-[7px] border border-black/5 object-cover"
                          />
                          <div className="min-w-0">
                            <p className="text-[clamp(5px,0.54vw,8px)] font-extrabold leading-tight text-black">
                              Requested Product
                            </p>
                            <div className="mt-[3%] inline-flex items-center gap-1 rounded-full bg-green-50 px-1.5 py-0.5 text-[clamp(3px,0.34vw,5px)] font-bold text-green-600">
                              <Check size={8} />
                              In stock
                            </div>
                          </div>
                        </div>
                        <p className="border-t border-black/5 px-[3%] py-[2%] text-[clamp(5px,0.54vw,8px)] leading-relaxed text-black/70">
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
                    >
                      <ChatLabel text="Gencey AI · 03:11 PM" />
                      <div className="mt-[1%] w-[72%] rounded-[9px] border border-[#FF914D]/25 bg-[#FFF7F1] px-[3%] py-[2.4%] shadow-sm">
                        <p className="text-[clamp(5px,0.54vw,8px)] leading-relaxed text-black/75">
                          Would you like me to confirm delivery for this item?
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      style={{
                        opacity:
                          customerConfirmOpacity,
                        y:
                          customerConfirmY,
                      }}
                      className="flex flex-col items-end"
                    >
                      <ChatLabel text="Customer · 03:12 PM" />
                      <div className="mt-[1%] inline-block max-w-[72%] rounded-[9px] bg-[#FF914D] px-[3%] py-[2%] text-[clamp(5px,0.54vw,8px)] font-medium text-black shadow-sm">
                        Yes, please confirm the delivery.
                      </div>
                    </motion.div>

                    <motion.div
                      style={{
                        opacity:
                          replyOpacity,
                        y:
                          replyY,
                      }}
                    >
                      <ChatLabel text="Operations · 03:12 PM" />
                      <div className="mt-[1%] w-[82%] rounded-[10px] border border-[#FF914D]/30 bg-[#FFF1E8] px-[3%] py-[2.5%] shadow-sm">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-[clamp(4px,0.42vw,6px)] font-bold uppercase tracking-[0.1em] text-[#FF914D]">
                              Customer Confirmation
                            </p>
                            <p className="mt-[1%] text-[clamp(5px,0.58vw,8px)] font-extrabold text-black">
                              Delivery approved
                            </p>
                          </div>
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                            <Check size={10} />
                          </div>
                        </div>

                        <div className="my-[2.5%] h-px bg-black/10" />

                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={12} className="shrink-0 text-[#FF914D]" />
                          <div>
                            <p className="text-[clamp(4px,0.42vw,6px)] font-bold uppercase tracking-[0.1em] text-[#FF914D]">
                              Order Status
                            </p>
                            <p className="mt-[1%] text-[clamp(6px,0.62vw,9px)] font-extrabold text-black">
                              Delivery confirmed
                            </p>
                            <p className="mt-[1%] text-[clamp(4px,0.4vw,6px)] text-black/45">
                              Order #GG-1048 · Sent to fulfilment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="flex items-center gap-[2%] border-t border-black/[0.06] bg-white p-[2%]">
                  <div className="flex-1 rounded-[7px] border border-black/10 bg-[#FAF8F5] px-[3%] py-[2.5%] text-[clamp(4px,0.4vw,6px)] text-black/30">
                    Type a manual message...
                  </div>
                  <button className="flex items-center justify-center rounded-[7px] bg-[#FF914D] px-[4%] py-[2.5%] text-black">
                    <Send className="h-[10px] w-[10px]" />
                  </button>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );

};


const SidebarItem = ({
  icon,
  text,
  active = false,
}) => {

  return (
    <div
      className={`
        flex items-center gap-2 rounded-[7px] px-[7%] py-[7%]
        ${active ? "bg-[#FF7D32] text-black shadow-sm" : "text-white/90"}
      `}
    >
      <span className="[&>svg]:h-[10px] [&>svg]:w-[10px]">
        {icon}
      </span>
      <span className="text-[clamp(4px,0.44vw,7px)] font-semibold">
        {text}
      </span>
    </div>
  );

};


const CustomerItem = ({
  name,
  number,
  active = false,
}) => {

  return (
    <div
      className={`
        rounded-[8px] border px-[5%] py-[4%]
        ${active ? "border-[#FF914D]/60 bg-[#FFF7F1]" : "border-black/[0.06] bg-white"}
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[clamp(5px,0.52vw,8px)] font-bold text-black">
            {name}
          </p>
          <p className="mt-[1%] text-[clamp(4px,0.38vw,6px)] text-black/45">
            {number}
          </p>
        </div>
        <div className="rounded-full bg-green-50 px-1.5 py-0.5 text-[clamp(3px,0.3vw,5px)] font-bold text-green-600">
          AI Auto
        </div>
      </div>
    </div>
  );

};


const ChatLabel = ({
  text,
}) => {

  return (
    <p className="text-[clamp(4px,0.38vw,6px)] font-semibold text-black/45">
      {text}
    </p>
  );

};


export default MacbookOrderDashboard;
