import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Nav from "../Navbar/Navbar";
import Footer from "../Footer/footer";

const ContactForm = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("Submit Message");

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    emailjs.init("prHQtJmTDNizbCLnC"); // Replace with your actual EmailJS user ID
  }, []);

  const sendEmail = (data, e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText("Sending...");

    emailjs
      .sendForm("service_3es61pk", "template_jwtvdcr", form.current)
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. We'll get back to you soon!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
          });

          setIsSending(false);
          setButtonText("Submit Message");
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again later.",
            icon: "error",
            confirmButtonText: "Retry",
            confirmButtonColor: "#d33",
          });

          setIsSending(false);
          setButtonText("Submit Message");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Nav />
      <section className="flex justify-center items-center min-h-screen p-6 pt-20 bg">
        <div className="max-w-2xl w-full bg2 p-8 rounded-lg shadow-lg">
          <h1 className="md:text-4xl text-2xl pb-3 text-white font text-center">Contact Me</h1>
          <p className="text-gray-400 font rounded-full pb-3">|| Get In Touch</p>
          <h2 className="text-white text-3xl font-semibold mb-4 font">
            If you have any project or need help, Contact me
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  {...register("from_name", { required: "Name is required" })}
                  placeholder="Name"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Phone"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Subject"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="w-full p-3 h-24 rounded bg-gray-700 text-white"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-40 py-3 text-white rounded-full hover:bg-gray-500 border border-gray-400 disabled:opacity-50"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactForm;
