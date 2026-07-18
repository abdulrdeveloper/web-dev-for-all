---
title: "How to Fix React (Vite) & Next.js Auto-Refresh Not Working on Windows"
seoTitle: "Fix React (Vite) & Next.js Auto-Refresh Bugs on Windows"
seoDescription: "Browser not auto-refreshing on Windows? Learn how to fix Hot Module Replacement (HMR) in React, Vite, and Next.js by enabling active file polling."
datePublished: 2026-06-11T02:09:18.717Z
cuid: cmq8v07z800000bhu5etn6dvk
slug: how-to-fix-react-vite-next-js-auto-refresh-not-working-on-windows
canonical: https://blog.abdulrdeveloper.me/how-to-fix-react-vite-next-js-auto-refresh-not-working-on-windows
cover: https://cdn.hashnode.com/uploads/covers/69513d1ce0cbcddf469383e9/3769c10a-2165-4399-acd4-a472f6ea0817.png
ogImage: https://cdn.hashnode.com/uploads/og-images/69513d1ce0cbcddf469383e9/27465ff3-8a1f-4f28-914d-602d92ae717f.png
tags: web-dev, windows, reactjs, hmr, nextjs

---

Have you ever saved a file in your React or Next.js project and... nothing happened? You go to the browser, manually refresh it, and only *then* the change shows up. Or maybe you have to kill the dev server and start it again just to see your new code.

Most beginners think this is a bug in their code. But let me tell you, it is actually one of the most common issues you will face if you are coding on Windows.

## Why Does This Happen Behind the Scene??

When we run our dev server, Vite and Next.js use a "file watcher" to detect changes and trigger Hot Module Replacement (HMR). On macOS or Linux, this file watcher works perfectly and instantly. But on Windows, these file system events often fail to fire.

Because the watcher misses the change, HMR never triggers, and you are stuck manually refreshing.

The fix? We just need to tell our server to actively check for changes every single second instead of waiting to be notified. In programming, this is called **polling**.

## Fix for React (Vite)

If you are building with Vite, the fix is super simple. Open your `vite.config.ts` and just add this `server` option:

**TypeScript**

```plaintext
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      host: 'localhost',
    },
  },
})
```

## Fix for Next.js

Next.js is a bit tricky here. Next.js 16 uses Turbopack by default, but our polling fix only works with **Webpack**. So, first, we need to disable Turbopack.

Go to your `package.json` and update your dev script to this:

**JSON**

```plaintext
"scripts": {
  "dev": "next dev --webpack"
}
```

Then, open your `next.config.ts` and add this configuration:

**TypeScript (or if you are on JS)**

```plaintext
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
```

**What is happening here?** `poll: 1000` means Webpack will check for file changes every 1000 milliseconds (1 second). `aggregateTimeout: 300` adds a tiny delay so that if you mash `Ctrl+S` rapidly, it doesn't trigger multiple rebuilds at the same time. Restart your dev server, and auto-refresh will finally work!

* * *

### ⚠️ **Important: Disable this configuration before deploying**

This Webpack polling fix is strictly for local development on Windows. Production platforms like Vercel run on Linux—where file-watching works natively—and build using Next.js 16's default Turbopack engine. Leaving this custom Webpack configuration active in your repository will cause your production build to fail.

**How to handle it:**

*   **Locally:** Keep this config active to ensure a smooth development workflow.
    
*   **Production:** Comment out or remove the custom Webpack config and the `--webpack` flag before pushing your changes to GitHub or Vercel.
    

You can easily re-enable it whenever you need to work locally again.

## What if you are using WSL2?

If you are running WSL2 and still facing this, the problem is likely where your project is stored.

Your project needs to live **inside the WSL filesystem** — at a path like `/home/yourname/projects/`. If your project is sitting on your Windows drive (like `/mnt/c/Users/...`), file events will not work properly and polling alone might not save you. Move the project inside `/home/` and the issue goes away.

This Next.js issue tripped me up for a while — just adding `watchOptions` does not work until you switch back to Webpack first. Once I figured that out, everything clicked.

* * *

You can find more of my work at [**abdulrdeveloper.me**](http://abdulrdeveloper.me)

Read more posts at [**blog.abdulrdeveloper.me**](http://blog.abdulrdeveloper.me)