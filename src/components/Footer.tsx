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
import { dropdownValues } from "../../data/dropdownData";

const Footer = () => {
  const gtmUseCases = dropdownValues.gtm["Use Cases"];
  const gtmSolutions = dropdownValues.gtm.Solutions;
  const gtmProduct = dropdownValues.gtm.Product;
  const geoUseCases = dropdownValues.geo["Use Cases"];
  const geoSolutions = dropdownValues.geo.Solutions;
  const geoProduct = dropdownValues.geo.Product;
  return (
    <div className="bg-black text-white p-12 h-auto w-full flex flex-col">
      <div className="flex justify-between w-full mt-10 mb-10 max-[840px]:flex-col max-[840px]:gap-10 max-[840px]:items-center">
        <div className="flex flex-col gap-10 max-[840px]:items-center">
          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
          <div className="text-[#BCBCBC] text-sm text-left w-[300px] max-[840px]:w-full max-[840px]:text-center">
            <p>
              Address: Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
              Bengaluru 560025
            </p>
            <p className="mt-2">E-mail: be@whr.ai</p>
            <p className="mt-2">Contact: +91-9353648076</p>
          </div>
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
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
        <div className="flex max-[840px]:justify-center max-[840px]:gap-20">
          {/* Company Section */}
          <div className="w-[240px] max-[840px]:w-fit ">
            <h3 className="text-lg mb-2">Resources</h3>
            <ul className="space-y-1 text-[var(--secondary-text-color)] text-sm">
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
              <li>
                <Link href="https://whr.canny.io/feature-request" target="_blank">Feature Request</Link>
              </li>
              <li>
                <Link href="https://whr.canny.io" target="_blank">Roadmap</Link>
              </li>
              <li>
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="w-[240px] max-[840px]:w-fit">
            <h3 className="text-lg mb-2">Legal</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              <li>
                <Link
                  // href="https://docs.google.com/document/d/1pq26xZBAgzSbn_dVSazrEv4TiubKMuOU78ctDdaPXT8/edit?usp=sharing"
                  href="/terms-of-service"
                  target="_blank"
                >
                  Terms of Service
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
      </div>
      <div className="border-t border-gray-600 w-full"></div>
      <div className="flex justify-between w-full items-center mt-10 mb-10 max-[950px]:flex-col max-[950px]:gap-10">
        <div className="flex items-center gap-2">
          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
          <div className="text-[#A35200] bg-[#fff4d6] rounded text-xs px-3 py-1">GTM</div>
        </div>
        <div className="flex max-[950px]:w-[650px] max-[950px]:justify-center max-[950px]:gap-10 max-[650px]:grid max-[650px]:grid-cols-2 max-[650px]:w-[98%]">
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Usecases</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {gtmUseCases.map((usecase: any, key: number) => (
                <li key={key}>
                  <Link href={usecase.href}>{usecase.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Solutions</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {gtmSolutions.map((solution: any, key: number) => (
                <li key={key}>
                  <Link href={solution.href}>{solution.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Products</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {gtmProduct.map((product: any, key: number) => (
                <li key={key}>
                  <Link href={product.href}>{product.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-600 w-full"></div>
      <div className="flex justify-between w-full items-center mt-10 mb-10 max-[950px]:flex-col max-[950px]:gap-10">
        <div className="flex items-center gap-2">
          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
          <div className="text-[#A35200] bg-[#fff4d6] rounded text-xs px-3 py-1">GEO</div>
        </div>
        <div className="flex max-[950px]:w-[650px] max-[950px]:justify-center max-[950px]:gap-10 max-[650px]:grid max-[650px]:grid-cols-2 max-[650px]:w-[98%]">
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Usecases</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {geoUseCases.map((usecase: any, key: number) => (
                <li key={key}>
                  <Link href={usecase.href}>{usecase.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Solutions</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {geoSolutions.map((solution: any, key: number) => (
                <li key={key}>
                  <Link href={solution.href}>{solution.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[240px] max-[950px]:w-fit">
            <h3 className="text-lg mb-2">Products</h3>
            <ul className="space-y-1 text-[#7B7B7B] text-sm">
              {geoProduct.map((product: any, key: number) => (
                <li key={key}>
                  <Link href={product.href}>{product.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 w-full"></div>
      {/* Copyright Section */}
      <div className="mt-5 text-center sm:text-left">
        <p className="text-[#BCBCBC] text-sm">
          {/* © 2025 Crintel Labs Private Limited. All rights reserved. */}
          {new Date().getFullYear()} Crintel Labs Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
