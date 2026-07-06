import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../App.css";

const BACKEND_URL = "http://localhost:5000"; // deploy hone par ye URL change karna

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/contact`, formData);

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out, I'll get back to you soon.",
          confirmButtonColor: "#75c310",
          background: "#1e293b",
          color: "#ffffff",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later or email me directly.",
        confirmButtonColor: "#75c310",
        background: "#1e293b",
        color: "#ffffff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-slate-800 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-160 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Get In <span className="text-[#75c310]">Touch</span>
        </h1>
        <p className="text-[#e5e4e2] mt-4 text-base md:text-lg">
          Have a project in mind or just want to say hi? Fill the form below
          and I'll respond as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto mt-12 flex max-w-160 flex-col gap-6 rounded-2xl bg-slate-900 p-6 md:p-10 shadow-[0_8px_30px_rgba(117,195,16,0.4)]"
      >
        {/* Name */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-white font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full rounded-lg bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none border ${
              errors.name ? "border-red-500" : "border-slate-700"
            } focus:border-[#75c310] transition-colors duration-300`}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full rounded-lg bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none border ${
              errors.email ? "border-red-500" : "border-slate-700"
            } focus:border-[#75c310] transition-colors duration-300`}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-white font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows="5"
            className={`w-full resize-none rounded-lg bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none border ${
              errors.message ? "border-red-500" : "border-slate-700"
            } focus:border-[#75c310] transition-colors duration-300`}
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-500">{errors.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-lg bg-[#75c310] py-3 text-lg font-bold text-black transition-all duration-300 hover:bg-[#5aa10c] hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Direct contact info */}
      <div className="mx-auto mt-10 flex max-w-160 flex-col items-center gap-3 text-[#e5e4e2]">
        <p>
          Or email me directly at{" "}
          <a
            href="mailto:hinanisar7860@gmail.com"
            className="text-[#75c310] hover:underline"
          >
            hinanisar7860@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;