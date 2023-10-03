import { useState } from "react";
import { popularCourses } from "./utils/navData";

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
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4 dark:text-white">
            Most Popular Courses
          </h1>
          <p className="font-medium text-slate-400">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 items-center justify-center mt-10 bg-blue-500/20 py-2 mx-4 rounded-md">
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
        <div className="big-container mt-5 grid grid-cols-4 lg:grid-cols-8 gap-y-8">
          {popularCourses.map((course, idx) => (
            <div
              key={course.title}
              className="card-container col-span-full sm:col-span-2 px-4 min-h-full"
            >
              <div className="card h-full rounded-lg dark:shadow-none shadow-2xl overflow-hidden">
                <div className="shrink-0">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    loading="lazy"
                  />
                </div>
                <div className="content-container flex flex-col p-4 bg-white dark:bg-[#222] h-full">
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        course.difficulty === "Beginner"
                          ? "bg-emerald-500/10 text-emerald-500 text-sm px-2 py-1 rounded-sm"
                          : "bg-indigo-500/10 text-indigo-500 text-sm px-2 py-1 rounded-sm"
                      }
                    >
                      {course.difficulty}
                    </span>
                    <span>
                      {idx % 2 !== 0 ? (
                        <i className="fa-solid fa-heart fa-fw fa-lg text-rose-500"></i>
                      ) : (
                        <i className="fa-regular fa-heart fa-fw fa-lg text-rose-500"></i>
                      )}
                    </span>
                  </div>
                  <h3 className="font-medium text-xl mb-2 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 mb-2">{course.description}</p>
                  <ul className="flex items-center space-x-1 [&>li>i]:text-yellow-400">
                    <li>
                      <i className="fa-solid fa-star fa-fw fa-sm"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star fa-fw fa-sm"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star fa-fw fa-sm"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star fa-fw fa-sm"></i>
                    </li>
                    {course.rating !== 5.0 ? (
                      <li>
                        <i className="fa-regular fa-star fa-fw fa-sm"></i>
                      </li>
                    ) : (
                      <li>
                        <i className="fa-solid fa-star fa-fw fa-sm"></i>
                      </li>
                    )}
                    <span className="dark:text-white">{course.rating}/5.0</span>
                  </ul>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between dark:text-white">
                    <div className="flex items-center space-x-2">
                      <span>
                        <i className="fa-regular fa-clock fa-fw fa-md text-rose-500"></i>
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>
                        <i className="fa-solid fa-table fa-fw fa-md text-orange-400"></i>
                      </span>
                      <span>{course.lectures}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
