import { useAccounts } from "@/context/auth";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const UserProfiles = () => {
  const userDetails = useAccounts();
  const pathname = usePathname();
  //   const [activeAccount, setActiveAccount] = useState();

  const [userDropdown, setUserdropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Check if user is on GTM or GEO related paths
  const isOnGtmPath = pathname.includes('/gtm');
  const isOnGeoPath = pathname.includes('/geo');

  const generateProfileName = (platform: "geoUser" | "gtmUser") => {
    if (userDetails[platform]) {
      const { firstname, lastname } = userDetails[platform];
      const initials = [firstname?.[0], lastname?.[0]]
        .map((char) => char?.toUpperCase())
        .filter(Boolean)
        .join("");

      return initials;
    }
    return "";
  };

  const ProfileCard = ({
    platform,
    size = "lg",
  }: {
    platform: "geoUser" | "gtmUser";
    size?: "lg" | "sm";
  }) => {
    return (
      userDetails[platform] &&
      (userDetails[platform]?.profilePicture ? (
        <img
          src={userDetails[platform]?.profilePicture}
          alt="user image"
          className={`${size === "lg" ? "w-10 h-10" : "w-9 h-9"} rounded-full`}
        />
      ) : userDetails[platform]?.firstname ||
        userDetails[platform]?.lastname ? (
        <div
          className={`bg-primary flex items-center justify-center
                text-primary-foreground rounded-full ${
                  size === "lg" ? "w-10 h-10" : "w-9 h-9"
                } font-medium text-sm shadow-sm`}
        >
          {generateProfileName(platform)}
        </div>
      ) : (
        <img
          src="/defaultProfilePic.png"
          alt="user image"
          className={`${size === "lg" ? "w-11 h-11" : "w-9 h-9"} rounded-full`}
        />
      ))
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserdropdown(false);
      }
    }

    if (userDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDropdown]);

  // Only show profile card if user has at least one account
  if (!userDetails.gtmUser && !userDetails.geoUser) return <></>;

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setUserdropdown(!userDropdown)}
      >
        <ProfileCard platform={userDetails.gtmUser ? "gtmUser" : "geoUser"} />
      </div>

      {userDropdown && (
        <div
          ref={dropdownRef}
          className={`bg-white shadow-md rounded-md py-2 absolute top-[50px] right-0 flex flex-col gap-1 text-[14px] border w-auto min-w-[220px] max-w-[250px]`}
        >
          <span className="text-muted-foreground font-semibold text-xs pl-2">
            Account
          </span>
          {userDetails.gtmUser && (
            <Link
              href={"https://gtm.whr.ai/"}
              target="_blank"
              className="cursor-pointer hover:bg-[var(--accent-color)] p-2 rounded-[2px] flex pl-3"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center flex-1 min-w-0">
                  <ProfileCard platform="gtmUser" size="sm" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">
                      {userDetails.gtmUser?.firstname &&
                        userDetails.gtmUser?.firstname}{" "}
                      {userDetails.gtmUser?.lastname &&
                        userDetails.gtmUser?.lastname}
                    </span>
                    <span className="text-xs truncate">{userDetails.gtmUser?.email}</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded px-2 py-1 ml-2 flex-shrink-0">
                  GTM
                </div>
              </div>
            </Link>
          )}
          {userDetails.geoUser && (
            <Link
              href={"https://geo.whr.ai/"}
              target="_blank"
              className="cursor-pointer hover:bg-[var(--accent-color)] p-2 rounded-[2px] flex pl-3"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center flex-1 min-w-0">
                  <ProfileCard platform="geoUser" size="sm" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">
                      {userDetails.geoUser?.firstname &&
                        userDetails.geoUser?.firstname}{" "}
                      {userDetails.geoUser?.lastname &&
                        userDetails.geoUser?.lastname}
                    </span>
                    <span className="text-xs truncate">{userDetails.geoUser?.email}</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded px-2 py-1 ml-2 flex-shrink-0">
                  GEO
                </div>
              </div>
            </Link>
          )}

          {/* Conditional Signup Sections */}
          {isOnGtmPath && !userDetails.gtmUser && (
            <Link
              href={"https://gtm.whr.ai/signup"}
              target="_blank"
              className="cursor-pointer hover:bg-[var(--accent-color)] p-2 rounded-[2px] flex pl-3 border-t border-gray-100 mt-1"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">
                      Sign up for GTM
                    </span>
                    <span className="text-xs text-gray-500 truncate">Create your GTM account</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded px-2 py-1 ml-2 flex-shrink-0">
                  GTM
                </div>
              </div>
            </Link>
          )}

          {isOnGeoPath && !userDetails.geoUser && (
            <Link
              href={"https://geo.whr.ai/signup"}
              target="_blank"
              className="cursor-pointer hover:bg-[var(--accent-color)] p-2 rounded-[2px] flex pl-3 border-t border-gray-100 mt-1"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">
                      Sign up for GEO
                    </span>
                    <span className="text-xs text-gray-500 truncate">Create your GEO account</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded px-2 py-1 ml-2 flex-shrink-0">
                  GEO
                </div>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfiles;
