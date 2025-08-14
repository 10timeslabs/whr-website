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
        <h1 className="text-lg font-bold flex justify-center">
          WHR.AI TERMS OF SERVICE
        </h1>
        <p className="text-sm  mt-2">
          <strong> Effective Date</strong>: January 29, 2025
        </p>
        <p className="mt-4">Welcome to WHR.AI!</p>
        <p>
          These Terms of Service (“Terms”) constitute a legally binding
          agreement between you (“User”, “You”, or “Your”) and Crintel Labs
          Private Limited (“Crintel Labs”, “We”, “Us”, or “Our”). By accessing
          or using the WHR.AI platform (the “Platform”), you agree to be bound
          by these Terms and our Privacy Policy and GDPR Policy. If you do not
          agree to these Terms, please do not use the Platform.
        </p>
        <h2 className="text-lg font-semibold mt-4">1. About Us</h2>

        <ul className="list-disc ml-12">
          <li>
            <strong>Company Name</strong>: Crintel Labs Private Limited
          </li>
          <li>
            <strong>Company Address</strong>: Gopala Krishna Complex, No. 45/3
            Residency Road, MG Road, Bengaluru - 560025, India
          </li>
          <li>
            <strong>Contact Email</strong>: admin@whr.ai
          </li>
          <li>
            <strong>Country of Incorporation</strong>: India
          </li>
          <li>
            <strong>Year of Incorporation</strong>: 2024
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-4">2. Definitions</h2>
        <p>
          <strong>“Platform”</strong> refers to the WHR.AI website (whr.ai),
          mobile applications, APIs, data intelligence tools, reports, and any
          other services provided by Crintel Labs.
        </p>
        <p>
          <strong>“Services”</strong> means all services provided through the
          Platform, including data insights, analytics, and on-ground action
          tools.
        </p>
        <p>
          <strong>“User”</strong> refers to any individual or entity that
          accesses or uses the Platform.
        </p>
        <p>
          <strong>“Subscription Plan”</strong> refers to the various paid and
          free plans available for accessing the Platform’s features.
        </p>
        <p>
          <strong>“API”</strong> means any application programming interface
          provided by WHR.AI for accessing its data.
        </p>
        <p>
          <strong>“Content”</strong> refers to any data, information, text,
          graphics, or other materials uploaded, submitted, or transmitted by
          Users through the Platform.
        </p>
        <h2 className="text-lg font-semibold mt-4">3. Acceptance of Terms</h2>
        <p>
          By accessing or using the Platform, you agree to comply with and be
          bound by these Terms. If you are accessing the Platform on behalf of
          an organization, you represent that you have the authority to bind
          that organization to these Terms.
        </p>
        <h2 className="text-lg font-semibold mt-4">4. Account Registration</h2>
        <p>
          To use certain features of the Platform, you must register for an
          account:
        </p>
        <ul className="list-disc ml-12">
          <li>
            <strong>Account Responsibility</strong>: You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </li>
          <li>
            <strong>Security</strong>: Use a strong password and notify us
            immediately of any unauthorized use of your account.
          </li>
          <li>
            <strong>Termination of Account</strong>:We reserve the right to
            suspend or terminate your account if we believe you have breached
            these Terms.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          5. Subscription and Payment
        </h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Subscription Plans</strong>: WHR.AI offers both free and
            paid subscription plans with monthly and annual billing cycles.
            Details of each plan are available on our Pricing Page.
          </li>
          <li>
            <strong>Fees</strong>: Paid plans are subject to the fees outlined
            during the sign-up process. All fees are non-refundable except as
            expressly provided herein.
          </li>
          <li>
            <strong>Billing</strong>: Fees are billed in advance based on the
            subscription period selected. Payment is required at the time of
            subscription.
          </li>
          <li>
            <strong>Refunds and Cancellations</strong>:
            <ul className="list-disc ml-12">
              <li>
                Refunds are provided only in cases of billing errors, system
                issues, or as mandated by law.
              </li>
              <li>
                Users may cancel their subscription at any time via the account
                settings. No refunds will be provided for cancellations made
                outside the above exceptions.
              </li>
              <li>
                In case of unresolved service issues, Users can raise a support
                ticket. If the issue cannot be resolved per our service
                agreement, a refund may be processed as outlined in the service
                agreement.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          6. User Verification Requirement
        </h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Account Verification</strong>: User will be required to verify their account via email and/or phone number to access the Platform at regular intervals to ensure legitimacy.
          </li>
          <li>
            <strong>Identity Verification</strong>: Crintel Labs reserves the right, at its sole discretion, to request government-issued identification for identity verification at any time.
          </li>
          <li>
            <strong>Suspicious Activity</strong>: If a User is suspected of parsing, scraping, or misusing the Platform, access will be temporarily or permanently blocked. Crintel Labs may request proof of legitimacy, and access will only be restored upon satisfactory verification. In such cases, no refunds will be issued for any subscription fees already paid.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          7. API Usage and Data Licensing
        </h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>API Access</strong>: WHR.AI provides API access to its data
            with different tiers based on subscription plans. Details of API
            usage limits and features are specified in your Subscription Plan.
          </li>
          <li>
            <strong>Third-Party Data</strong>: Some data may be sourced from
            third parties. We disclaim any responsibility for the accuracy or
            reliability of such third-party data.
          </li>
          <li>
            <strong>Data Caching</strong>By default, data should be accessed in
            real-time. Caching or storing WHR.AI data locally requires prior
            approval and must be included in the service agreement.
          </li>

          <li>
            <strong>Usage Limits</strong> We reserve the right to monitor API
            usage and enforce limits to prevent system overload. Excessive usage
            that impacts system performance may result in suspension of API
            access unless otherwise specified in your service agreement.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          8. User Responsibilities and Restrictions
        </h2>

        <ul className="list-disc ml-12">
          <li>
            <strong>Permitted Use</strong>: Users are granted a non-exclusive,
            non-transferable license to access and use the Platform for their
            internal business purposes in accordance with these Terms.
          </li>
          <li>
            <strong>Prohibited Actions</strong>:
            <ul className="list-disc ml-12">
              <li>
                <strong>Data Scraping</strong>: Automated data scraping is
                prohibited unless accessed via licensed API.
              </li>
              <li>
                <strong>Fair Usage</strong>:Users must adhere to fair usage
                policies. We reserve the right to monitor usage and restrict
                access if usage is excessive and impacts system performance.
              </li>
              <li>
                <strong>Data Redistribution</strong>: Redistribution of WHR.AI
                data to third parties is strictly prohibited.
              </li>

              <li>
                <strong>Unauthorized Access</strong>: Users must not attempt to
                gain unauthorized access to the Platform or its data.
              </li>
              <li>
                <strong>Modification and Reverse Engineering</strong>: Users
                must not copy, modify, reverse engineer, or create derivative
                works from the Platform or its data.
              </li>
            </ul>
          </li>
          <li>
            <strong>Content Submission</strong> Users may upload their own data
            to the Platform. By submitting Content, Users grant Crintel Labs the
            right to de-anonymize and use the data to improve our services.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-4">9. Intellectual Property</h2>

        <ul className="list-disc ml-12">
          <li>
            <strong>Ownership</strong>: All rights, title, and interest in the
            Platform, including all intellectual property rights, are owned by
            Crintel Labs or its licensors.
          </li>
          <li>
            <strong>User Content</strong>: Users retain ownership of their own
            Content but grant Crintel Labs a non-exclusive, worldwide,
            royalty-free license to use, modify, and improve such Content for
            the purpose of providing and enhancing the Services.
          </li>
          <li>
            <strong>Trademarks</strong>:Users may reference WHR.AI’s name and
            logo in their analyses or publications only with prior written
            consent. Crintel Labs may use client logos in marketing materials
            with permission.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-4">
          10. Liability and Disclaimers
        </h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Platform “As Is”</strong>: The Platform is provided “as is”
            without warranties of any kind. Crintel Labs disclaims all
            warranties, express or implied, including but not limited to
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </li>
          <li>
            <strong>Decision Making</strong>: Crintel Labs disclaims
            responsibility for decisions made based on insights or data provided
            by the Platform.
          </li>
          <li>
            <strong>Force Majeure</strong>: Crintel Labs is not liable for any
            delays or failures in performance resulting from causes beyond our
            reasonable control, including natural disasters, wars, or other
            force majeure events.
          </li>
          <li>
            <strong>Limitation of Liability</strong>:In no event shall Crintel
            Labs be liable for any indirect, incidental, special, consequential,
            or punitive damages, even if advised of the possibility of such
            damages. Our total liability shall not exceed the fees paid by you
            in the twelve (12) months preceding the claim.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-4">11. Termination</h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Termination by User</strong>: Users may terminate their
            account at any time via the account settings. No refunds will be
            provided unless applicable under the Refunds and Cancellations
            section.
          </li>
          <li>
            <strong>Termination by Crintel Labs</strong>: We may terminate or
            suspend your access to the Platform immediately, without prior
            notice or liability, for any reason, including breach of these
            Terms.
          </li>
          <li>
            <strong>Effect of Termination</strong>: Upon termination, all
            licenses granted to you will terminate, and you must cease all use
            of the Platform. You must ensure all outstanding payments are
            settled. Crintel Labs may delete your Content upon termination
            without liability.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          12. Governing Law and Jurisdiction
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of India. Any disputes arising out of or in connection with these
          Terms shall be subject to the exclusive jurisdiction of the courts
          located in Bengaluru, India.
        </p>
        <h2 className="text-lg font-semibold mt-4">
          13. Privacy and Security Incidents
        </h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Notification</strong>: Users must notify Crintel Labs
            immediately of any suspected unauthorized access to their account or
            any data privacy incidents.
          </li>
          <li>
            <strong>Security Measures</strong>: Crintel Labs employs
            industry-standard security measures to protect user data. However,
            we cannot guarantee absolute security.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">
          14. Modifications to Terms
        </h2>
        <p>
          Crintel Labs reserves the right to modify these Terms at any time. We
          will notify users of significant changes by posting a notice on the
          Platform or via email. Continued use of the Platform after such
          changes constitutes acceptance of the new Terms.
        </p>
        <h2 className="text-lg font-semibold mt-4">15. Miscellaneous</h2>
        <ul className="list-disc ml-12">
          <li>
            <strong>Severability</strong>: If any provision of these Terms is
            found to be unenforceable or invalid, that provision will be limited
            or eliminated to the minimum extent necessary, and the remaining
            provisions will remain in full force and effect.
          </li>
          <li>
            <strong>Waiver</strong>: No waiver of any term will be deemed a
            further or continuing waiver of such term or any other term.
          </li>
          <li>
            <strong>Entire Agreement</strong>: These Terms, along with our
            Privacy Policy and GDPR Policy, constitute the entire agreement
            between you and Crintel Labs regarding the use of the Platform.
          </li>
          <li>
            <strong>Assignment</strong>: You may not assign or transfer your
            rights or obligations under these Terms without our prior written
            consent. Crintel Labs may assign these Terms without restriction.
          </li>

          <li>
            <strong>Notices</strong>: All notices under these Terms must be in
            writing and sent to the addresses provided in your account settings
            or as otherwise specified by Crintel Labs.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-4">16. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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
