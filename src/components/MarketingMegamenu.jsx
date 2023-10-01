import { certificate, marketingDegree, getStarted } from "./utils/navData";
import { Link } from "./Navigation";
import { SubLink } from "./Megamenu";

export default function MarketingMegamenu() {
  return (
    <nav className="w-[650px] xl:w-[992px] group-hover/market:block hidden absolute left-full -top-14 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-lg dark:bg-[#222]">
      <section className="w-full py-6 px-4 grid grid-cols-4 xl:grid-cols-6 gap-3">
        {/* get started starts */}
        <div className="col-span-2">
          <h3 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Get started
          </h3>
          <ul className="mt-4">
            {getStarted.map((link, idx) => (
              <Link key={idx} link={link} />
            ))}
          </ul>
        </div>
        {/* get started ends */}
        {/* marketing degree starts */}
        <div className="col-span-2">
          <h3 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Degree
          </h3>
          <ul className="mt-4">
            {marketingDegree.map((link, idx) => (
              <SubLink key={idx} sublink={link} />
            ))}
          </ul>
        </div>
        {/* marketing degree ends */}
        {/* certificate starts */}
        <div className="col-span-2">
          <h3 className="font-medium text-black dark:text-white pb-2 border-b border-slate-200">
            Certificate
          </h3>
          <ul className="mt-4">
            {certificate.map((link, idx) => (
              <SubLink key={idx} sublink={link} />
            ))}
          </ul>
        </div>
        {/* certificate ends */}
      </section>
      <section className="w-full h-full bg-image px-4 py-10 leading-loose">
        <h3 className="text-white text-xl font-semibold">
          Access 25k Online courses from 120 institutions, Start today!
        </h3>
        <p className="text-slate-400 font-medium text-sm">
          Here is the description of premium features which will allow users to
          get benefits and save a lot of money
        </p>
        <div className="mt-4">
          <a
            href="/"
            className="text-white font-medium p-2 bg-slate-900 rounded-md"
          >
            Purchase Premium
          </a>
        </div>
      </section>
    </nav>
  );
}
