---
title: "Next.js Middleware — Route Protection Without Any Library"
seoTitle: "Route Protection in Next.js Without Any Library"
seoDescription: "Learn how to protect routes globally in Next.js App Router using pure cookies and native middleware. No npm install required. Copy and ship fast!"
datePublished: 2026-06-02T16:27:23.311Z
cuid: cmpwup1rh000g1sk59d622qqy
slug: next-js-middleware-route-protection-without-any-library
canonical: https://blog.abdulrdeveloper.me/next-js-middleware-route-protection-without-any-library
cover: https://cdn.hashnode.com/uploads/covers/69513d1ce0cbcddf469383e9/618adf06-a666-4ae0-abff-df0ecea6437f.png
ogImage: https://cdn.hashnode.com/uploads/og-images/69513d1ce0cbcddf469383e9/7c711683-f8ab-49a5-9c63-d33e0136f10b.png
tags: authentication, javascript, web-development, middleware, nextjs

---


Most beginners think route protection means installing NextAuth or Clerk. It does not always have to be that.

For a small project, a hackathon prototype, or just something you are building to learn — a simple cookie check in middleware is enough to get the job done.

This is exactly that.

* * *

## How the Logic Works

Next.js middleware runs before a request reaches any page. That makes it the perfect place to check if someone is allowed to visit a route.

Here is what we are doing:

*   If someone tries to open `/dashboard` without being logged in, they get kicked back to `/`
    
*   If someone is already logged in and visits `/`, they get skipped straight to `/dashboard`
    
*   The check is based on one cookie: `isLoggedIn`
    

That is it. No library. No JWT verification. Just a cookie presence check.

* * *

## Step 1: Create `middleware.ts` (or `middleware.js`)

Put this file in your root directory `/` — or inside `src/` if you use that structure.

**TypeScript (**`middleware.ts`**):**

```typescript
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has('isLoggedIn');
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname === '/' && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
```

**or if you are using JavaScript (**`middleware.js`**) — same logic, no types:**

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.has('isLoggedIn');
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname === '/' && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
```

The `matcher` at the bottom is important. Without it, the middleware runs on every single request — including `_next/static` files, images, API routes. That slows things down for no reason. The matcher makes sure it only fires where it actually matters.

* * *

## Step 2: Wire It Up to Your Forms

You do not need to change your layout or UI. Just drop these lines into the right places.

**On Login — inside your login page's submit handler:**

Most people have a login form on their landing page or `/login`. Find the function that runs when the form is submitted — after your validation passes, add this:

```javascript
document.cookie = "isLoggedIn=true; path=/; max-age=86400";
router.push('/dashboard');
```

`max-age=86400` means the cookie lives for exactly one day — 86400 seconds. After that it disappears on its own.

**On Logout — inside your dashboard's logout button:**

You do not need a separate logout page or file. Just find your logout button — it is usually sitting in your dashboard's navbar or sidebar — and add this to its `onClick` handler:

```jsx
<button onClick={() => {
  document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  router.push('/');
  router.refresh();  // It will Clear Next.js client-side cache     and force a fresh server state reload (prevents browser back-button bypass)

}}>
  Logout
</button>
```

Setting `expires` to a past date is how you delete a cookie. The browser sees it as already expired and removes it.

* * *

## What This Does Not Do

This setup only checks if the cookie *exists*. It does not verify a signature or validate who the user actually is.

That means someone could open DevTools, go to Application → Cookies, manually add `isLoggedIn=true`, and get past the middleware. The lock is real but the key is easy to duplicate.

For a hackathon or a personal project — totally fine. For something handling real user data or payments — replace the boolean cookie with a signed JWT and verify the signature server-side.

But for getting something working fast? This does the job.

* * *

No `npm install` needed. Copy, paste, ship.

  
  
You can find more of my work at [**abdulrdeveloper.me**](http://abdulrdeveloper.me)  
Read more posts at [**blog.abdulrdeveloper.me**](http://blog.abdulrdeveloper.me)