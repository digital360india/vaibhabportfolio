import { useRef } from "react";
import emailjs from "emailjs-com";

const Getintouch = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2iaq6tf",
        "template_68l0ko2", 
        formRef.current,
        "bSB94SDGaiPiicrX_" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          formRef.current.reset(); 
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="md:flex md:justify-center md:items-center px-16 lg:px-0 md:px-24 bg-[#202020] py-12">
      <div className="md:flex md:justify-center md:items-center gap-20">
        <div>
          <h1 className="text-[#00B1B2] text-[28px] font-poppins">GET IN TOUCH</h1>
          <h1
            className="text-[60px] leading-tight font-bold text-[#FFFFFF] mt-5"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Don&apos;t hesitate to
            <br />
            ask a question
          </h1>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="pt-8">
          <div className="font-poppins">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your Name"
              className="border-b-[1px] border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-8 md:w-[250px] lg:w-[230px] text-white w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your E-mail"
              className="lg:ml-5 border-b-[1px] border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-8 md:w-[250px] lg:w-[230px] text-white w-full"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Enter your Subject"
            className="border-b-[1px] border-l-[1px] w-full bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-9 gap-[10px] md:w-[250px] lg:w-[480px] md:h-[50px] text-white"
            required
          />
          <div>
            <textarea
              name="message"
              placeholder="Your message here"
              className="border-b-[1px] w-full border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] gap-[10px] lg:w-[480px] md:w-[250px] h-[100px] text-white"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[20px] py-3 px-3 font-poppins text-[#00B1B2] border-[#00B1B2] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Getintouch;
