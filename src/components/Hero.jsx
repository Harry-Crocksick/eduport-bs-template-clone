export default function Hero() {
  return (
    <section className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap gap-y-28 items-center">
          {/* left section starts */}
          <div className="relative text-center basis-full md:text-left mdx:basis-[41.66%] xl:basis-1/2 pr-4">
            <figure className="fill-emerald-500 absolute right-60 -top-4">
              <svg width="22px" height="21px">
                <path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
              </svg>
            </figure>
            <figure className="fill-yellow-400 absolute bottom-5 right-10 -z-10">
              <svg width="42px" height="42px">
                <path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
              </svg>
            </figure>
            <h1 className="text-4xl mdx:text-5xl lg:text-[56px] leading-snug font-semibold dark:text-white">
              Limitless learning at your{" "}
              <span className="relative">
                fingertips
                <span className="absolute inset-0 -z-10">
                  <svg width="300px" height="62.1px" viewBox="0 0 366 62.1">
                    <path
                      className="fill-yellow-400"
                      d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"
                    ></path>
                  </svg>
                </span>
              </span>
            </h1>
            <p className="text-slate-500 font-medium mt-5">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>
            <ul className="flex flex-wrap gap-3 justify-center md:justify-start items-center mt-3 dark:text-white">
              <li>
                <span>
                  <i className="text-emerald-500 fa-solid fa-circle-check fa-fw"></i>
                </span>{" "}
                Learn with experts
              </li>
              <li>
                <span>
                  <i className="text-emerald-500 fa-solid fa-circle-check fa-fw"></i>
                </span>{" "}
                Get certified
              </li>
              <li>
                <span>
                  <i className="text-emerald-500 fa-solid fa-circle-check fa-fw"></i>
                </span>{" "}
                Get membership
              </li>
            </ul>
            <div className="btn-group mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4">
              <div className="shrink-0">
                <a
                  href="/"
                  className="bg-rose-500/10 text-rose-600 font-medium px-5 py-4 rounded-md"
                >
                  Get Started
                </a>
              </div>
              <a href="/" className="group flex items-center space-x-2">
                <div className="group-hover:scale-105 duration-300 ease-out bg-sky-400/50 rounded-full p-3 flex justify-center items-center">
                  <span className="inline-block bg-blue-600 rounded-full p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="stroke-white"
                      className="w-5 h-5"
                    >
                      <path
                        className="fill-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </span>
                </div>
                <span className="font-medium dark:text-white">Watch video</span>
              </a>
            </div>
          </div>
          {/* left section ends */}
          {/* right sectino starts */}
          <div className="relative flex-shrink-0 basis-full mdx:basis-[58.3333%] xl:basis-1/2 text-center">
            <div className="hidden md:block absolute top-32 right-0 p-4 rounded-lg bg-image-pattern">
              <p className="text-white font-medium mb-2">
                Our daily new students
              </p>
              <div className="flex -space-x-2 items-center">
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 drop-shadow-md border-white"
                />
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/02.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 drop-shadow-md border-white"
                />
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/03.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 drop-shadow-md border-white"
                />
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/05.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 drop-shadow-md border-white"
                />
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 drop-shadow-md border-white"
                />
              </div>
            </div>
            <figure className="absolute top-32 left-1/2 -translate-x-1/2 -z-5">
              <svg className="stroke-yellow-600">
                <path d="m22.3 57.6v0.1c-0.1 0.3 0.1 0.6 0.3 0.7 0.3 0.2 0.7 0.2 1 0.2h1.4c1.3 0.1 2.6 0.1 3.9 0.1 1.2 0 2.4 0 3.7 0.2s2.6 0.1 3.9 0.2c0.8 0.1 0.8-1.2 0-1.3-1.2-0.1-2.5 0-3.7-0.2-1.2-0.1-2.3-0.2-3.4-0.2-1.2 0-2.4 0-3.6-0.1-0.6 0-1.1-0.1-1.7-0.1-0.2 0-0.7 0.1-0.8 0 0.1 0.2 0.2 0.5 0.3 0.7v-0.1c0.2-0.7-1.1-1-1.3-0.2z"></path>
                <path d="m23.3 57.6c-0.1-0.5-0.2-0.8-0.1-1.3v-1.2-2.9c0-0.4-0.1-0.7-0.2-1.1 0-0.4 0-0.8-0.1-1.1-0.1-0.2-0.3-0.4-0.5-0.6-0.4-0.3-0.7-0.5-1-0.9-1.2-1.3-2.7-2.3-3.8-3.7s-1.8-2.9-2.2-4.6c-0.1-0.5-0.2-1-0.3-1.4s-0.2-0.8-0.2-1.3c0-0.8 0-1.7-0.1-2.5-0.1-0.7-0.3-1.5-0.2-2.3s0.5-1.8 0.9-2.5c0.8-1.5 1.5-3.1 2.6-4.4 0.5-0.6 0.9-1.3 1.5-1.8 0.6-0.6 1.3-1.2 1.9-1.8 0.7-0.5 1.4-1.1 2.2-1.5 0.7-0.3 1.4-0.4 2.1-0.6 0.7-0.1 1.3-0.2 2-0.4 0.9-0.3 1.7-0.6 2.7-0.8 0.9-0.2 1.8-0.1 2.8-0.1 1 0.1 2 0.1 2.9 0.4 0.8 0.2 1.6 0.3 2.3 0.6 0.8 0.3 1.5 0.8 2.2 1.4 1.4 1.2 2.7 2.6 3.8 4.1 0.5 0.7 1.1 1.5 1.5 2.2 0.4 0.8 0.8 1.7 1.2 2.5 0.7 1.7 0.7 3.6 0.7 5.5 0 0.9-0.1 1.8-0.3 2.6l-0.6 2.7c-0.5 1.8-1.7 3.5-3 4.9-0.6 0.7-1.5 1.3-2.3 1.8-0.4 0.3-0.9 0.5-1.3 0.7s-0.7 0.4-1.1 0.6c-0.7 0.2-1.7 0.3-2 1-0.1 0.4-0.1 0.7-0.1 1.1 0 0.5-0.1 1-0.2 1.4-0.1 0.9-0.2 1.9-0.3 2.8-0.1 0.5 0 1 0 1.5 0 0.3 0 0.9-0.1 1.2-0.4 0.7 0.7 1.4 1.1 0.7 0.3-0.5 0.3-1.4 0.3-2.1 0-1 0.1-1.9 0.2-2.9 0.1-0.9 0.3-1.8 0.3-2.7v-0.5c0-0.2-0.1-0.1 0.2-0.1 0.4 0 0.9-0.3 1.3-0.4 1.6-0.7 3.1-1.7 4.4-2.8 0.6-0.5 1.1-1.3 1.7-1.9 0.6-0.7 1-1.6 1.5-2.4 0.4-0.7 0.6-1.5 0.8-2.3 0.2-1 0.5-2 0.7-2.9 0.3-2 0.2-4-0.1-5.9-0.1-0.9-0.4-1.6-0.7-2.4-0.4-0.9-0.8-1.9-1.3-2.7-1-1.7-2.2-3.3-3.6-4.6-1.2-1.2-2.4-2.4-4-3.1-0.8-0.3-1.6-0.4-2.4-0.7-1-0.3-1.9-0.4-3-0.5-1-0.1-2-0.2-3 0-1 0.1-2 0.5-2.9 0.8-1.5 0.5-3 0.5-4.5 1.1-1.6 0.7-2.9 1.9-4.1 3-0.3 0.3-0.6 0.5-0.9 0.8s-0.5 0.7-0.7 1c-0.3 0.4-0.6 0.7-0.9 1-0.3 0.4-0.6 0.8-0.8 1.2-0.5 0.8-0.8 1.6-1.3 2.5-0.4 0.8-0.8 1.6-1.1 2.5-0.2 0.8-0.4 1.5-0.3 2.4s0.2 1.8 0.2 2.7c0 2 0.6 4 1.2 5.9 0.7 1.9 2 3.6 3.5 5 0.8 0.7 1.6 1.4 2.3 2.2l0.5 0.5c0.2 0.1 0.4 0.2 0.5 0.4 0.2 0.2 0.2 0.9 0.2 1.2 0.2 1.1 0.1 2.3 0.1 3.4v1.4c0 0.5 0.1 0.9 0.2 1.4 0.1 0.7 1.3 0.4 1.1-0.4z"></path>
                <path d="m27.1 56.7c0.1 0 0.1 0 0 0 0.4 0 0.7 0.1 1 0.1-0.2-0.4-0.1-1.1 0-1.5 0-0.8 0.1-1.7 0.1-2.5 0-1.6 0-3.2-0.1-4.8-0.2-3.1-0.1-6.3-0.5-9.4-0.1-0.7-0.2-1.3-0.4-2-0.1-0.7-0.2-1.3-0.6-1.9-0.7-0.9-1.9-1-2.9-0.6-1.1 0.5-1.8 1.4-1.6 2.7 0.1 0.6 0.2 1.2 0.6 1.7s0.9 1 1.4 1.4c2.1 1.7 5 2.5 7.7 2 1.4-0.3 2.8-0.8 4.2-1.3 1.3-0.5 2.3-1.2 3.2-2.2 0.7-0.8 1.3-2.3 1.1-3.3-0.3-1.1-1.5-1.8-2.6-1.9-1.3-0.1-2.3 0.4-3.1 1.3-0.9 1.1-1.3 2.3-1.7 3.6-0.4 1.6-0.3 3.3-0.3 4.9-0.1 1.7-0.1 3.4-0.1 5.1-0.1 1.8-0.2 3.5-0.4 5.3-0.1 0.9-0.1 1.7-0.1 2.6 0 0.7-0.1 1.5 0.1 2.2 0.2 0.8 1.5 0.5 1.3-0.3-0.1-0.4-0.1-1-0.1-1.5 0-0.6 0-1.3 0.1-1.9l0.3-3.9c0.2-2.5 0.2-5 0.3-7.5 0-1.2 0-2.5 0.1-3.7 0.1-0.6 0.3-1.2 0.5-1.8s0.3-1.1 0.6-1.5c0.6-0.9 1.3-1.6 2.4-1.5 0.5 0 1 0.2 1.3 0.5 0.4 0.5 0.2 1.1 0 1.6-0.3 1-1.3 1.9-2.2 2.4-1 0.5-2.2 0.8-3.2 1.1-1.3 0.4-2.5 0.8-3.8 0.6-1.1-0.1-2.3-0.5-3.3-1-0.4-0.2-0.9-0.5-1.3-0.8s-0.9-0.7-1.2-1.2c-0.2-0.4-0.4-1.1-0.3-1.6 0.2-0.5 0.7-0.8 1.2-0.9 1.3-0.3 1.3 1.2 1.5 2.1 0.3 1.3 0.4 2.5 0.4 3.8 0.2 2.9 0.3 5.8 0.4 8.7 0.1 1.5 0 2.9-0.1 4.4 0 0.9-0.4 2.4 0.2 3.3 0.2 0.3 0.6 0.4 0.9 0.2 0.2-0.1 0.3-0.2 0.4-0.4 0.1-0.7-1-1.4-1.4-0.7z"></path>
                <path d="m17.2 44.3c-0.4-0.3-0.4-0.9-0.7-1.2-0.4-0.5-0.8-1.1-1.1-1.7-0.6-1.2-0.9-2.6-1.1-4-0.1-0.6-0.3-1.2-0.3-1.8v-2.1c0-0.4-0.1-0.7-0.1-1.1 0-0.3 0.1-0.7 0.2-1 0.1-0.7 0.4-1.4 0.7-2.1 0.6-1.3 1.5-2.5 2.3-3.6 0.8-1 1.7-2 2.6-3s2.3-1.7 3.5-2.3c0.7-0.3 1.3-0.6 2-0.8 0.6-0.2 1.3-0.2 1.9-0.4 0.7-0.2 1.4-0.2 2.1-0.2 0.3 0 0.6-0.1 0.8-0.1 0.4-0.1 0.9 0 1.3 0 1.4 0 2.8 0.1 4.2 0.7 0.6 0.2 1.3 0.4 1.8 0.7 0.6 0.3 1.2 0.6 1.8 0.8 1 0.5 2 1.4 2.8 2.1 1 0.9 1.7 1.9 2.4 3 0.6 1 1.6 1.9 1.9 3 0.2 0.7 0.5 1.3 0.6 2.1 0.1 0.7 0 1.5 0 2.2 0 1.5 0 2.9-0.1 4.4-0.1 0.9-0.2 1.7-0.3 2.6-0.1 0.4-0.1 0.8-0.1 1.2s-0.2 0.7-0.3 1c0 1.3-1 2.6-2.1 3.6-0.5 0.4-1 0.8-1.6 1.1-0.6 0.2-1.2 0.6-1.8 0.9s-1.3 0.5-1.9 0.8-1 0.4-1.3 1c-0.3 0.8 0.9 1.1 1.3 0.3-0.1 0.2 0.1 0.1 0.2 0 0.1 0 0.2-0.1 0.3-0.2 0.3-0.1 0.6-0.2 0.9-0.4 0.6-0.3 1.3-0.5 1.9-0.8 0.5-0.3 1.1-0.5 1.6-0.9 0.6-0.4 1.1-0.7 1.6-1.2 1-0.9 1.9-2.2 2.4-3.4 0.2-0.6 0.5-1.2 0.6-1.8l0.3-2.4c0.2-1.6 0.3-3.3 0.3-4.9s0.1-3.1-0.4-4.7c-0.2-0.6-0.4-1.2-0.7-1.7-0.3-0.6-0.7-1.1-1.1-1.6-0.9-1.1-1.5-2.4-2.5-3.4-1.9-1.9-4-3.5-6.6-4.3-0.7-0.2-1.3-0.5-1.9-0.7-0.8-0.2-1.5-0.4-2.4-0.4-0.8 0-1.5-0.1-2.3-0.1-0.7 0-1.5 0.2-2.3 0.2-0.7 0.1-1.4 0.3-2.1 0.4-0.8 0.1-1.4 0.3-2.2 0.5-1.4 0.5-2.8 1.3-4.1 2.1-0.6 0.4-1 0.8-1.5 1.3-0.5 0.6-1 1.1-1.5 1.6-1 1.1-1.9 2.3-2.7 3.6-0.9 1.4-1.4 3-1.6 4.6-0.1 0.8 0 1.7 0.1 2.6 0 0.7-0.1 1.4 0 2.2 0.2 0.8 0.3 1.6 0.4 2.4 0.2 0.8 0.5 1.7 0.8 2.5 0.3 0.7 0.7 1.4 1.2 2 0.2 0.3 0.3 0.5 0.5 0.9 0.1 0.3 0.3 0.6 0.5 0.8 0.7 0.5 1.6-0.4 0.9-0.9z"></path>
                <path d="m22.8 62.6c1.1-0.4 2.2-0.4 3.4-0.5 1.1-0.1 2.2-0.1 3.3-0.1s2.2 0.1 3.2 0.3c1.1 0.2 2.2 0.5 3.3 0.4-0.2-0.4-0.3-0.7-0.5-1.1-0.2 0.3-0.7 0.3-1 0.5-0.6 0.2-1.1 0.4-1.7 0.5-1.2 0.4-2.5 0.7-3.7 1.1s-2.4 0.7-3.6 1.1c-0.6 0.2-1.2 0.3-1.8 0.5s-1.3 0.5-1.8 0.5c0.1 0.4 0.1 0.9 0.2 1.3 1.1-0.4 2.3-0.4 3.4-0.4 1.2-0.1 2.4-0.1 3.6-0.1s2.4 0.2 3.6 0.6c0.9 0.3 2.1 0.8 2.9 0.3 0.7-0.4 0.1-1.6-0.7-1.1-0.4 0.2-1.2-0.2-1.6-0.3-0.6-0.2-1.1-0.4-1.7-0.5-1.1-0.2-2.2-0.3-3.3-0.3s-2.3 0.1-3.4 0.1c-1.1 0.1-2.2 0.1-3.3 0.5-0.7 0.2-0.6 1.3 0.2 1.3 0.6 0 1.2-0.2 1.8-0.4s1.2-0.4 1.9-0.5c1.4-0.4 2.7-0.8 4.1-1.2 1.3-0.4 2.6-0.8 4-1.2 0.5-0.2 1.1-0.4 1.6-0.5 0.4-0.1 0.9-0.3 1.2-0.6 0.3-0.4 0.2-1.2-0.5-1.1-1.1 0.1-2.3-0.3-3.4-0.5s-2.2-0.3-3.4-0.3-2.4 0.1-3.6 0.2c-1.1 0.1-2.2 0.2-3.2 0.5-0.7 0-0.3 1.3 0.5 1z"></path>
                <path d="m22.8 57.6c-0.1-0.3-0.1-0.7-0.2-1s-0.1-0.7-0.1-1 0.1-0.7 0.1-1-0.1-0.7-0.1-1v-1c0-0.3-0.1-0.7-0.1-1v-1c0-0.1 0-0.3-0.1-0.4v-0.2 0c-0.4 0.1-0.8 0.1-1.2 0.2 0 0 0 0.1 0.1 0.1 0.4 0.7 1.5 0.1 1.1-0.7 0 0 0-0.1-0.1-0.1-0.3-0.5-1-0.3-1.2 0.2-0.1 0.3 0 0.5 0.1 0.8s0 0.6 0 1 0.1 0.7 0.1 1.1c0 0.3-0.1 0.7 0 1 0 0.3 0.1 0.7 0.1 1 0 0.4 0 0.8-0.1 1.2 0 0.4 0 0.7 0.1 1.1s0.1 0.8 0.2 1.1c0.3 0.8 1.6 0.4 1.3-0.4z"></path>
                <path d="m19.5 21.6c-1.6 1.9-3.2 3.9-4.4 6.1-1.1 2.2-1.8 4.6-2.1 7-0.3 2.5 0.3 4.9 1.2 7.3 0.9 2.3 2.4 4.1 4.3 5.5 0.7 0.5 1.3-0.6 0.7-1.1-0.9-0.7-1.7-1.4-2.4-2.3s-1.1-2-1.5-3.1c-0.8-2.1-1.1-4.3-0.8-6.5s1-4.4 2-6.3c1.1-2.1 2.6-3.9 4.1-5.7 0.3-0.6-0.6-1.5-1.1-0.9z"></path>
                <path d="m29.1 4.1c-0.1 0.5-0.1 1-0.1 1.4v1.4c0 1-0.1 2-0.2 3 0 0.3 0.3 0.6 0.6 0.6 0.4 0 0.6-0.3 0.6-0.6 0.1-1 0.2-1.9 0.2-2.9v-1.4c0-0.4 0-0.8 0.1-1.2 0.3-0.7-0.9-1.1-1.2-0.3z"></path>
                <path d="m2.2 15c0.5 0.2 1 0.6 1.4 1 0.5 0.4 1.1 0.8 1.6 1.2 1.2 0.8 2.4 1.7 3.5 2.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.2-1-2.5-1.9-3.8-2.8-0.6-0.4-1.1-0.8-1.6-1.2-0.5-0.5-1.1-0.9-1.7-1.1-0.3-0.1-0.7 0.1-0.8 0.5-0.1 0.2 0.1 0.5 0.5 0.7z"></path>
                <path d="m50.1 21.3c2.3-1.7 4.6-3.5 6.7-5.4 0.6-0.6-0.3-1.5-0.9-0.9-2.1 1.8-4.2 3.6-6.5 5.2-0.3 0.2-0.4 0.6-0.2 0.9 0.2 0.2 0.6 0.4 0.9 0.2z"></path>
                <path d="m30.3 2.6v-0.1c-0.4-0.1-0.9-0.1-1.3-0.2 0.1 1.5 0.2 2.9 0.1 4.4 0 1.5-0.1 2.9-0.1 4.4 0 0.8 1.3 0.8 1.3 0 0-1.5 0.1-2.9 0.2-4.4s0-2.9-0.1-4.4c-0.1-0.7-1.1-0.9-1.3-0.2v0.1c-0.3 0.9 1 1.2 1.2 0.4z"></path>
                <path d="m1.1 14.2c0 0.6 0.6 1.1 1.1 1.4s1.1 0.5 1.7 0.7h0.1c0.1 0-0.1-0.1 0 0 0.2 0.1 0.5 0.2 0.7 0.3 0.5 0.2 0.9 0.5 1.4 0.7 0.9 0.5 1.7 1 2.5 1.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.5-1.1-3.2-2-4.9-2.8-0.4-0.2-0.9-0.3-1.2-0.5-0.3-0.1-0.5-0.2-0.7-0.4l-0.2-0.2c0.1 0 0 0 0 0.1v0c0-0.8-1.3-0.8-1.4 0z"></path>
                <path d="m52.1 19.7 0.3-0.3c-0.1 0 0 0 0 0 0.1-0.1 0.3-0.2 0.4-0.3l0.9-0.6c0.6-0.4 1.2-0.8 1.8-1.1 0.3-0.2 0.4-0.6 0.2-0.9s-0.6-0.4-0.9-0.2c-1.3 0.7-2.6 1.5-3.7 2.5-0.3 0.2-0.2 0.7 0 0.9 0.4 0.3 0.7 0.3 1 0z"></path>
                <path d="m20.2 49.3c-0.1 0 0 0 0 0 0.1 0.2 0.1 0.3 0.1 0.4 0.1 0.3 0.2 0.6 0.4 0.9 0.3 0.7 0.5 1.5 0.7 2.3s0.2 1.7 0.3 2.5c0.1 0.7 0.1 1.6 0.5 2.2 0.4 0.7 1.6 0.1 1.1-0.7-0.2-0.3-0.2-0.6-0.2-1 0-0.5-0.1-0.9-0.1-1.4-0.1-0.9-0.2-1.8-0.4-2.7-0.2-0.8-0.5-1.5-0.8-2.3-0.2-0.5-0.3-1.2-0.8-1.4-0.3-0.1-0.7-0.1-0.9 0.2-0.3 0.4-0.3 0.9 0.1 1z"></path>
              </svg>
            </figure>
            <figure className="absolute top-0 right-8 p-3 rounded-md bg-white shadow-xl max-w-max">
              <img
                src="https://eduport.webestica.com/assets/images/client/angular.svg"
                alt="Angular"
              />
            </figure>
            <figure className="hidden sm:block absolute top-44 p-3 rounded-md bg-white shadow-xl max-w-max">
              <img
                src="https://eduport.webestica.com/assets/images/client/science.svg"
                alt="Atom"
              />
            </figure>
            <figure className="absolute top-80 right-2 p-3 rounded-md bg-white shadow-xl max-w-max">
              <img
                src="https://eduport.webestica.com/assets/images/client/figma.svg"
                alt="Figma"
              />
            </figure>
            <figure className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
              <svg width="550px" height="538px" viewBox="0 0 554 544">
                <path
                  className="fill-yellow-400"
                  d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"
                ></path>
              </svg>
            </figure>
            <div className="relative z-[20]">
              <img
                src="https://eduport.webestica.com/assets/images/element/07.png"
                alt="Model"
                className="mx-auto pointer-events-none"
              />
            </div>
            <div className="hidden absolute left-16 bottom-14 mdx:flex justify-center items-center px-3 py-4 backdrop-blur-sm shadow-lg border border-white rounded-md z-50">
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-300 rounded-full p-3">
                  <i className="fas fa-envelope fa-fw fa-lg text-white"></i>
                </span>
                <div>
                  <div className="flex justify-between items-center">
                    <h5 className="text-white font-semibold text-sm">
                      Congratulations
                    </h5>
                    <span>
                      <i className="fas fa-check-circle text-emerald-600"></i>
                    </span>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Your admission completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right section ends */}
        </div>
      </div>
    </section>
  );
}
