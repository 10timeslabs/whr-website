"use client";
import React, { useState } from "react";
import Image from "next/image";
import TickIcon from "/public/priceTick.svg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PlatformSelectionModal from "../PlatformSelection/platformSelectionModal";
import { useAccounts } from "@/context/auth";

interface Props {
  data: { name: string; price: number; features: string[]; per: string };
  isActive: boolean;
  isAnually: boolean;
}

interface paymentLinks {
  geo: {
    [key: string]: {
      monthly: string;
      yearly: string;
    };
  };
  gtm: {
    [key: string]: {
      monthly: string;
      yearly: string;
    };
  };
}

const PriceCard = ({ data, isActive, isAnually }: Props) => {
  const searchParams = useSearchParams();
  const { gtmUser, geoUser } = useAccounts();
  const [isModalOpen, setModalOpen] = useState(false);

  const utm = {
    utm_source: searchParams.get("utm_source") || "whr",
    utm_campaign: "pricing",
    utm_medium: "web",
    utm_term:
      searchParams.get("utm_term") ||
      `whr_pricing_${data.name.toLowerCase()}_${
        isAnually ? "yearly" : "monthly"
      }`,
  };

  const queryString = new URLSearchParams(utm).toString();

  //   Test payment Links
//   const paymentLinks: paymentLinks = {
//     geo: {
//       Essential: {
//         monthly: `https://buy.stripe.com/test_cNi7sK8eU0cZekq4UU57W01?${queryString}`,
//         yearly: `https://buy.stripe.com/test_eVqdR8eDif7T2BI9ba57W06?${queryString}`,
//       },
//       Scale: {
//         monthly: `https://buy.stripe.com/test_bJedR852I2l7foudrq57W02?${queryString}`,
//         yearly: `https://buy.stripe.com/test_00weVcdze3pbb8e3QQ57W05?${queryString}`,
//       },
//       Advance: {
//         monthly: `https://buy.stripe.com/test_00w4gy1Qw1h36RYcnm57W03?${queryString}`,
//         yearly: `https://buy.stripe.com/test_6oU6oGan2aRDfou5YY57W04?${queryString}`,
//       },
//       Enterprise: {
//         monthly: `/demo?${queryString}`,
//         yearly: `/demo?${queryString}`,
//       },
//     },
//     gtm: {
//       Essential: {
//         monthly: `https://buy.stripe.com/test_cNi7sK8eU0cZekq4UU57W01?${queryString}`,
//         yearly: `https://buy.stripe.com/test_eVqdR8eDif7T2BI9ba57W06?${queryString}`,
//       },
//       Scale: {
//         monthly: `https://buy.stripe.com/test_bJedR852I2l7foudrq57W02?${queryString}`,
//         yearly: `https://buy.stripe.com/test_00weVcdze3pbb8e3QQ57W05?${queryString}`,
//       },
//       Advance: {
//         monthly: `https://buy.stripe.com/test_00w4gy1Qw1h36RYcnm57W03?${queryString}`,
//         yearly: `https://buy.stripe.com/test_6oU6oGan2aRDfou5YY57W04?${queryString}`,
//       },
//       Enterprise: {
//         monthly: `/demo?${queryString}`,
//         yearly: `/demo?${queryString}`,
//       },
//     },
//   };

  //   Prod payment Links
  const paymentLinks: paymentLinks = {
    geo: {
      Essential: {
        monthly: `https://buy.stripe.com/bJedR852I2l7foudrq57W02?${queryString}`,
        yearly: `https://buy.stripe.com/bJe7sKcva9Nz2BIdrq57W07?${queryString}`,
      },
      Scale: {
        monthly: `https://buy.stripe.com/00w4gy1Qw1h36RYcnm57W03?${queryString}`,
        yearly: `https://buy.stripe.com/eVqdR8eDif7T2BI9ba57W06?${queryString}`,
      },
      Advance: {
        monthly: `https://buy.stripe.com/6oU6oGan2aRDfou5YY57W04?${queryString}`,
        yearly: `https://buy.stripe.com/00weVcdze3pbb8e3QQ57W05?${queryString}`,
      },
      Enterprise: {
        monthly: `/demo?${queryString}`,
        yearly: `/demo?${queryString}`,
      },
    },
    gtm: {
      Essential: {
        monthly: `https://buy.stripe.com/bJedR852I2l7foudrq57W02?${queryString}`,
        yearly: `https://buy.stripe.com/bJe7sKcva9Nz2BIdrq57W07?${queryString}`,
      },
      Scale: {
        monthly: `https://buy.stripe.com/00w4gy1Qw1h36RYcnm57W03?${queryString}`,
        yearly: `https://buy.stripe.com/eVqdR8eDif7T2BI9ba57W06?${queryString}`,
      },
      Advance: {
        monthly: `https://buy.stripe.com/6oU6oGan2aRDfou5YY57W04?${queryString}`,
        yearly: `https://buy.stripe.com/00weVcdze3pbb8e3QQ57W05?${queryString}`,
      },
      Enterprise: {
        monthly: `/demo?${queryString}`,
        yearly: `/demo?${queryString}`,
      },
    },
  };

  const handlePlanClick = (planName: string, type: "monthly" | "yearly") => {
    if (gtmUser && !geoUser) {
      paymentLinks.gtm[planName][type];
      window.open(paymentLinks["gtm"][planName][type], "_blank");
    } else if (!gtmUser && geoUser) {
      window.open(paymentLinks["geo"][planName][type], "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`h-[560px] w-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col justify-between p-5 ${
          isActive
            ? "border-2 border-[var(--primary-color)] bg-[#E6E6F9]"
            : "bg-white"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[24px]">{data.name}</span>
            <span className="text-[14px] text-[var(--secondary-text-color)]">{`Unleash the Power of Your Business with ${data.name} Plan.`}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[30px] font-medium">
              {data.price === 0
                ? "Custom"
                : `$${isAnually ? data.price * 10 : data.price}`}
            </span>
            {data.price !== 0 && (
              <span className="text-[var(--secondary-text-color)] text-[14px]">
                {isAnually ? "per year" : "per month"}
              </span>
            )}
          </div>
          <div className="w-full border border-[var(--border-color)]"></div>
          <div className="flex flex-col gap-2">
            {data.features.map((feature, key) => (
              <div key={key} className="flex gap-2 items-baseline">
                <Image src={TickIcon} alt="tick" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <Link
          // href={paymentLinks[data.name][isAnually ? "yearly" : "monthly"]}
          // target={data.name === "Enterprise" ? "_self" : "_blank"}
          className="bg-[var(--primary-color)] rounded-md text-white text-center py-2 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"
          onClick={() =>
            handlePlanClick(data.name, isAnually ? "yearly" : "monthly")
          }
          href="#"
        >
          {data.name === "Enterprise" ? "Get In Touch" : "Buy Now"}
        </Link>
      </div>
      <PlatformSelectionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <h2 className="text-lg font-semibold mb-6">Select Platform</h2>
        <div className="grid grid-cols-2 gap-6">
          <Link
            className="bg-white rounded-xl p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 h-32 text-center"
            href={
              gtmUser
                ? paymentLinks["gtm"][data.name][
                    isAnually ? "yearly" : "monthly"
                  ]
                : "https://geo.whr.ai/signup?redirect=whr-pricing"
            }
          >
            <span className="font-semibold">GTM</span>
          </Link>
          <Link
            className="bg-white rounded-xl p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 cursor-pointer text-center"
            href={
              geoUser
                ? paymentLinks["geo"][data.name][
                    isAnually ? "yearly" : "monthly"
                  ]
                : "https://geo.whr.ai/signup?redirect=whr-pricing"
            }
          >
            <span className="font-semibold">GEO</span>
          </Link>
        </div>
      </PlatformSelectionModal>
    </>
  );
};

export default PriceCard;
