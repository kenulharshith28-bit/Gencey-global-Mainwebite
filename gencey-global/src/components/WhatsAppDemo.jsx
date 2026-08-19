import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Sparkles,
} from "lucide-react";

const WhatsAppDemo = () => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickMessages = [
    "Hello 👋",
    "What services do you provide?",
    "I'm interested",
    "Talk to your team",
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi 👋 I'm Gencey AI. How can I help your business today?",
    },
  ]);

  const messagesContainerRef = useRef(null);
  const nextMessageIdRef = useRef(2);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);


  const getBotReply = (message) => {
  const text = message.toLowerCase();

  // HELLO / GREETING
  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return `Hi 👋 Welcome to Gencey Global!

We provide:

• Custom Software Solutions
• CRM Systems
• AI & Automation
• Web Development
• Mobile Applications
• Cloud Solutions
• WhatsApp & AI Chatbots

Tell me which solution you're interested in and I'll guide you.`;
  }

  // SERVICES
  if (
    text.includes("services") ||
    text.includes("what do you provide") ||
    text.includes("what do you do")
  ) {
    return `Gencey Global provides a range of digital solutions:

• Custom Software
• CRM Systems
• AI & Automation
• Web Development
• Mobile Apps
• Cloud Solutions
• WhatsApp AI Chatbots

If you're interested in any of these, just type "I'm interested".`;
  }

  // INTERESTED
  if (
    text.includes("interested") ||
    text.includes("i am interested") ||
    text.includes("i'm interested")
  ) {
    return `That's great! 🚀

I'll direct you to one of our Gencey Global team members so they can understand your requirements and recommend the right solution.

You can use the "Book a Free Call" button or contact our team to continue.`;
  }

  // CRM
  if (text.includes("crm")) {
    return `Yes. We build custom CRM systems for managing customers, leads, sales, conversations and business operations.

If you're interested, type "I'm interested" and I'll guide you to our team.`;
  }

  // AI
  if (
    text.includes("ai") ||
    text.includes("chatbot") ||
    text.includes("whatsapp")
  ) {
    return `Yes. Gencey Global provides AI automation and WhatsApp chatbot solutions that can handle customer conversations and automate repetitive business processes.

Interested? Type "I'm interested".`;
  }

  // WEBSITE
  if (
    text.includes("website") ||
    text.includes("web")
  ) {
    return `Absolutely. We design and develop modern websites and web applications tailored to business requirements.

If you'd like to discuss a project, type "I'm interested".`;
  }

  // MOBILE
  if (
    text.includes("mobile") ||
    text.includes("app")
  ) {
    return `We develop modern mobile applications focused on usability, performance and real business requirements.

Type "I'm interested" if you'd like to discuss your idea.`;
  }

  // CLOUD
  if (text.includes("cloud")) {
    return `We provide scalable cloud solutions for modern applications and business systems.

If you'd like to discuss your requirements, type "I'm interested".`;
  }

  // CONTACT
  if (
    text.includes("contact") ||
    text.includes("team") ||
    text.includes("meeting")
  ) {
    return `Sure! I'll direct you to the Gencey Global team.

Use the "Book a Free Call" button on this website to arrange a conversation with our team.`;
  }

  // FALLBACK
  return `I'd be happy to help. You can ask me about our software, CRM, AI, web, mobile or cloud solutions.

You can also ask "What services do you provide?"`;
};

  const sendMessage = async (message) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isTyping) return;

    const userMessage = {
      id: nextMessageIdRef.current,
      sender: "user",
      text: trimmedMessage,
    };

    nextMessageIdRef.current += 1;

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    const botMessage = {
      id: nextMessageIdRef.current,
      sender: "bot",
      text: getBotReply(trimmedMessage),
    };

    nextMessageIdRef.current += 1;

    setMessages((currentMessages) => [
      ...currentMessages,
      botMessage,
    ]);

    setIsTyping(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(input);
  };

  return (
    <section
      id="ai-demo"
      className="
        relative
        py-28
        md:py-36
        bg-white
        overflow-hidden
      "
    >
      {/* Orange Glow */}
      <div
        className="
          absolute
          top-20
          right-[-100px]
          w-[450px]
          h-[450px]
          bg-[#FF914D]
          opacity-10
          blur-[150px]
          rounded-full
          pointer-events-none
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
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-[#FF914D]/10
                text-[#FF914D]
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              <Sparkles size={16} />
              Experience Gencey AI
            </div>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-black
              "
            >
              See intelligent
              <span className="text-[#FF914D]"> automation</span>
              {" "}in action.
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-black/60
                leading-relaxed
                max-w-xl
              "
            >
              Ask the demo about CRM systems, websites,
              AI automation, mobile apps or cloud solutions
              and see how an intelligent customer assistant
              could respond instantly.
            </p>

            <div className="mt-10 space-y-5">
              <Feature
                title="Instant customer responses"
                description="Provide useful answers without making customers wait."
              />

              <Feature
                title="24/7 availability"
                description="Automation can support customers beyond normal business hours."
              />

              <Feature
                title="Connected business systems"
                description="Chatbots can later integrate with CRM, inventory and internal workflows."
              />
            </div>

            <div className="mt-10">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-black/35
                "
              >
                Try a quick message
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {quickMessages.map((message) => (
                  <button
                    key={message}
                    type="button"
                    onClick={() => sendMessage(message)}
                    disabled={isTyping}
                    className="
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-black/65
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-[#FF914D]
                      hover:bg-[#FFF9F5]
                      hover:text-black
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    {message}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PHONE UI */}
          <div className="w-full flex justify-center">
            <div className="relative">
              {/* Side buttons */}
              <div
                className="
                  absolute
                  -left-[6px]
                  top-24
                  h-14
                  w-[4px]
                  rounded-full
                  bg-black/70
                "
              />
              <div
                className="
                  absolute
                  -left-[6px]
                  top-44
                  h-20
                  w-[4px]
                  rounded-full
                  bg-black/70
                "
              />
              <div
                className="
                  absolute
                  -left-[6px]
                  top-72
                  h-20
                  w-[4px]
                  rounded-full
                  bg-black/70
                "
              />
              <div
                className="
                  absolute
                  -right-[6px]
                  top-44
                  h-24
                  w-[4px]
                  rounded-full
                  bg-black/70
                "
              />

              {/* iPhone Body */}
              <div
                className="
                  relative
                  w-[340px]
                  sm:w-[380px]
                  h-[720px]
                  rounded-[3.2rem]
                  bg-[#111111]
                  p-[10px]
                  shadow-[0_35px_100px_rgba(0,0,0,0.22)]
                  border
                  border-black/20
                "
              >
                {/* Screen */}
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[2.7rem]
                    bg-white
                    border
                    border-white/10
                  "
                >
                  {/* Dynamic Island */}
                  <div
                    className="
                      absolute
                      top-3
                      left-1/2
                      -translate-x-1/2
                      z-30
                      h-8
                      w-32
                      rounded-full
                      bg-black
                      shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                    "
                  />

                  {/* Chat UI */}
                  <div className="flex h-full flex-col">
                    {/* Header */}
                    <div
                      className="
                        px-5
                        pt-14
                        pb-4
                        border-b
                        border-black/10
                        bg-white
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              w-12
                              h-12
                              rounded-full
                              bg-[#FF914D]
                              flex
                              items-center
                              justify-center
                              text-black
                            "
                          >
                            <Bot size={22} />
                          </div>

                          <div>
                            <h3 className="font-bold text-black text-lg">
                              Gencey AI
                            </h3>

                            <div className="flex items-center gap-2 mt-1">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              <p className="text-sm text-black/45">
                                Online
                              </p>
                            </div>
                          </div>
                        </div>

                        <MessageCircle
                          size={20}
                          className="text-[#FF914D]"
                        />
                      </div>
                    </div>

                    {/* Messages */}
                    <div
                        ref={messagesContainerRef}
                        className="
                          flex-1
                          overflow-y-auto
                          overscroll-contain
                          bg-[#FFF9F5]
                          px-4
                          py-5
                          space-y-4
                        "
                      >
                      {messages.map((message) => (
                        <MessageBubble
                          key={message.id}
                          sender={message.sender}
                          text={message.text}
                        />
                      ))}

                      {isTyping && <TypingBubble />}
                    </div>

                    {/* Input */}
                    <form
                      onSubmit={handleSubmit}
                      className="
                        p-4
                        bg-white
                        border-t
                        border-black/10
                      "
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={input}
                          disabled={isTyping}
                          onChange={(event) =>
                            setInput(event.target.value)
                          }
                          placeholder="Ask Gencey AI..."
                          className="
                            flex-1
                            h-14
                            rounded-full
                            border
                            border-black/10
                            bg-[#F7F7F7]
                            px-5
                            text-black
                            outline-none
                            placeholder:text-black/35
                            focus:border-[#FF914D]
                            transition-colors
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        />

                        <button
                          type="submit"
                          disabled={isTyping}
                          className="
                            w-14
                            h-14
                            shrink-0
                            rounded-full
                            bg-[#FF914D]
                            text-black
                            flex
                            items-center
                            justify-center
                            hover:scale-105
                            transition-transform
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            disabled:hover:scale-100
                          "
                        >
                          <Send size={20} />
                        </button>
                      </div>
                    </form>

                    {/* Home indicator */}
                    <div
                      className="
                        absolute
                        bottom-2
                        left-1/2
                        -translate-x-1/2
                        w-32
                        h-1.5
                        rounded-full
                        bg-black/80
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

const MessageBubble = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`
        flex items-end gap-2
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      {!isUser && (
        <div
          className="
            w-8
            h-8
            shrink-0
            rounded-full
            bg-black
            text-[#FF914D]
            flex
            items-center
            justify-center
          "
        >
          <Bot size={15} />
        </div>
      )}

      <div
        className={`
          max-w-[78%]
          px-4
          py-3
          rounded-2xl
          text-sm
          leading-relaxed
          whitespace-pre-line
          ${
            isUser
              ? "bg-[#FF914D] text-black rounded-br-md"
              : "bg-white text-black border border-black/10 rounded-bl-md"
          }
        `}
      >
        {text}
      </div>

      {isUser && (
        <div
          className="
            w-8
            h-8
            shrink-0
            rounded-full
            bg-black
            text-white
            flex
            items-center
            justify-center
          "
        >
          <User size={15} />
        </div>
      )}
    </div>
  );
};

const TypingBubble = () => {
  return (
    <div className="flex items-end gap-2">
      <div
        className="
          w-8
          h-8
          shrink-0
          rounded-full
          bg-black
          text-[#FF914D]
          flex
          items-center
          justify-center
        "
      >
        <Bot size={15} />
      </div>

      <div
        className="
          flex
          items-center
          gap-1.5
          bg-white
          border
          border-black/10
          px-4
          py-4
          rounded-2xl
          rounded-bl-md
          shadow-sm
        "
      >
        <span className="typing-dot" />
        <span className="typing-dot typing-dot-delay-1" />
        <span className="typing-dot typing-dot-delay-2" />
      </div>
    </div>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className="flex gap-4">
      <div
        className="
          mt-1
          w-9
          h-9
          shrink-0
          rounded-xl
          bg-[#FF914D]/10
          text-[#FF914D]
          flex
          items-center
          justify-center
        "
      >
        <MessageCircle size={17} />
      </div>

      <div>
        <h3 className="font-bold text-black">{title}</h3>

        <p
          className="
            mt-1
            text-sm
            text-black/50
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
