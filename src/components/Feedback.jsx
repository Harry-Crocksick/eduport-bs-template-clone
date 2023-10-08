export default function Feedback() {
  return (
    <section className="w-full mt-20 pb-14 md:pt-24 bg-[#F5F7F9] dark:bg-[#2A2C31]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid items-center gap-y-14 md:gap-4 grid-cols-6 lg:grid-cols-12">
          <div className="col-span-full lg:col-span-7 order-2 lg:order-none">
            {/* Upper section starts */}
            <div className="flex gap-8">
              {/* left section starts */}
              <div className="relative basis-full md:basis-[58%] mt-12">
                <figure className="fill-rose-600/20 absolute -top-[105px] -left-[105px] mb-3">
                  <svg width="210px" height="210px">
                    <path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
                  </svg>
                </figure>
                <div className="text-center bg-white dark:bg-[#222529] shadow-lg rounded-md p-5 isolate">
                  <div className="shrink-0 max-w-max mx-auto mb-3">
                    <img
                      src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                      alt="Avatar"
                      className="w-20 h-20 rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <blockquote>
                    <p className="text-slate-500 dark:text-slate-400">
                      <span>
                        <i className="fas fa-quote-left"></i>
                      </span>{" "}
                      Moonlight newspaper up its enjoyment agreeable depending.
                      Timed voice share led him to widen noisy young. At
                      weddings believed laughing{" "}
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
                  </blockquote>
                  <ul className="flex justify-center items-center space-x-2 my-3">
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half fa-fw fa-sm text-yellow-400"></i>
                    </li>
                  </ul>
                  <h5 className="font-semibold text-base dark:text-white">
                    Carolyn Ortiz
                  </h5>
                </div>
              </div>
              {/* Right section starts */}
              <div className="relative hidden md:block md:basis-[41%] mb-24 max-w-max p-6 bg-white dark:bg-[#222529] rounded-md shadow-lg">
                <div className="absolute -top-[25px] -right-[25px] bg-amber-400 p-4 rounded-full max-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <ul className="flex flex-col gap-2">
                  <li className="font-semibold dark:text-white">
                    100+ Verified Mentors
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <img
                        src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
                        alt="Avatar"
                        className="w-10 h-10 rounded-sm"
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <h5 className="font-semibold text-base dark:text-white">
                        Lori Stevens
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Tutor of Physics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <img
                        src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
                        alt="Avatar"
                        className="w-10 h-10 rounded-sm"
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <h5 className="font-semibold text-base dark:text-white">
                        Billy Vasquez
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Tutor of Chemistry
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <img
                        src="https://eduport.webestica.com/assets/images/avatar/02.jpg"
                        alt="Avatar"
                        className="w-10 h-10 rounded-sm"
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <h5 className="font-semibold text-base dark:text-white">
                        Larry Lawson
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Tutor of Technology
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Bottom section starts */}
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              {/* bottom left section starts */}
              <div className="relative hidden md:block md:basis-[58%] mt-12">
                <figure className="fill-rose-500 absolute -top-20 left-[70%]">
                  <svg enableBackground="new 0 0 160.7 159.8" height="180px">
                    <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2"></ellipse>
                    <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
                    <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z"></path>
                    <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
                    <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                    <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                    <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                    <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2"></ellipse>
                    <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                    <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2"></ellipse>
                    <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2"></ellipse>
                    <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
                    <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
                    <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
                    <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2"></ellipse>
                    <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                    <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                    <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                    <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                    <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                    <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
                    <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                    <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
                    <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z"></path>
                  </svg>
                </figure>
                <div className="max-w-max ml-auto bg-image-pattern-two text-center p-4 rounded-lg isolate">
                  <h3 className="font-semibold text-lg text-white">4.5/5.0</h3>
                  <ul className="flex justify-center items-center space-x-2">
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half fa-fw fa-sm text-yellow-400"></i>
                    </li>
                  </ul>
                  <p className="text-white font-medium">
                    Based on 3256 ratings
                  </p>
                </div>
              </div>
              {/* bottom left section ends */}
              {/* bottom right section starts */}
              <div className="basis-full md:basis-[41%] max-w-max mt-10 md:-mt-12">
                <div className="text-center p-4 bg-white dark:bg-[#222529] shadow-lg rounded-md isolate">
                  <div className="shrink-0 max-w-max mx-auto mb-3">
                    <img
                      src="https://eduport.webestica.com/assets/images/avatar/03.jpg"
                      alt="Avatar"
                      className="w-20 h-20 rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <blockquote>
                    <p className="text-slate-500 dark:text-slate-400">
                      <span>
                        <i className="fas fa-quote-left"></i>
                      </span>{" "}
                      At weddings believed laughing although the Moonlight
                      newspaper up its enjoyment agreeable depending.{" "}
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
                  </blockquote>
                  <ul className="flex justify-center items-center space-x-2 my-3">
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-fw fa-sm text-yellow-400"></i>
                    </li>
                  </ul>
                  <h5 className="font-semibold text-base dark:text-white">
                    Dennis Barrett
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 py-4 md:p-6 order-1 lg:order-none">
            <h1 className="text-3xl md:text-[40px] md:leading-snug font-bold dark:text-white">
              Some valuable feedback from our students
            </h1>
            <p className="my-5 text-slate-500 dark:text-slate-400 font-normal">
              Supposing so be resolving breakfast am or perfectly. It drew a
              hill from me. Valley by oh twenty direct me so. Departure
              defective arranging rapturous did believe him all had supported.
              Family months lasted simple set nature vulgar him. Picture for
              attempt joy excited ten carried manners talking how.
            </p>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md">
              View Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
