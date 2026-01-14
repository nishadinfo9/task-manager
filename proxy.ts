import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });
  const path = request.nextUrl.pathname;

  if (path === "/") {
    return NextResponse.redirect(new URL("/dashboard/overview", request.url));
  }
  if (path === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/overview", request.url));
  }

  if (token && (path.startsWith("/register") || path.startsWith("/login"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/login", "/", "/dashboard", "/dashboard/:path*"],
};
