import React from "react";

const companyLinks = [
  "About us",
  "Contact us",
  "News and Blogs",
  "Library",
  "Career",
];
const communityLinks = ["Documentation", "FAQ", "Forum", "Sitemap"];
const teachingLinks = [
  "Become a teacher",
  "How to guide",
  "Terms & Conditions",
];

function Links({ links }) {
  return (
    <ul className="mt-6">
      {links.map((link) => (
        <li key={link}>
          <a
            href="/"
            className="text-slate-400 text-sm font-normal leading-loose hover:text-cyan-400"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="my-10 dark:bg-[#222529]">
      <section className="max-w-screen-xl mx-auto flex flex-col divide-y divide-slate-100 px-4 py-8">
        {/* upper footer section starts */}
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 pb-4">
          {/* footer logo section starts */}
          <div className="col-span-full lg:col-span-3 flex flex-col space-y-4">
            <div className="shrink-0">
              <img
                src="https://eduport.webestica.com/assets/images/logo.svg"
                alt="Eduport"
                loading="lazy"
                className="w-36 h-auto dark:hidden"
              />
              <img
                src="https://eduport.webestica.com/assets/images/logo-light.svg"
                alt="Logo Light"
                className="w-36 h-auto hidden dark:block"
              />
            </div>
            <p className="text-slate-400 text-sm font-normal">
              Eduport education theme, built specifically for the education
              centers which is dedicated to teaching and involve learners.
            </p>
            {/* social icons section starts */}
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="p-2 shadow-md rounded-md">
                  <i className="fa-brands fa-facebook-f fa-fw text-blue-600"></i>
                </a>
              </li>
              <li>
                <a href="/" className="p-2 shadow-md rounded-md">
                  <i className="fa-brands fa-instagram fa-fw text-pink-500"></i>
                </a>
              </li>
              <li>
                <a href="/" className="p-2 shadow-md rounded-md">
                  <i className="fa-brands fa-twitter fa-fw text-sky-500"></i>
                </a>
              </li>
              <li>
                <a href="/" className="p-2 shadow-md rounded-md">
                  <i className="fa-brands fa-linkedin-in fa-fw text-blue-500"></i>
                </a>
              </li>
            </ul>
            {/* social icons sectin ends */}
          </div>
          {/* footer logo section ends */}

          {/* company section starts */}
          <div className="col-span-full sm:col-span-2">
            <h3 className="text-xl dark:text-white font-semibold">Company</h3>
            <Links links={companyLinks} />
          </div>
          {/* company section ends */}

          {/* community section starts */}
          <div className="col-span-full sm:col-span-2">
            <h3 className="text-xl dark:text-white font-semibold">Community</h3>
            <Links links={communityLinks} />
          </div>
          {/* community section ends */}

          {/* teaching section starts */}
          <div className="col-span-full sm:col-span-2">
            <h3 className="text-xl dark:text-white font-semibold">Teaching</h3>
            <Links links={teachingLinks} />
          </div>
          {/* teaching section ends */}

          {/* contact section starts */}
          <div className="col-span-full sm:col-span-2 lg:col-span-3">
            <h3 className="text-xl dark:text-white font-semibold">Contact</h3>
            <address className="mt-6 mb-4">
              <p className="dark:text-white">
                <span className="text-slate-400">Toll free: </span>+123 456 7890
                <br />
                (9:AM to 8:PM IST)
              </p>
              <p className="dark:text-white">
                <span className="text-slate-400">Email: </span>example@gmail.com
              </p>
            </address>
            <ul className="flex gap-2 flex-wrap">
              <li>
                <a href="/" className="shrink-0">
                  <img
                    src="https://eduport.webestica.com/assets/images/client/google-play.svg"
                    alt="Google Play"
                    loading="lazy"
                    className="w-32 h-auto"
                  />
                </a>
              </li>
              <li>
                <a href="/" className="shrink-0">
                  <img
                    src="https://eduport.webestica.com/assets/images/client/app-store.svg"
                    alt="App Store"
                    loading="lazy"
                    className="w-32 h-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* contact section ends */}
        </div>
        {/* upper footer section ends */}
        <div className="pt-4 flex gap-4 flex-col md:flex-row justify-between">
          <p className="text-slate-400">
            Copyrights &copy;{new Date().getFullYear()}{" "}
            <a
              href="https://www.webestica.com"
              className="text-indigo-600 font-semibold"
            >
              Webestica
            </a>
            . All rights reserved. <br />
            Built by{" "}
            <a href="/" className="text-cyan-400 font-semibold">
              Marn Tet Zan
            </a>
          </p>
          <ul className="flex space-x-4 text-sm sm:[&>li>a]:text-base [&>li>a]:text-slate-400">
            <li>
              <a>
                <i className="fa-solid fa-globe fa-fw"></i>
                <select
                  name="smt"
                  id="something"
                  className="bg-transparent ml-2"
                >
                  <option>Language</option>
                  <option value="">English</option>
                  <option value="">German</option>
                  <option value="">French</option>
                </select>
              </a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
