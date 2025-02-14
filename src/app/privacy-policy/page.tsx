import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import React from "react";
import HomeNavbar from "@/components/HomeNavbar";
import GridImage from "/public/herosection_grid.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="pt-[120px] flex flex-col items-center">
      <HomeNavbar />
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]" />
      <div className="max-w-4xl p-6">
        <h1 className="text-lg font-bold mb-4 flex justify-center">
          WHR.AI Privacy Policy
        </h1>
        <p className="text-sm text-black">
          <strong>Effective Date</strong>: January 29, 2025
        </p>
        <p className="mt-4">
          Crintel Labs Private Limited (“Crintel Labs”, “We”, “Us”, or “Our”) is
          committed to protecting your privacy. This Privacy Policy outlines how
          we collect, use, disclose, and safeguard your information when you
          visit our website{" "}
          <a
            href="https://www.whr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.whr.ai
          </a>{" "}
          (the “Platform”) and use our services. Please read this policy
          carefully to understand our views and practices regarding your
          personal data and how we will treat it.
        </p>

        <h2 className="text-lg font-semibold mt-6">1. Introduction</h2>
        <p>
          By accessing or using the Platform, you agree to the collection and
          use of information in accordance with this Privacy Policy. If you do
          not agree with our policies and practices, do not use the Platform.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          2. Information We Collect
        </h2>
        <p>
          We collect several types of information from and about users of our
          Platform, including:
        </p>
        <h3 className="text-lg font-semibold mt-4">
          a. Information Provided by You
        </h3>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Account Information</strong>: When you create an account, we
            collect personal details such as your name, professional email
            address, phone number, and company name.
          </li>
          <li>
            <strong>Billing and Payment Information</strong>: For paid
            subscriptions, we collect billing details necessary to process
            payments.
          </li>
          <li>
            <strong>Communication Information</strong>: If you contact us for
            support or other inquiries, we collect information such as your
            email address, phone number, and any content you provide in your
            communications.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">
          b. Information Collected Automatically
        </h3>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Browsing Information</strong>: We automatically collect
            information about your interactions with the Platform, including
            your IP address, browser type, operating system, referring and exit
            pages, pages visited, date and time of access, and clickstream data.
          </li>
          <li>
            <strong>Device Information</strong>: Information about the device
            you use to access the Platform, such as device type, unique device
            identifiers, and mobile network information.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">c. Cookies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our Platform:
        </p>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Types of Cookies</strong>:
          </li>
          <ul className="list-[circle] ml-8">
            <li>
              <strong>Session Cookies</strong>: Temporary cookies that expire
              once you close your browser.
            </li>
            <li>
              <strong>Persistent Cookies</strong>: Cookies that remain on your
              device until you delete them.
            </li>
          </ul>
          <li>
            <strong>Purpose of Cookies</strong>: To remember your preferences,
            improve your user experience, analyze usage patterns, and
            personalize content.
          </li>
          <li>
            <strong>Third-Party Cookies</strong>: We may allow third-party
            service providers to set cookies on your device. These cookies are
            governed by the respective third-party privacy policies.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">d. Third-Party Links</h3>
        <p>
          Our Platform may contain links to third-party websites that are not
          controlled by Crintel Labs. We are not responsible for the privacy
          practices or the content of these third-party sites. We encourage you
          to review the privacy policies of any third-party websites you visit.
        </p>
        <h2 className="text-lg font-semibold mt-6">
          3. How We Use Your Information
        </h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Provision of Services</strong>: To provide, maintain, and
            improve our Platform and services.
          </li>
          <li>
            <strong>Account Management</strong>: To manage your account, process
            your subscriptions, and handle billing and payments.
          </li>
          <li>
            <strong>Communication</strong>:To respond to your inquiries, provide
            customer support, and send you updates about our services.
          </li>
          <li>
            <strong>Personalization</strong>: To personalize your experience on
            the Platform based on your preferences and usage patterns.
          </li>
          <li>
            <strong>Analytics</strong>: To analyze usage trends and gather
            demographic information to improve our services.
          </li>
          <li>
            <strong>Security</strong>: To monitor and protect the security of
            our Platform and prevent fraudulent activities.
          </li>
          <li>
            <strong>Compliance</strong>: To comply with legal obligations and
            enforce our Terms of Service.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">
          4. Legal Basis for Processing Your Information
        </h2>
        <p>
          We process your personal data based on the following legal grounds:
        </p>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Performance of a Contract</strong>:Processing is necessary
            for the performance of our contractual obligations to you.
          </li>
          <li>
            <strong>Legitimate Interests</strong>:To improve our services,
            ensure security, and communicate with you.
          </li>
          <li>
            <strong>Consent</strong>:Where required, we obtain your consent to
            process your data for specific purposes.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">
          5. Sharing Your Information
        </h2>
        <p>We may share your information in the following circumstances:</p>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Service Providers</strong>: We engage third-party companies
            to perform services on our behalf, such as payment processing, data
            storage, and analytics. These providers have access to your
            information only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </li>
          <li>
            <strong>Business Transfers</strong>:In the event of a merger,
            acquisition, or sale of all or a portion of our assets, your
            information may be transferred to the new owner.
          </li>
          <li>
            <strong>Legal Requirements</strong>: We may disclose your
            information if required to do so by law or in response to valid
            requests by public authorities.
          </li>
          <li>
            <strong>Protection of Rights</strong>: We may disclose your
            information to protect our rights, property, or safety, or the
            rights, property, or safety of others.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. These measures include encryption, access
          controls, and secure data storage practices. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-lg font-semibold mt-6">7. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law. When your data is no
          longer needed, we will securely delete or anonymize it.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          8. Your Rights Under GDPR
        </h2>
        <p>
          If you are located in the European Economic Area (EEA), you have
          certain data protection rights, including:
        </p>
        <ul className="list-disc ml-12 text-base">
          <li>
            <strong>Access</strong>:You can request access to the personal data
            we hold about you.
          </li>
          <li>
            <strong>Rectification</strong>:You can request correction of any
            inaccurate or incomplete personal data.
          </li>
          <li>
            <strong>Erasure</strong>: You can request deletion of your personal
            data under certain circumstances.
          </li>
          <li>
            <strong>Restriction of Processing</strong>:You can request the
            restriction of processing your personal data under certain
            conditions.
          </li>
          <li>
            <strong>Data Portability</strong>:You can request a copy of your
            personal data in a structured, machine-readable format.
          </li>
          <li>
            <strong>Objection</strong>: You can object to the processing of your
            personal data for certain purposes.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us using the contact details
          provided below. We will respond to your request within one month.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          9. Changes to Our Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. When we make changes, we will update the "Effective Date" at
          the top of this policy and notify you via the Platform or through
          other communication channels. Your continued use of the Platform after
          the changes become effective constitutes your acceptance of the
          revised Privacy Policy.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          10. Disclosure of Information Under Law
        </h2>
        <p>
          We may disclose your personal data if required to do so by law or in
          response to valid requests by public authorities, such as a court or
          government agency.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          11. Conditions of Use, Notices, and Revisions
        </h2>
        <p>
          Your use of the Platform is subject to the terms of this Privacy
          Policy, including any limitations on damages, resolution of disputes,
          and the application of laws as described herein. If you have any
          concerns about your privacy while using the Platform, please contact
          us using the details provided below.
        </p>

        <h2 className="text-lg font-semibold mt-6">12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, or if you would like to request access to or correction of
          your personal information, please contact us at:
        </p>
        <p className="mt-2 font-semibold">Crintel Labs Private Limited</p>
        <p>Gopala Krishna Complex, No. 45/3 Residency Road, MG Road</p>
        <p>Bengaluru - 560025, India</p>
        <p>Email: admin@whr.ai</p>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Page;
