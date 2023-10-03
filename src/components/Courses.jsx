import { useState } from "react";

const navLinks = [
  "Web Design",
  "Development",
  "Graphic Design",
  "Marketing",
  "Finance",
];

export default function Courses() {
  const [active, isActive] = useState(navLinks[0]);

  return (
    <section className="w-full mt-20">
      <div className="container-box max-w-screen-xl mx-auto px-4">
        <div className="heading text-center">
          <h1 className="text-5xl font-semibold mb-4">Most Popular Courses</h1>
          <p className="font-medium text-slate-400">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 items-center justify-center mt-10 bg-blue-500/20 py-2 rounded-md">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                className={
                  (active === link
                    ? "bg-blue-700 text-white "
                    : "text-blue-500 ") +
                  "px-4 py-3 font-medium rounded-md transition-colors duration-300"
                }
                onClick={() => isActive(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
