'use client'
import React, { useState } from 'react'
import { PhoneInput, ParsedCountry } from "react-international-phone";
import "react-international-phone/style.css";
import styles from './page.style.module.css'

const Page = () => {

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [busEmail, setBusEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [phoneCode, setPhoneCode] = useState("");
	const [subscribe, setSubscribe] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Create FormData object
		const formData = new FormData();
		formData.append("firstName", firstName);
		formData.append("lastName", lastName);
		formData.append("busEmail", busEmail);
		formData.append("companyName", companyName);
		formData.append("jobTitle", jobTitle);
		formData.append("phoneNumber", phoneNumber.substring(phoneCode.length + 1));
		formData.append("phoneCode", `+${phoneCode}`);
		if (subscribe) {
			formData.append("newsLetter", "on")
		}

		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

		try {
			const response = await fetch("https://board.10times.com/enquiry/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				alert("Thank you for expressing your interest. Our team will contact you soon.");
				// Reset form fields
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
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Something went wrong, please try again!");
		}
	};

	// Handle phone input change
	const handlePhoneChange = (phone: string, meta: { country: ParsedCountry; inputValue: string }) => {
		setPhoneCode(meta.country.dialCode);
		// const phoneNumberWithoutDialCode = phone.substring(meta.country.dialCode.length); 
		setPhoneNumber(phone);
	}
	return (
		<div className='pt-[120px] flex justify-center'>
			<form className='bg-white rounded-xl p-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex flex-col gap-5 w-[700px]' onSubmit={(e) => handleSubmit(e)}>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label>First Name</label>
						<input
							className="border border-gray-300 rounded-md p-2"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Last Name</label>
						<input
							className="border border-gray-300 rounded-md p-2"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Business Email</label>
						<input
							className="border border-gray-300 rounded-md p-2"
							type="email"
							value={busEmail}
							onChange={(e) => setBusEmail(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Company</label>
						<input
							className="border border-gray-300 rounded-md p-2"
							type="text"
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Job Title</label>
						<input
							className="border border-gray-300 rounded-md p-2"
							type="text"
							value={jobTitle}
							onChange={(e) => setJobTitle(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Phone Number</label>
						<PhoneInput
							className={`w-full ${styles.PhoneInput} border border-gray-300 rounded-md p-0.5`}
							defaultCountry="in"
							value={phoneNumber}
							onChange={handlePhoneChange}
						/>
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
				</div>
				<button className='bg-[#6750A4] w-full text-center py-[8px] rounded-[10px] text-white cursor-pointer'>Submit</button>
			</form>
		</div>
	)
}

export default Page