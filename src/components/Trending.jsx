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
      <div className="container-box max-w-screen-xl mx-auto">
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
          className="relative mySwiper p-4"
        >
          <span className="swiper-button-next text-white p-6 rounded-full bg-black/10 backdrop-blur-sm"></span>
          <span className="swiper-button-prev text-white p-6 rounded-full bg-black/10 backdrop-blur-sm"></span>
          {trendingCourses.map((course, idx) => (
            <SwiperSlide
              key={idx}
              className="group w-full h-full ring-1 ring-slate-900/10 rounded-lg overflow-hidden"
            >
              <div className="shrink-0">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-3 p-4 bg-white dark:bg-[#222]">
                <div className="flex items-center justify-between dark:text-white">
                  <div className="flex items-center space-x-2">
                    <span
                      className={
                        course.tags === "Digital" ||
                        course.tags === "Development"
                          ? "bg-blue-100 text-blue-600 font-medium text-sm px-1 py-0.5 rounded-md"
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
                <h3 className="text-xl font-semibold dark:text-white">
                  {course.title}
                </h3>
                <div className="flex items-center flex-auto justify-between">
                  <div className="flex items-center space-x-1">
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
                <hr />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2 dark:text-white">
                    <img
                      src={course.tutorImage}
                      alt={course.tutor}
                      className="w-10 h-10 rounded-md"
                      loading="lazy"
                    />
                    <span>{course.tutor}</span>
                  </div>
                  <span className="group-hover:hidden block text-2xl text-emerald-500 font-semibold">
                    {course.fee}
                  </span>
                  <div className="hidden group-hover:flex items-center space-x-2 px-3 py-2 rounded-md bg-emerald-500/10 text-emerald-500">
                    <i className="fa-solid fa-cart-shopping fa-fw"></i>
                    <span className="font-medium">Add to cart</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
