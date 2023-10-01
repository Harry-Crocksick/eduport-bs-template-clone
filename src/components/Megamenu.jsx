import { getStarted, degree, certificate } from "./utils/navData";
import { Link } from "./Navigation";

export function SubLink({ sublink }) {
  return (
    <li className="px-4 py-5 text-slate-400 hover:bg-sky-400/10 rounded-lg transition-colors duration-300">
      <a href="/" className="inline-flex space-x-2 items-center">
        {sublink.icon && (
          <div className="shrink-0">
            {" "}
            <img
              src={sublink.icon}
              alt=""
              className="w-12 h-auto"
              loading="lazy"
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-sm text-black dark:text-white">
            {sublink.heading}
          </h4>
          <p className="text-sm font-medium">{sublink.description}</p>
        </div>
      </a>
    </li>
  );
}

export default function Megamenu() {
  return (
    <nav className="hidden group-hover:block absolute top-full -translate-x-1/2 left-1/2 w-[768px] xl:w-[1280px] shadow-lg ring-1 ring-slate-900/5 rounded-lg z-10 bg-white dark:bg-[#222]">
      <section className="w-full grid gap-6 grid-cols-4 xl:grid-cols-8 p-4">
        {/* Get started starts */}
        <div className="col-span-2">
          <h4 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Get started
          </h4>
          <ul className="mt-4">
            {getStarted.map((link, idx) => (
              <Link key={idx} link={link} />
            ))}
          </ul>
        </div>
        {/* Get started ends */}
        {/* Degree starts */}
        <div className="col-span-2">
          <h4 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Degree
          </h4>
          <ul className="mt-4">
            {degree.map((link, idx) => (
              <SubLink key={idx} sublink={link} />
            ))}
          </ul>
        </div>
        {/* Degree ends */}
        {/* Certificate starts */}
        <div className="col-span-2">
          <h4 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Certificate
          </h4>
          <ul className="mt-4">
            {certificate.map((link, idx) => (
              <SubLink key={idx} sublink={link} />
            ))}
          </ul>
        </div>
        {/* Certificate ends */}
        {/* Downnload section starts */}
        <div className="col-span-2">
          <h4 className="font-medium text-black dark:text-white pb-2 mb-4 border-b border-slate-200">
            Download Eduport
          </h4>
          <div>
            <img
              src="https://eduport.webestica.com/assets/images/element/14.svg"
              alt="Download Hero Image"
            />
          </div>
          {/* download icons section starts */}
          <div className="flex space-x-2 items-center mt-6">
            <div className="shrink-0">
              <a href="/">
                <img
                  src="https://eduport.webestica.com/assets/images/client/google-play.svg"
                  alt="Google Play"
                  className="w-36 h-auto"
                />
              </a>
            </div>
            <div className="shrink-0">
              <a href="/">
                <img
                  src="https://eduport.webestica.com/assets/images/client/app-store.svg"
                  alt="App Store"
                  className="w-36 h-auto"
                />
              </a>
            </div>
          </div>
          {/* download icons section ends */}
        </div>
        {/* Download section ends */}
        <div className="flex items-center space-x-4 col-span-full bg-emerald-200 p-4 rounded-md border border-emerald-300">
          <div className="shrink-0">
            <img
              src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
              alt="Avatar"
              className="w-12 h-auto rounded-full"
            />
          </div>
          <p className="text-emerald-600">
            The personality development class starts at 2:00 pm, click to{" "}
            <a href="/" className="font-semibold text-emerald-600">
              Join Now
            </a>
          </p>
        </div>
      </section>
    </nav>
  );
}
