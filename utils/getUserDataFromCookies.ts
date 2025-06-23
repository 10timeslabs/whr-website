import { cookies } from "next/headers";

interface UserDetails {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  profilePicture: string | null;
}

export const getUserDataFromCookies = async () => {
  const cookieStore = await cookies();
  const geoUserCookie = cookieStore.get("geoUser");
  const gtmUserCookie = cookieStore.get("gtmUser");

  let geoUser: UserDetails | null = null;
  let gtmUser: UserDetails | null = null;

  if (geoUserCookie && geoUserCookie.value) {
    try {
      geoUser = JSON.parse(geoUserCookie.value);
    } catch (error) {
      console.error("Error parsing geoUser cookie:", error);
    }
  }

  if (gtmUserCookie && gtmUserCookie.value) {
    try {
      gtmUser = JSON.parse(gtmUserCookie.value);
    } catch (error) {
      console.error("Error parsing gtmUser cookie:", error);
    }
  }

  return { geoUser, gtmUser };
};
