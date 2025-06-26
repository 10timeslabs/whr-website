"use client";
import React, { useState } from "react";
import Image from "next/image";
import TickIcon from "/public/priceTick.svg";
import whrLogo from "/public/logo/croppedlogo.png";
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
  // const paymentLinks: paymentLinks = {
  //   geo: {
  //     Essential: {
  //       monthly: `https://buy.stripe.com/test_bJe7sKcva9Nz2BIdrq57W07?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_14A8wO2UA0cZ3FMfzy57W0a?${queryString}`,
  //     },
  //     Scale: {
  //       monthly: `https://buy.stripe.com/test_dRmfZg2UA0cZ1xEbji57W08?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_4gM28q66MgbXb8egDC57W0b?${queryString}`,
  //     },
  //     Advance: {
  //       monthly: `https://buy.stripe.com/test_3cI6oGcva4tfgsyevu57W09?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_eVqbJ0br6bVHb8eafe57W0c?${queryString}`,
  //     },
  //     Enterprise: {
  //       monthly: `/demo?${queryString}`,
  //       yearly: `/demo?${queryString}`,
  //     },
  //   },
  //   gtm: {
  //     Essential: {
  //       monthly: `https://buy.stripe.com/test_cNi7sK8eU0cZekq4UU57W01?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_eVqdR8eDif7T2BI9ba57W06?${queryString}`,
  //     },
  //     Scale: {
  //       monthly: `https://buy.stripe.com/test_bJedR852I2l7foudrq57W02?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_00weVcdze3pbb8e3QQ57W05?${queryString}`,
  //     },
  //     Advance: {
  //       monthly: `https://buy.stripe.com/test_00w4gy1Qw1h36RYcnm57W03?${queryString}`,
  //       yearly: `https://buy.stripe.com/test_6oU6oGan2aRDfou5YY57W04?${queryString}`,
  //     },
  //     Enterprise: {
  //       monthly: `/demo?${queryString}`,
  //       yearly: `/demo?${queryString}`,
  //     },
  //   },
  // };

  //   Prod payment Links
  const paymentLinks: paymentLinks = {
    geo: {
      Essential: {
        monthly: `https://buy.stripe.com/dRmfZg2UA0cZ1xEbji57W08?${queryString}`,
        yearly: `https://buy.stripe.com/4gM28q66MgbXb8egDC57W0b?${queryString}`,
      },
      Scale: {
        monthly: `https://buy.stripe.com/3cI6oGcva4tfgsyevu57W09?${queryString}`,
        yearly: `https://buy.stripe.com/eVqbJ0br6bVHb8eafe57W0c?${queryString}`,
      },
      Advance: {
        monthly: `https://buy.stripe.com/14A8wO2UA0cZ3FMfzy57W0a?${queryString}`,
        yearly: `https://buy.stripe.com/00w28qbr69Nzgsycnm57W0d?${queryString}`,
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
      window.open(paymentLinks["gtm"][planName][type], "_self");
    } else if (!gtmUser && geoUser) {
      window.open(paymentLinks["geo"][planName][type], "_self");
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
        {/* <h2 className="text-lg font-semibold">Select Platform</h2> */}
        <div className="grid grid-cols-6 gap-6 mt-6">
          <div className="bg-[#59478C] rounded-xl p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-6 lg:col-span-2 h-[20vh] lg:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-base text-white font-semibold">
                Save More
                <div className="text-lg text-white font-bold">
                  With Good Plans.
                </div>
              </div>
              <div className="text-sm text-white">
                Select your platform, sign up in minutes, and choose the perfect
                plan to launch your journey.
              </div>
              <div className="text-white font-bold">{"->"}</div>
            </div>
            <div className="items-center gap-2 hidden lg:flex">
              <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                <Image src={whrLogo} alt="tick" height={26} width={24} />
              </div>
              <span className="text-white font-bold text-lg">WHR.ai</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-3 lg:col-span-2 h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GEO</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="flex gap-2 items-baseline text-sm">
                Comprehensive coverage of all event formats enriched with advanced location intelligence to support strategic market planning.
              </div>
              {/* <div className="border border-b-[#A9A9AA] border-dashed"></div> */}
            </div>

            <Link
              className="bg-[var(--primary-color)] rounded-md text-white text-center py-2 "
              href={
                geoUser
                  ? paymentLinks["geo"][data.name][
                      isAnually ? "yearly" : "monthly"
                    ]
                  : "https://geo.whr.ai/signup?redirect=whr-pricing"
              }
            >
              Choose
            </Link>
          </div>

          <div className="bg-white rounded-xl p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-3 lg:col-span-2 h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GTM</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="overflow-y-auto h-[120px]">
                <div className="flex gap-2 items-baseline text-sm">
                  Focused insights into business events, delivering industry-specific intelligence to drive informed go-to-market decisions.
                </div>
              </div>
              {/* <div className="border border-b-[#A9A9AA] border-dashed"></div> */}
            </div>

            <Link
              className="bg-[var(--primary-color)] rounded-md text-white text-center py-2 "
              href={
                gtmUser
                  ? paymentLinks["gtm"][data.name][
                      isAnually ? "yearly" : "monthly"
                    ]
                  : "https://gtm.whr.ai/signup?redirect=whr-pricing"
              }
            >
              Choose
            </Link>
          </div>
        </div>
      </PlatformSelectionModal>
    </>
  );
};

export default PriceCard;
