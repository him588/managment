import { NextRequest, NextResponse } from "next/server";
import { tokenPayload } from "./components/helper/jwt";

export default function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll();
  const url = request.nextUrl.href.split("/")[3];
  const publicRoutes = ["login", ""];
  let token = "";

  if (cookies.length !== 0) {
    console.log("cookies", cookies);
    const refreshToken = cookies.filter(
      (cookie) => cookie.name === "refreshToken",
    );
    console.log("refreshToken", refreshToken);
    if (refreshToken.length > 0) {
      token = refreshToken[0].value;
    }
  }

  const decodedToken = token ? tokenPayload(token) : null;

  // if (!decodedToken && publicRoutes.includes(url)) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // if (decodedToken && decodedToken.hotelId === "" && url !== "onboarding") {
  //   return NextResponse.redirect(new URL("/onboarding", request.url));
  // }

  // if (
  //   decodedToken &&
  //   decodedToken.hotelId &&
  //   url &&
  //   !publicRoutes.includes(url)
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
