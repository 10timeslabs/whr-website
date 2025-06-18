"use server";

export async function submitContactForm(formData: FormData) {
  try {
    // Get platform parameter, default to 'gtm' if not specified
    const platform = (formData.get("platform") as string) || "gtm";

    // Determine API endpoint based on platform
    let apiEndpoint: string;
    if (platform === "geo") {
      apiEndpoint = "https://geo-api.whr.ai/others/contactMail/contactUs";
    } else {
      apiEndpoint = "https://gtm-api.whr.ai/others/contactMail/contactUs";
    }

    const body = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("busEmail"),
      message: formData.get("message"),
      source: formData.get("source")
    };

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! We'll get back to you soon.",
      };
    } else {
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
