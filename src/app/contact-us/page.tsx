"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";
import GetInTouch from "@/components/GetInTouch";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    let newErrors: typeof errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <GeneralNavbar />
      <div className="pt-[120px] flex flex-col items-center">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Contact Us
          </h2>
          <p className="text-gray-500 text-center mb-4">
            We’d love to hear from you!
          </p>

          {submitted && (
            <p className="text-green-600 text-center">
              Thank you! We'll get back to you soon.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Page;
