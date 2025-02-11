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
          WHR.AI COOKIE POLICY
        </h1>
        <p className="text-sm text-black">
          <strong>Effective Date</strong>: January 29, 2025
        </p>
        <p className="mt-4">
          Crintel Labs Private Limited (“Crintel Labs”, “We”, “Us”, or “Our”)
          operates the{" "}
          <a
            href="https://www.whr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.whr.ai
          </a>{" "}
          website (the “Platform”). This Cookie Policy explains how we use
          cookies and similar technologies to recognize you when you visit our
          Platform. It explains what these technologies are and why we use them,
          as well as your rights to control our use of them.
        </p>

        <h2 className="text-lg font-semibold mt-6">1. What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p className="mt-4">
          Cookies set by the website owner (in this case, Crintel Labs) are
          called "first-party cookies". Cookies set by parties other than the
          website owner are called "third-party cookies". Third-party cookies
          enable third-party features or functionality to be provided on or
          through the website (e.g., advertising, interactive content, and
          analytics). The parties that set these third-party cookies can
          recognize your computer both when it visits the website in question
          and also when it visits certain other websites.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          2. Why Do We Use Cookies?
        </h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Platform
          to operate, and we refer to these as "essential" or "strictly
          necessary" cookies. Other cookies also enable us to track and target
          the interests of our users to enhance the experience on our Platform.
          Third parties serve cookies through our Platform for advertising,
          analytics, and other purposes. This is described in more detail below.
        </p>

        <h2 className="text-lg font-semibold mt-6">
          3. What Types of Cookies Do We Use?
        </h2>
        <p>a.{"  "}Essential Cookies</p>
        <p>
          These cookies are strictly necessary to provide you with services
          available through our Platform and to use some of its features, such
          as access to secure areas.
        </p>

        <p>b.{"  "} Performance and Analytics Cookies</p>
        <p>
          These cookies collect information about how you use our Platform, such
          as which pages you visit most often and if you receive error messages
          from certain pages. These cookies do not
        </p>
        <p>
          collect information that identifies you. All information these cookies
          collect is aggregated and therefore anonymous. We use this information
          to improve how our Platform works.
        </p>

        <p>examples:</p>
        <ul className="list-disc ml-12 text-base">
          <li>
            Google Analytics: Used to analyze user behavior on the Platform. For
            more details, please visit Google Analytics Privacy Policy.
            <ul className="list-[circle] ml-12">
              <li>
                To opt-out:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Analytics Opt-Out
                </a>{" "}
              </li>
            </ul>
          </li>
        </ul>

        <p>c.{"  "} Functionality Cookies</p>
        <p>
          These cookies allow our Platform to remember choices you make (such as
          your username, language, or the region you are in) and provide
          enhanced, more personalized features. The information these cookies
          collect may be anonymized and they cannot track your browsing activity
          on other websites.
        </p>
        <p>d.{"  "} Advertising Cookies</p>
        <p>
          These cookies are used to make advertising messages more relevant to
          you. They perform functions like preventing the same ad from
          continuously reappearing, ensuring that ads are properly displayed for
          advertisers, and in some cases selecting advertisements that are based
          on your interests.
        </p>

        <p>examples:</p>

        <ul className="list-disc ml-12 text-base">
          <li>
            Google Ads: Used to serve personalized advertisements. For more
            details, please visit Google Ads Privacy Policy.
            <ul className="list-[circle] ml-12">
              <li>To opt-out: Google Ads Settings</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">4. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the Platform, deliver
          advertisements on and through the Platform, and so on. We do not have
          access to or control over third-party cookies.
        </p>
        <h2 className="text-lg font-semibold mt-6">
          5. How Can I Control Cookies?
        </h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          cookie consent manager. The specific steps to do this depend on the
          browser you use. However, you can typically find instructions on how
          to manage cookies in your browser settings under the “Privacy” or
          “Security” section.
        </p>
        <p>a.{"  "} Browser Controls</p>
        <p>
          You can set or amend your web browser controls to accept or refuse
          cookies. If you choose to reject cookies, you may still use our
          Platform, though your access to some functionality and areas of our
          Platform may be restricted. As the means by which you can refuse
          cookies through your web browser controls vary from
          browser-to-browser, you should visit your browser's help menu for more
          information.
        </p>
        <p>b.{"  "} Opt-Out Tools</p>
        <p>
          For more detailed control over cookies, you can use the following
          tools:
        </p>

        <ul className="list-[circle] ml-12">
          <li>
            Google Analytics Opt-Out: To opt-out:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Analytics Opt-Out
            </a>{" "}
          </li>

          <li>Google Ads Opt-Out: Google Ads Settings</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">
          6. Changes to This Cookie Policy
        </h2>
        <p>
          We may update our Cookie Policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons. The date at the top of this policy indicates when it was last
          updated. We encourage you to review this Cookie Policy periodically to
          stay informed about our use of cookies and related technologies.
        </p>

        <h2 className="text-lg font-semibold mt-6">7. More Information</h2>
        <p>
          If you have any questions about our use of cookies or other
          technologies, please email us at admin@whr.ai.
        </p>

        <h2 className="text-lg font-semibold mt-6">8. Contact Us</h2>
        <p>
          For any queries related to this Cookie Policy, please contact us at:
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
