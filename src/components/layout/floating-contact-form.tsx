import { useRef, useState } from "react";
import Icon from "../ui/icon";
import clsx from "clsx";
import Textfield from "../ui/textfield";
import TextArea from "../ui/textarea";
import Button from "../ui/button";

type SubmitResponse = {
  data: {
    sender: string;
    email: string;
    message: string;
  };
  success: boolean;
  message: string;
};

const FloatingContactForm = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      try {
        setIsSubmitting(true);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3_FORM_ACCESS_KEY,
            sender: formRef.current?.sender.value,
            email: formRef.current?.email.value,
            message: formRef.current?.message.value,
          }),
        });

        const result: SubmitResponse = await response.json();

        if (result?.success) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.log("Error submitting form:", error);
      }
      setIsSubmitting(false);
    } else {
      formRef.current?.reportValidity();
    }
  };
  return (
    <>
      {isPopoverOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsPopoverOpen(false)}
        ></div>
      )}
      <div
        className={clsx(
          {
            "opacity-0 translate-y-4 pointer-events-none": !isPopoverOpen,
            "opacity-100 translate-y-0": isPopoverOpen,
          },
          "fixed bottom-0 h-3/4 w-full z-50 transition-all ease-in-out bg-secondary shadow-2xl md:w-1/4 md:rounded-md md:bottom-20 md:right-4 md:h-1/2"
        )}
      >
        {!isSubmitted ? (
          <div className="relative w-full h-full">
            <div className="w-full bg-primary py-6 rounded-t-md">
              <h3 className="text-center">Get in touch!</h3>
            </div>

            <form ref={formRef}>
              <div className="mt-4 flex flex-col gap-4 justify-between p-3">
                <Textfield label="Name" required name="sender" />
                <Textfield label="Email" type="email" name="email" required />
                <TextArea label="Message" name="message" required />
              </div>
              <Button
                variant="primary"
                className="w-[95%] mx-auto mt-8 md:absolute md:bottom-3 md:left-[50%] md:-translate-x-[50%] py-3"
                onClick={submitForm}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 32 32"
            >
              <path
                fill="#00a884"
                d="M22.8 12.3c.304-.308.304-.808 0-1.12s-.796-.308-1.1 0l-7.75 7.86l-3.6-3.65a.77.77 0 0 0-1.1 0a.8.8 0 0 0 0 1.12l4.15 4.21a.77.77 0 0 0 1.1 0z"
              />
              <path
                fill="#00a884"
                fill-rule="evenodd"
                d="M32 16c0 8.84-7.16 16-16 16S0 24.84 0 16S7.16 0 16 0s16 7.16 16 16m-1 0c0 8.28-6.72 15-15 15S1 24.28 1 16S7.72 1 16 1s15 6.72 15 15"
                clip-rule="evenodd"
              />
            </svg>
            <span>Message sent succesfully!</span>
          </div>
        )}
      </div>

      <div
        className={clsx(
          "fixed bottom-4 right-4 bg-[#3a506b] rounded-full p-3 lg:opacity-50 lg:hover:opacity-100 transition-opacity cursor-pointer z-50",
          { "lg:opacity-100": isPopoverOpen, "animate-bounce": !isPopoverOpen }
        )}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isPopoverOpen ? "rotate-180" : ""
          }`}
        >
          {isPopoverOpen ? (
            <Icon type="CloseIcon" color="#fff" />
          ) : (
            <Icon type="ContactIcon" color="#fff" />
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingContactForm;
