import { useState } from "react";

import {
  Bot,
  Send,
  X,
  MessageCircle,
} from "lucide-react";

function Chatbot() {

  const [open, setOpen] = useState(false);

  const messages = [
    {
      type: "bot",
      text: "Hello 👋 How can I help you today?",
    },
    {
      type: "user",
      text: "How do I track my complaint?",
    },
    {
      type: "bot",
      text: "You can track complaint progress from the complaint details page.",
    },
  ];

  return (
    <>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          z-50

          w-16
          h-16

          rounded-2xl
          bg-blue-600
          hover:bg-blue-700

          text-white

          flex
          items-center
          justify-center

          shadow-lg

          transition-all
          duration-300
        "
      >

        {
          open
            ? <X size={26} />
            : <MessageCircle size={26} />
        }

      </button>

      {/* Chat Window */}
      {
        open && (
          <div
            className="
              fixed
              bottom-24
              right-6
              z-50

              w-[92vw]
              max-w-sm

              h-[560px]

              bg-white
              border
              border-slate-200
              rounded-3xl

              shadow-2xl

              flex
              flex-col

              overflow-hidden
            "
          >

            {/* Header */}
            <div className="
              h-20
              border-b
              border-slate-200
              px-5

              flex
              items-center
              gap-4

              bg-white
            ">

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-blue-600
                text-white

                flex
                items-center
                justify-center
              ">

                <Bot size={24} />

              </div>

              <div>

                <h2 className="
                  font-bold
                  text-slate-900
                ">
                  Civic Assistant
                </h2>

                <p className="
                  text-sm
                  text-green-600
                ">
                  Online
                </p>

              </div>

            </div>

            {/* Messages */}
            <div className="
              flex-1
              overflow-y-auto
              px-5
              py-5

              flex
              flex-col
              gap-4

              bg-slate-50
            ">

              {messages.map((message, index) => (

                <div
                  key={index}
                  className={`
                    flex

                    ${
                      message.type === "user"
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >

                  <div
                    className={`
                      max-w-[80%]
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      leading-6

                      ${
                        message.type === "user"
                          ? `
                            bg-blue-600
                            text-white
                            rounded-br-md
                          `
                          : `
                            bg-white
                            text-slate-700
                            border
                            border-slate-200
                            rounded-bl-md
                          `
                      }
                    `}
                  >

                    {message.text}

                  </div>

                </div>

              ))}

              {/* Suggestions */}
              <div className="
                flex
                flex-wrap
                gap-3
                pt-2
              ">

                {[
                  "Track Complaint",
                  "Emergency Help",
                  "Contact Department",
                ].map((item, index) => (

                  <button
                    key={index}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-white
                      border
                      border-slate-200

                      text-sm
                      text-slate-700

                      hover:bg-slate-100

                      transition-all
                      duration-200
                    "
                  >

                    {item}

                  </button>

                ))}

              </div>

            </div>

            {/* Input */}
            <div className="
              border-t
              border-slate-200
              p-4
              bg-white
            ">

              <div className="
                flex
                items-center
                gap-3
              ">

                <input
                  type="text"
                  placeholder="Type your message..."
                  className="
                    flex-1
                    h-12
                    rounded-2xl
                    border
                    border-slate-200
                    px-4
                    outline-none

                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500

                    transition-all
                    duration-200
                  "
                />

                <button
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-700

                    text-white

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-200
                  "
                >

                  <Send size={18} />

                </button>

              </div>

            </div>

          </div>
        )
      }

    </>
  );
}

export default Chatbot;