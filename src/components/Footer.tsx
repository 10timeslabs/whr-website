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
import { homepageTabsData } from "../../data/homepageTabsData";
const Footer = () => {
  const gtmUseCases = dropdownValues.gtm["Use Cases"];
  const gtmSolutions = dropdownValues.gtm.Solutions;
  const gtmProduct = dropdownValues.gtm.Product;
  const geoUseCases = dropdownValues.geo["Use Cases"];
  const geoSolutions = dropdownValues.geo.Solutions;
  const geoProduct = dropdownValues.geo.Product;
  const predictFromEvents = homepageTabsData.PredictFromEvents["Use Cases"];
  const ParticipateInEvents = homepageTabsData.participateInEvents["Use Cases"];
  const sellToEvents = homepageTabsData.SellToEvents["Use Cases"];
  return (
    <div className="bg-black text-white p-12 h-auto w-full flex flex-col">
      <div className="flex justify-between w-full max-[1040px]:grid max-[1040px]:gap-y-3 max-[1040px]:grid-cols-3 max-[660px]:grid-cols-2">
        {/* Company Section */}
        <div className="">
          <h3 className="text-lg mb-2">Resources</h3>
          <ul className="space-y-1 text-[#BCBCBC] text-sm">
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/about" target="_blank">About Us</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="#">Blog</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/contact-us">Contact</Link>
            </li>
            {/* <li className="hover:text-[var(--primary-color)]"> 
              <Link href="#">Docs</Link>
            </li> */}
            <li className="hover:text-[var(--primary-color)]">
              <Link href="https://whr.canny.io/feature-request" target="_blank">Feature Request</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="https://whr.canny.io" target="_blank">Roadmap</Link>
            </li>
            {/* <li className="hover:text-[var(--primary-color)]">
              <Link href="#">Changelog</Link>
            </li> */}
            <li className="hover:text-[var(--primary-color)]">
              <Link href="#">Docs & FAQ's</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {/* <div className="">
          <Link href="/gtm/usecases" className="text-lg hover:text-[var(--primary-color)] cursor-pointer ">Industry Usecases</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {gtmUseCases.map((usecase: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={usecase.href}>{usecase.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="">
          <Link href="" className="">Predict</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {predictFromEvents.map((usecase: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={usecase.href}>{usecase.label}</Link>
              </li>
            ))}
          </ul>
        </div> 
        <div className="">
          <Link href="" className="">Sell</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {sellToEvents.map((usecase: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={usecase.href}>{usecase.label}</Link>
              </li>
            ))}
          </ul>
        </div> 

        <div className="">
          <Link href="" className="">Participate</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {ParticipateInEvents.map((usecase: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={usecase.href}>{usecase.label}</Link>
              </li>
            ))}
          </ul>
        </div> 
        
        {/* <div className="">
          <Link href="/gtm/solutions" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">Industry Solutions</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {gtmSolutions.map((solution: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={solution.href}>{solution.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className="">
          <Link href="/geo/usecases" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">Location Usecases</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {geoUseCases.map((usecase: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={usecase.href}>{usecase.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className="">
          <Link href="/geo/solutions" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">Location Solutions</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {geoSolutions.map((solution: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={solution.href}>{solution.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="">
          <Link href="" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">
            Solutions
          </Link>
        <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
          {[...geoSolutions, ...gtmSolutions]
          .filter(solution => 
            !["Product Matching", "Workforce Management", "Inventory Planning"].includes(solution.label)
          )
          .map((solution, key) => (
          <li key={key} className="hover:text-[var(--primary-color)]">
            <Link href={solution.href}>{solution.label}</Link>
          </li>
          ))}
        </ul>
        </div>
        
        {/* <div className="">
          <Link href="/gtm/product" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">Products</Link>
          <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
            {gtmProduct.map((product: any, key: number) => (
              <li key={key} className="hover:text-[var(--primary-color)]">
                <Link href={product.href}>{product.label}</Link>
              </li>
            ))}
             <li className="hover:text-[var(--primary-color)]">
                <Link href="/geo/product/api_modeltraining">Api & Model Training</Link>
              </li>
          </ul>
        </div> */}
        <div className="">
        <Link href="/gtm/product" className="text-lg hover:text-[var(--primary-color)] cursor-pointer">
         Products
        </Link>
        <ul className="space-y-1 text-[#BCBCBC] text-sm mt-2">
          {gtmProduct
          .filter((product:any) => product.label !== "Outreach")
          .map((product: any, key: number) => (
          <li key={key} className="hover:text-[var(--primary-color)]">
           <Link href={product.href}>{product.label}</Link>
          </li>
        ))}
        <li className="hover:text-[var(--primary-color)]">
          <Link href="/geo/product/api_modeltraining">Api & Model Training</Link>
        </li>
        </ul>
        </div>

      </div>
      {/* <div className="flex justify-between w-full items-center mt-10 mb-10 max-[950px]:flex-col max-[950px]:gap-10">
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
      </div> */}
      <div className="border-t border-gray-600 w-full mt-5 mb-5"></div>
      {/* Copyright Section */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex justify-between items-center max-[630px]:flex-col max-[630px]:items-start max-[630px]:gap-4">
            <div className="flex gap-4 items-center max-[630px]:flex-col max-[630px]:items-start">
              {/* <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center"> */}
                <Image width="32" height="40" src={Logo} alt="nav-logo" />
              {/* </div> */}
              <ul className="text-[#BCBCBC] text-sm flex gap-4">
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
          {/* <div className="text-[#BCBCBC] text-sm text-left w-[300px]">
            <p>
              Address: Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
              Bengaluru 560025
            </p>
            <p className="mt-2">E-mail: be@whr.ai</p>
            <p className="mt-2">Contact: +91-9353648076</p>
          </div> */}
        </div>
      </div>
      <div className="mt-5 text-left">
        <p className="text-[#BCBCBC] text-sm">
          {/* © 2025 Crintel Labs Private Limited. All rights reserved. */}
          {new Date().getFullYear()} Crintel Labs Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
