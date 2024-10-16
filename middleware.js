import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export const middleware = (request) => {
//   //   console.log(request);
//   // We can use condition instead of using cofig for middleware example mentioned below
//   if (request.nextUrl.pathname.startsWith("/about")) {
//     // console.log(true);
//     return NextResponse.rewrite(new URL("/about/vision/mission", request.url));
//   }
//   //    return NextResponse.redirect(new URL("/about/vision/mission", request.url));
//   //   return NextResponse.rewrite(new URL("/about/vision/mission", request.url));
//   //   return NextResponse.next();
// };

// export const config = {
//   //   matcher: "/about",
//   matcher: ["/about", "/services"],
// };

// Another use case of condition in middleware can be checking is user available or not
// const user = false;
// export const middleware = (request) => {
//   if (!user) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: "/adminDashboard",
// };

// using middleware with browser cookies
// export const middleware = (requset) => {
//   const cookie = "farhan-mazumder";
//   const browserCookies = requset.cookies.get("token");
//   //   console.log(browserCookies);
//   if (!browserCookies || browserCookies.value !== cookie) {
//     return NextResponse.redirect(new URL("/login", requset.url));
//   }
//   return NextResponse.next();
// };
// export const config = {
//   matcher: "/adminDashboard",
// };

// Another way of accessing browser cookies in middleware.js file
export const middleware = (request) => {
  const authToken = cookies(request).get("next-auth.session-token");
  // console.log("authToken", authToken);
  if (!authToken) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/adminDashboard",
};
