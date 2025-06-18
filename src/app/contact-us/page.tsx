"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Image from "next/image";
import Link from "next/link";
import InstaIcon from "/public/social_link_icons/Vector (1).svg";
import linkedInIcon from "/public/social_link_icons/Vector (3).svg";
import youtubeIcon from "/public/social_link_icons/Vector (5).svg";
import TwitterIcon from "/public/social_link_icons/Vector.svg";
import HomeNavbar from "@/components/HomeNavbar";
import {submitContactForm} from "@/actions/contactUs-actions"

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    busEmail: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    busEmail?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.busEmail.trim()) newErrors.busEmail = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.busEmail)) newErrors.busEmail = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = async (formDataObj: FormData) => {
    // Client-side validation
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Add pageUrl to form data
    formDataObj.append("pageUrl", window.location.href)

    try {
      const result = await submitContactForm(formDataObj)

      console.log(result)

      if (result.success) {
        setSubmitted(true)
        setSubmissionMessage(result.message)
        setTimeout(() => {
          setSubmitted(false)
          setSubmissionMessage("")
        }, 3000)
        setFormData({ firstName: "", lastName: "", busEmail: "", message: "" })
      } else {
        setSubmissionMessage(result.message)
        setTimeout(() => setSubmissionMessage(""), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmissionMessage("Something went wrong. Please try again.")
      setTimeout(() => setSubmissionMessage(""), 3000)
    }
  }

  return (
    <div>
      {/* <GeneralNavbar /> */}
      <HomeNavbar />
      <div className="pt-[120px] flex flex-col items-center">
        <div className="flex justify-evenly w-[87%] max-[950px]:flex-col">
          <div className="text-left w-[300px] max-[950px]:hidden">
            <h2 className="text-[34px] font-bold text-gray-700">
              Contact Us
            </h2>
            <p className="font-[200] text-[28px] mt-5 text-[var(--primary-color)]">Bengaluru</p>
            <p className="text-gray-500 mt-2">
              Address: Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
              Bengaluru 560025
            </p>
            <p className="mt-2">Email : be@whr.ai</p>
            <p className="mt-2 font-semibold">+91-9353648076</p>
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-10">
              <Link href="https://www.linkedin.com/company/whrai/" target="_blank">
                <Image src={linkedInIcon} alt="LinkedIn" />
              </Link>
              <Link href="https://x.com/whr_ai" target="_blank">
                <Image src={TwitterIcon} alt="Twitter" />
              </Link>
              <Link href="https://www.instagram.com/whr_ai/" target="_blank">
                <Image src={InstaIcon} alt="Instagram" />
              </Link>
              <Link href="https://www.youtube.com/@whrai" target="_blank">
                <Image src={youtubeIcon} alt="YouTube" />
              </Link>
            </div>
          </div>
          <div className="w-[550px] bg-white p-6 rounded-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] max-[950px]:w-full">
            <h2 className="text-2xl font-bold text-gray-700 text-center">
              Get in touch
            </h2>
            <p className="text-gray-500 text-center mb-4">
              We’d love to hear from you!
            </p>

            {submitted && (
              <p className="text-primary text-center">
                Thank you! We'll get back to you soon.
              </p>
            )}

            <form action={handleSubmit}  className="space-y-4">
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
          <div className="text-left w-[300px] hidden max-[950px]:block mt-5">
            <h2 className="text-[34px] font-bold text-gray-700">
              Contact Us
            </h2>
            <p className="font-[200] text-[28px] mt-5 text-[var(--primary-color)]">Bengaluru</p>
            <p className="text-gray-500 mt-2">
              Address: Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
              Bengaluru 560025
            </p>
            <p className="mt-2">Email : be@whr.ai</p>
            <p className="mt-2 font-semibold">+91-9353648076</p>
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-10">
              <Link href="https://www.linkedin.com/company/whrai/" target="_blank">
                <Image src={linkedInIcon} alt="LinkedIn" />
              </Link>
              <Link href="https://x.com/whr_ai" target="_blank">
                <Image src={TwitterIcon} alt="Twitter" />
              </Link>
              <Link href="https://www.instagram.com/whr_ai/" target="_blank">
                <Image src={InstaIcon} alt="Instagram" />
              </Link>
              <Link href="https://www.youtube.com/@whrai" target="_blank">
                <Image src={youtubeIcon} alt="YouTube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Page;