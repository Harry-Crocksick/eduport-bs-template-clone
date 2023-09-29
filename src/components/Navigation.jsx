const navLinks = ["Demos", "Pages", "Accounts", "Megamenu"];

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
        <a
          href="/"
          className="py-2 px-3 hidden lg:inline-flex lg:items-center lg:space-x-1 font-medium text-blue-600 bg-sky-400/10 rounded-md"
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
        </a>
      </div>
      <ul className="hidden lg:flex lg:flex-nowrap lg:items-center lg:space-x-8 lg:justify-between">
        {navLinks.map((link) => (
          <li key={link} className="[&>*]:align-middle text-slate-400">
            <a href="/" className="text-sm font-medium hover:text-blue-500">
              {link} <i className="fa-solid fa-chevron-down fa-xs"></i>
            </a>
          </li>
        ))}
        <li className="text-slate-400 hover:text-blue-500">
          <a href="/">
            <i className="fa-solid fa-ellipsis"></i>
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative hidden lg:block">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search"
            className="block w-full ring-1 ring-slate-200 py-2 px-3 focus:ring-blue-400 outline-none rounded-md"
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
