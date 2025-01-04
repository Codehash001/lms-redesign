import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('auth')
  const isAuthPage = request.nextUrl.pathname === '/login'

  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
