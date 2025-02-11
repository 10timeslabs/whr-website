"use client"
import Link from "next/link";
import React from "react";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import InstaIcon from "/public/social_link_icons/Vector (1).svg";
import Pin from "/public/social_link_icons/Vector (2).svg";
import linkedInIcon from "/public/social_link_icons/Vector (3).svg";
import TicktokIcon from "/public/social_link_icons/Vector (4).svg";
import youtubeIcon from "/public/social_link_icons/Vector (5).svg";
import TwitterIcon from "/public/social_link_icons/Vector.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-6 sm:px-16 gap-4 lg:px-32 flex flex-col sm:flex-row justify-between h-auto w-full">
      <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0 w-full sm:w-auto">
        <div className="mb-4 flex justify-center sm:justify-start w-full">
          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
        </div>

        <div className="text-[#BCBCBC] text-sm text-center sm:text-left w-full sm:max-w-[350px]">
          <p>
            Address: Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
            Bengaluru 560025
          </p>
          <p className="mt-2">E-mail: be@whr.ai</p>
          <p className="mt-2">Contact: +91-9353648076</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-8">
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

      {/* Right Section - Links & Copyright */}
      <div className="text-center sm:text-left">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Product Section */}
          <div>
            <h3 className="text-lg mb-2">Product</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              <li>
                <Link href="#">Feature Request</Link>
              </li>
              <li>
                <Link href="#">Roadmap</Link>
              </li>
              <li>
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg mb-2">Company</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              <li>
                <Link href="/about" target="_blank">About Us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="#">Docs</Link>
              </li>
            </ul>
          </div>

          {/* Resource Section */}
          {/* <div>
            <h3 className="text-lg mb-2">Resource</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              <li>
                <Link href="#">Examples</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">Guides</Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg mb-2">Legal</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              <li>
                <Link
                  // href="https://docs.google.com/document/d/1pq26xZBAgzSbn_dVSazrEv4TiubKMuOU78ctDdaPXT8/edit?usp=sharing"
                  href="/terms-of-service"
                  target="_blank"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  // href="https://docs.google.com/document/d/15lxeZeZnYK3dKHwGZqC5nMJhCJWwvCgCrbv2sxKdk2A/edit?usp=sharing"
                  href="/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  // href="https://docs.google.com/document/d/1Cl5DY5IevK79BXRjElgfV7L8GF_F479MondVcARQbV4/edit?usp=sharing"
                  href="/cookie-policy"
                  target="_blank"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center sm:text-left">
          <p className="text-[#BCBCBC] text-sm">
            {/* © 2025 Crintel Labs Private Limited. All rights reserved. */}
            {new Date().getFullYear()} Crintel Labs Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
