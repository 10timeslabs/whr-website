"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";
import GetInTouch from "@/components/GetInTouch";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    busEmail: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    busEmail?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    let newErrors: typeof errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.busEmail) newErrors.busEmail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.busEmail))
      newErrors.busEmail = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const submitData = new FormData();
    submitData.append("firstName", formData.firstName);
    submitData.append("lastName", formData.lastName);
    submitData.append("busEmail", formData.busEmail);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://board.10times.com/enquiry/submit", {
        method: "POST",
        body: submitData,
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ firstName: "", lastName: "", busEmail: "", message: "" });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <GeneralNavbar />
      <div className="pt-[120px] flex flex-col items-center">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] ">
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Contact Us
          </h2>
          <p className="text-gray-500 text-center mb-4">
            We’d love to hear from you!
          </p>

          {submitted && (
            <p className="text-primary text-center">
              Thank you! We'll get back to you soon.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="busEmail"
                value={formData.busEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.busEmail && (
                <p className="text-red-500 text-sm">{errors.busEmail}</p>
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
