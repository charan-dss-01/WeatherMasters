import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple middleware to check authentication state and redirect
export function middleware(request: NextRequest) {
  // Get auth status from clerk-specific header
  const isAuthenticated = !!request.cookies.get("__clerk_session");
  const url = request.nextUrl.clone();
  
  // If user is authenticated and on the home page, redirect to weather
  if (isAuthenticated && url.pathname === "/") {
    url.pathname = "/weather";
    return NextResponse.redirect(url);
  }
  
  // Otherwise, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match only the home page for this redirect
    "/"
  ],
};