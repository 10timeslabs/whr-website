"use server";

type Platform = "geo" | "gtm";

export async function submitContactForm(
  formData: FormData,
  platform: Platform
) {
  try {
    let apiEndpoint: string;
    if (platform === "geo") {
      apiEndpoint = "https://geo-api.whr.ai/others/contactMail/demoContact";
    } else {
      apiEndpoint = "https://gtm-api.whr.ai/others/contactMail/demoContact";
    }

    const body = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("busEmail"),
      companyName: formData.get("companyName"),
      jobTitle: formData.get("jobTitle"),
      phoneNumber: formData.get("phoneNumber"),
      subscribe: formData.get("subscribe")
    }

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message:
          "Thank you for expressing your interest. Our team will contact you soon.",
      };
    } else {
      return {
        success: false,
        message: data.message || "Something went wrong, please try again!",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong, please try again!",
    };
  }
}
