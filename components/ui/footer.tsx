import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Xhibit-Central - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Our method
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="#0"
                  aria-label="Instagram"
                >
<svg
  className="h-8 w-8 fill-current"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="#9EE2D6"
>
  <path d="M12 0c-3.2 0-3.584.012-4.85.07-1.256.058-2.12.25-2.868.53a5.78 5.78 0 0 0-2.098 1.37A5.78 5.78 0 0 0 .78 4.938c-.28.748-.472 1.612-.53 2.868C.192 9.072.18 9.456.18 12c0 2.544.012 2.928.07 4.194.058 1.256.25 2.12.53 2.868a5.78 5.78 0 0 0 1.37 2.098 5.78 5.78 0 0 0 2.098 1.37c.748.28 1.612.472 2.868.53C8.416 23.808 8.8 23.82 12 23.82c3.2 0 3.584-.012 4.85-.07 1.256-.058 2.12-.25 2.868-.53a5.78 5.78 0 0 0 2.098-1.37 5.78 5.78 0 0 0 1.37-2.098c.28-.748.472-1.612.53-2.868.058-1.266.07-1.65.07-4.85 0-3.2-.012-3.584-.07-4.85-.058-1.256-.25-2.12-.53-2.868a5.78 5.78 0 0 0-1.37-2.098 5.78 5.78 0 0 0-2.098-1.37c-.748-.28-1.612-.472-2.868-.53C15.584.192 15.2.18 12 .18c-3.2 0-3.584.012-4.85.07-1.256.058-2.12.25-2.868.53a5.78 5.78 0 0 0-2.098 1.37A5.78 5.78 0 0 0 .78 4.938c-.28.748-.472 1.612-.53 2.868C.192 9.072.18 9.456.18 12c0 2.544.012 2.928.07 4.194.058 1.256.25 2.12.53 2.868a5.78 5.78 0 0 0 1.37 2.098 5.78 5.78 0 0 0 2.098 1.37c.748.28 1.612.472 2.868.53 1.266.058 1.65.07 4.85.07s3.584-.012 4.85-.07c1.256-.058 2.12-.25 2.868-.53a5.78 5.78 0 0 0 2.098-1.37 5.78 5.78 0 0 0 1.37-2.098c.28-.748.472-1.612.53-2.868.058-1.266.07-1.65.07-4.85s-.012-3.584-.07-4.85c-.058-1.256-.25-2.12-.53-2.868a5.78 5.78 0 0 0-1.37-2.098 5.78 5.78 0 0 0-2.098-1.37c-.748-.28-1.612-.472-2.868-.53-1.266-.058-1.65-.07-4.85-.07zm0 5.82c-3.414 0-6.18 2.766-6.18 6.18s2.766 6.18 6.18 6.18 6.18-2.766 6.18-6.18-2.766-6.18-6.18-6.18zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-9.75a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
</svg>

                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="#0"
                  aria-label="Facebook"
                >
<svg
  className="h-8 w-8 fill-current"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="#9EE2D6"
>
  <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 5.004 3.664 9.128 8.437 9.877v-6.993H7.898v-2.884h2.539v-2.19c0-2.507 1.49-3.894 3.772-3.894 1.094 0 2.237.196 2.237.196v2.464h-1.258c-1.241 0-1.626.771-1.626 1.562v1.862h2.777l-.444 2.884h-2.333v6.993C18.336 21.168 22 17.044 22 12.04c0-5.523-4.477-10-10-10z"/>
</svg>


                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Xhibit'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Xhibit'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
