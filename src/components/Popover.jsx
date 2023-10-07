import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";

export default function Customize() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light" || theme === "auto"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, [theme]);

  return (
    <Popover className="relative">
      <Popover.Button className="shrink-0 focus:outline-none">
        <img
          src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </Popover.Button>

      <Popover.Panel className="absolute w-[270px] right-0 ring-1 ring-slate-900/5 rounded-md dark:bg-[#0F0F10] z-30">
        <div className="p-4 shadow-lg">
          <div className="flex items-center space-x-3 max-w-max mx-auto">
            <div className="shrink-0">
              <img
                src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className="text-black dark:text-white font-medium">
                Lori Ferguson
              </h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                example@gmail.com
              </p>
            </div>
          </div>
          <hr className="mt-4 mb-2 bg-slate-100/5" />
          <ul className="flex flex-col">
            <li>
              <a
                href="/"
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-blue-500/10 hover:text-blue-500 w-full inline-flex space-x-2 p-2 rounded-md"
              >
                <span>
                  <i className="fa fa-user fa-fw"></i>
                </span>
                <span>Edit Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-blue-500/10 hover:text-blue-500 w-full inline-flex space-x-2 p-2 rounded-md"
              >
                <span>
                  <i className="fa fa-gear fa-fw"></i>
                </span>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-blue-500/10 hover:text-blue-500 w-full inline-flex space-x-2 p-2 rounded-md"
              >
                <span>
                  <i className="fa fa-info-circle fa-fw"></i>
                </span>
                <span>Help</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-medium text-rose-500 bg-rose-500/10 w-full inline-flex space-x-2 p-2 rounded-md"
              >
                <span>
                  <i className="fa-solid fa-power-off fa-fw"></i>
                </span>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
          <hr className="mb-4 mt-2 bg-slate-100/5" />
          <div className="flex justify-between bg-slate-300/20 dark:bg-slate-100/10 dark:text-slate-400 p-1 rounded-sm">
            <button
              onClick={() => setTheme("light")}
              className={`${
                theme === "light" &&
                "text-black dark:text-slate-400 bg-white dark:bg-slate-100/50"
              } px-2 py-1.5 rounded-sm`}
            >
              <span>
                <i className="fa-solid fa-sun fa-fw fa-sm"></i>
              </span>
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`${
                theme === "dark" &&
                "text-black dark:text-slate-400 bg-white dark:bg-slate-600/50"
              } px-2 py-1.5 rounded-sm`}
            >
              <span>
                <i className="fa-solid fa-moon fa-fw fa-sm"></i>
              </span>
              <span>Dark</span>
            </button>
            <button
              onClick={() => setTheme("auto")}
              className={`${
                theme === "auto" &&
                "text-black dark:text-slate-400 bg-white dark:bg-slate-100/50"
              } px-2 py-1.5 rounded-sm`}
            >
              <span>
                <i className="fa-solid fa-circle-half-stroke fa-fw fa-sm"></i>
              </span>
              <span>Auto</span>
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
