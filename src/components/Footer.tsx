import Link from "next/link";
import React from "react";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import Insta from "/public/social_link_icons/Vector (1).svg";
import Pin from "/public/social_link_icons/Vector (2).svg";
import linke from "/public/social_link_icons/Vector (3).svg";
import TicktokIcon from "/public/social_link_icons/Vector (4).svg";
import you from "/public/social_link_icons/Vector (5).svg";
import TwitterIcon from "/public/social_link_icons/Vector.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-32 flex justify-between h-[300px]">
      <div className="">
        <div className="mb-4">
          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
          <div className="mt-4 text-[#BCBCBC] text-[14px]">
            <span>
              Unlock the true potential of Event <br /> Intelligence !
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-16">
          <Link href="https://twitter.com" target="_blank">
            <Image src={TwitterIcon} alt="" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src={Insta} alt="" />
          </Link>
          <Link href="https://pinterest.com" target="_blank">
            <Image src={Pin} alt="" />
          </Link>
          <Link href="https://linkedIn.com" target="_blank">
            <Image src={linke} alt="" />
          </Link>
          <Link href="https://ticktok.com" target="_blank">
            <Image src={TicktokIcon} alt="" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Image src={you} alt="" />
          </Link>
        </div>
      </div>

      <div className=" md:text-left md:mt-0 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className=" text-lg mb-2">Product</h3>
          <ul className="space-y-2 text-[#7B7B7B] text-[14px]">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Updated</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" text-lg mb-2">Company</h3>
          <ul className="space-y-2 text-[#7B7B7B] text-[14px]">
            <li>
              <Link href="#">About</Link>
            </li>

            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" text-lg mb-2">Resource</h3>
          <ul className="space-y-2 text-[#7B7B7B] text-[14px]">
            <li>
              <Link href="#">Examples</Link>
            </li>
            <li>
              <Link href="#">Community</Link>
            </li>
            <li>
              <Link href="#">Guides</Link>
            </li>
            <li>
              <Link href="#">Docs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" text-lg mb-2">Legal</h3>
          <ul className="space-y-2 text-[#7B7B7B] text-[14px]">
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Security</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
