import React from "react";
import { trendingCourses } from "./utils/courseData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Trending() {
  return (
    <section className="my-20">
      <div className="max-w-screen-xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper group flex flex-col h-auto relative p-4"
        >
          <span className="swiper-button-next after:content-[''] group-hover:translate-x-0 translate-x-[150%] transition-transform duration-300 ease-out text-white p-6 rounded-full bg-black/30 backdrop-blur-sm">
            <i className="fa-solid fa-chevron-right fa-fw fa-lg font-semibold"></i>
          </span>
          <span className="swiper-button-prev after:content-[''] group-hover:translate-x-0 -translate-x-[150%] transition-transform duration-300 ease-out text-white p-6 rounded-full bg-black/10 backdrop-blur-sm">
            <i className="fa-solid fa-chevron-left fa-fw fa-lg font-semibold"></i>
          </span>
          {trendingCourses.map((course, idx) => (
            <SwiperSlide
              key={idx}
              className="group/card flex flex-col ring-1 ring-slate-900/10 rounded-lg h-auto overflow-hidden"
            >
              <div className="shrink-0">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Tag section starts */}
              <div className="flex-auto p-4 bg-white dark:bg-[#222]">
                <div className="flex items-center justify-between dark:text-white">
                  <div className="flex items-center space-x-2">
                    <span
                      className={
                        course.tags === "Digital" ||
                        course.tags === "Development"
                          ? "bg-blue-500/20 text-blue-500 font-medium text-sm px-1 py-0.5 rounded-md"
                          : ""
                      }
                    >
                      {course.tags}
                    </span>
                    <span className="bg-black text-white font-medium text-sm px-1 py-0.5 rounded-md">
                      {course.difficulty}
                    </span>
                  </div>
                  <span>
                    <i className="fa-regular fa-bookmark fa-fw fa-md"></i>
                  </span>
                </div>
                {/* Tags section ends */}
                <h3 className="text-xl font-semibold dark:text-white my-3">
                  {course.title}
                </h3>
                {/* Course section starts */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 mb-2">
                    <span className="dark:text-white">{course.rating}</span>
                    <span>
                      <i className="fa-solid fa-star fa-fw text-yellow-400"></i>
                    </span>
                    <small className="text-slate-500">({course.raters})</small>
                  </div>
                  <div className="dark:text-white">
                    <span>
                      {course.students}{" "}
                      <small className="text-slate-500">(Student)</small>
                    </span>
                  </div>
                </div>
                {/* Course section ends */}
                {/* Course duration starts */}
                <div className="flex items-center space-x-4">
                  <span className="dark:text-white">
                    <i className="fa-regular fa-clock fa-fw text-rose-600"></i>{" "}
                    {course.duration}
                  </span>
                  <span className="dark:text-white">
                    <i className="fa-solid fa-table fa-fw text-orange-500"></i>{" "}
                    {course.lectures} lectures
                  </span>
                </div>
                {/* Course duration ends */}
              </div>
              <hr className="mx-4" />
              {/* Tutor section starts */}
              <div className="flex items-center justify-between py-3 px-4 dark:bg-[#222]">
                <div className="flex items-center space-x-2 dark:text-white">
                  <img
                    src={course.tutorImage}
                    alt={course.tutor}
                    className="w-8 h-8 rounded-md"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium">{course.tutor}</span>
                </div>
                <span className="group-hover/card:hidden block text-xl text-emerald-500 font-semibold">
                  {course.fee}
                </span>
                <div className="hidden group-hover/card:flex items-center space-x-2 px-0.5 sm:px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-500">
                  <i className="fa-solid fa-cart-shopping fa-fw fa-sm"></i>
                  <span className="font-medium text-sm">Add to cart</span>
                </div>
              </div>
              {/* Tutor section ends */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
