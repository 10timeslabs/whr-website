"use client";
import { useActionState, useState } from "react";
import { PhoneInput, type ParsedCountry } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "./page.style.module.css";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";
import { submitContactForm } from "@/actions/demoContact-actions";
import Image from "next/image";
import GridImage from "/public/usecase_grid.png";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [busEmail, setBusEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    busEmail: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
  });

  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const newErrors: any = {};
      const firstNameValue = formData.get("firstName") as string;
      const lastNameValue = formData.get("lastName") as string;
      const busEmailValue = formData.get("busEmail") as string;
      const companyNameValue = formData.get("companyName") as string;
      const jobTitleValue = formData.get("jobTitle") as string;
      const phoneNumberValue = formData.get("phoneNumber") as string;
      const phoneCodeValue = formData.get("phoneCode") as string;

      if (!firstNameValue?.trim())
        newErrors.firstName = "First name is required.";
      if (!lastNameValue?.trim()) newErrors.lastName = "Last name is required.";
      if (!busEmailValue?.trim())
        newErrors.busEmail = "Business email is required.";
      if (!companyNameValue?.trim())
        newErrors.companyName = "Company name is required.";
      if (!jobTitleValue?.trim()) newErrors.jobTitle = "Job title is required.";

      if (phoneNumber.length <= 5 || phoneNumber.length >= 16) newErrors.phoneNumber = "Phone number is required.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return { success: false, message: "Please fix the validation errors." };
      }

      setErrors({
        firstName: "",
        lastName: "",
        busEmail: "",
        companyName: "",
        jobTitle: "",
        phoneNumber: "",
      });

      formData.append("source", window.location.href)
      const result = await submitContactForm(formData, "geo");

      if (result.success) {
        alert(
          "Thank you for expressing your interest. Our team will contact you soon."
        );

        // Reset form fields on success
        setFirstName("");
        setLastName("");
        setBusEmail("");
        setCompanyName("");
        setJobTitle("");
        setPhoneNumber("");
        setSubscribe(false);
      } else {
        alert("Something went wrong, please try again!");
      }

      return result;
    },
    null
  );

  const handlePhoneChange = (
    phone: string,
    meta: { country: ParsedCountry; inputValue: string }
  ) => {
    setPhoneCode(meta.country.dialCode);
    setPhoneNumber(phone);
  };

  return (
	<div className='pt-[120px]'>
	<GeneralNavbar />
	<Image src={GridImage} alt="grid" className="absolute top-[120px] -z-[50]" />
	<div className='flex justify-center'>
		<form className='bg-white rounded-xl p-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex flex-col gap-5 w-[700px]' action={formAction}>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-2">
					<label>First Name</label>
					<input
						className="border border-gray-300 rounded-md p-2"
						type="text"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					{errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
				</div>
				<div className="flex flex-col gap-2">
					<label>Last Name</label>
					<input
						className="border border-gray-300 rounded-md p-2"
						type="text"
            name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					{errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
				</div>
				<div className="flex flex-col gap-2">
					<label>Business Email</label>
					<input
						className="border border-gray-300 rounded-md p-2"
						type="email"
            name="busEmail"
						value={busEmail}
						onChange={(e) => setBusEmail(e.target.value)}
					/>
					{errors.busEmail && <span className="text-red-500 text-sm">{errors.busEmail}</span>}
				</div>
				<div className="flex flex-col gap-2">
					<label>Company</label>
					<input
						className="border border-gray-300 rounded-md p-2"
						type="text"
            name="companyName"
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
					/>
					{errors.companyName && <span className="text-red-500 text-sm">{errors.companyName}</span>}
				</div>
				<div className="flex flex-col gap-2">
					<label>Job Title</label>
					<input
						className="border border-gray-300 rounded-md p-2"
						type="text"
            name="jobTitle"
						value={jobTitle}
						onChange={(e) => setJobTitle(e.target.value)}
					/>
					{errors.jobTitle && <span className="text-red-500 text-sm">{errors.jobTitle}</span>}
				</div>
				<div className="flex flex-col gap-2">
					<label>Phone Number</label>
					<PhoneInput
						className={`w-full ${styles.PhoneInput} border border-gray-300 rounded-md p-0.5`}
						defaultCountry="in"
            name="phoneNumber"
						value={phoneNumber}
						onChange={handlePhoneChange}
					/>
					{errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					id="check"
					checked={subscribe}
					onChange={(e) => setSubscribe(e.target.checked)}
				/>
				<label htmlFor="check" className="cursor-pointer">
					Please subscribe to the newsletter for influencer marketing best practices
				</label>
        <input type="hidden" name="subscribe" value={subscribe.toString()} />
			</div>
			<button
            type="submit"
            disabled={isPending}
            className="bg-[#6750A4] w-full text-center py-[8px] rounded-[10px] text-white cursor-pointer disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
		</form>
	</div>
	<GetInTouch />
	<Footer />
</div>
  );
};

export default Page;
