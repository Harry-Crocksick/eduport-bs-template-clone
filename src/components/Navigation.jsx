import Megamenu from "./Megamenu";
import MarketingMegamenu from "./MarketingMegamenu";
import {
    navLinks,
    accounts,
    demos,
    categories,
    pages,
    more,
    devSub,
} from "./utils/navData";

export function Link({ link }) {
    return (
        <li className="p-2 flex items-center justify-between text-slate-400 hover:text-blue-600 hover:bg-sky-400/10 rounded-md transition-colors duration-300">
      <a href="/" className="text-sm font-medium">
        {link.title}
      </a>
      {link.kebab && <span>{link.kebab}</span>}
    </li>
    );
}

export function SubLink({ subLink, index, name }) {
    return ( <
        >
        <li className="relative flex items-center justify-between p-2 text-slate-400 hover:text-blue-600 hover:bg-sky-400/10 rounded-md group/market">
        <a href="/">
          {subLink.icon && <span>{subLink.icon}</span>}
          <span className="inline-block ml-2 text-sm font-medium">
            {subLink.title}
          </span>
          {subLink.title === "Event Detail" && (
            <span className="bg-emerald-300/30 p-1 ml-2 rounded-sm text-emerald-500 text-sm font-medium">
              New
            </span>
          )}
        </a>
        {subLink.kebab && <span>{subLink.kebab}</span>}
        {name === "Category" && subLink.title === "Development" ? (
          <nav className="hidden group-hover/market:block w-64 px-2 py-3 pl-4 absolute top-0 left-full bg-white shadow-lg rounded-md dark:bg-[#222] ring-1 ring-slate-900/5">
            {devSub.map((link, idx) => (
              <Link key={idx} link={link} />
            ))}
          </nav>
        ) : null}
        {name === "Category" && subLink.title === "Marketing" ? (
          <MarketingMegamenu />
        ) : null}
      </li> {
            name === "Accounts" && index % 3 === 0 && (
                <li className="p-2">
          <div className="bg-slate-100 h-0.5 w-full"></div>
        </li>
            )
        } {
            name === "More" && index % 2 === 0 && index !== more.length && (
                <li className="p-2">
          <div className="bg-slate-100 h-0.5 w-full"></div>
        </li>
            )
        } {
            name === "Category" && index === categories.length && ( <
                >
                <li className="p-2">
            <div className="bg-slate-100 h-0.5 w-full"></div>
          </li> <
                li className = "p-2 pl-4 text-blue-600 bg-sky-400/10 rounded-md text-sm font-medium" >
                View all categories <
                /li> < / >
            )
        } <
        />
    );
}

export function Dropdown({ linkName }) {
    let dropdown = null;
    switch (linkName) {
        case "Category":
            {
                dropdown = categories.map((link, idx) => (
                    <SubLink key={idx} subLink={link} index={idx + 1} name={"Category"} />
                ));
                break;
            }
        case "Demos":
            {
                dropdown = demos.map((link, idx) => <Link key={idx} link={link} />);
                break;
            }
        case "Pages":
            {
                dropdown = pages.map((link, idx) => (
                    <SubLink key={idx} subLink={link} index={idx + 1} name={"Pages"} />
                ));
                break;
            }
        case "Accounts":
            {
                dropdown = accounts.map((link, idx) => (
                    <SubLink key={idx} subLink={link} index={idx + 1} name={"Accounts"} />
                ));
                break;
            }
        case "More":
            {
                dropdown = more.map((link, idx) => (
                    <SubLink key={idx} subLink={link} index={idx + 1} name={"More"} />
                ));
                break;
            }
    }
    return (
        <ul className="hidden group-hover:block absolute top-full bg-white px-2 py-3 rounded-md ring-1 ring-slate-900/5 shadow-lg w-64 dark:bg-[#222] z-10">
      {dropdown}
    </ul>
    );
}

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center py-5 px-4 md:px-10 dark:bg-[#222529]">
      <div className="flex items-center space-x-4">
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
        <div
          href="/"
          className="relative group py-2 px-3 hidden lg:inline-flex lg:items-center lg:space-x-1 font-medium text-blue-600 bg-sky-400/10 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
            />
          </svg>{" "}
          <span>Category</span>
          <Dropdown linkName={"Category"} />
        </div>
      </div>
      <ul className="hidden lg:flex lg:flex-nowrap lg:items-center lg:space-x-8 lg:justify-between">
        {navLinks.map((link) => (
          <li
            key={link}
            className="group relative [&>*]:align-middle text-slate-400"
          >
            <a href="/" className="text-sm font-medium hover:text-blue-500">
              {link} <i className="fa-solid fa-chevron-down fa-xs"></i>
            </a>
            {link === "Megamenu" ? <Megamenu /> : <Dropdown linkName={link} />}
          </li>
        ))}
        <li className="group relative text-slate-400 hover:text-blue-500">
          <a href="/">
            <i className="fa-solid fa-ellipsis"></i>
          </a>
          <Dropdown linkName={"More"} />
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative hidden lg:block">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search"
            className="block w-full ring-1 ring-slate-100 dark:ring-1 dark:ring-slate-100/20 py-2 px-3 focus:ring-2 focus:ring-blue-400 outline-none rounded-md dark:bg-[#222]"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-2">
            <i className="fa-solid fa-magnifying-glass fa-fw text-slate-400"></i>
          </span>
        </div>
        <div className="lg:hidden">
          <i className="fa-solid fa-bars text-slate-400 fa-xl fa-fw"></i>
        </div>
        <div className="shrink-0">
          <img
            src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </nav>
    );
}
