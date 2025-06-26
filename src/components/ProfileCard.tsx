import { useAccounts } from "@/context/auth";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const UserProfiles = () => {
  const userDetails = useAccounts();
  //   const [activeAccount, setActiveAccount] = useState();

  const [userDropdown, setUserdropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
              <div className="flex gap-2">
                <ProfileCard platform="gtmUser" size="sm" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {userDetails.gtmUser?.firstname &&
                      userDetails.gtmUser?.firstname}{" "}
                    {userDetails.gtmUser?.lastname &&
                      userDetails.gtmUser?.lastname}
                  </span>
                  <span className="text-xs">{userDetails.gtmUser?.email}</span>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded w-fit h-fit px-2 py-1">
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
              <div className="flex gap-2">
                <ProfileCard platform="geoUser" size="sm" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {userDetails.geoUser?.firstname &&
                      userDetails.geoUser?.firstname}{" "}
                    {userDetails.geoUser?.lastname &&
                      userDetails.geoUser?.lastname}
                  </span>
                  <span className="text-xs">{userDetails.geoUser?.email}</span>
                </div>
                <div className="text-xs font-medium text-[#A35200] bg-[#FFF4D6] rounded w-fit h-fit px-2 py-1">
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
