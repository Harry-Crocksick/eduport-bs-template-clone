export default function Accomplishment() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-4 mdx:grid-cols-8 gap-4">
          <div className="flex space-x-4 justify-center items-center basis-full col-span-full md:col-span-2 bg-yellow-500/20 py-6 rounded-lg">
            <span>
              <i className="fas fa-tv fa-fw text-6xl text-yellow-500"></i>
            </span>
            <div>
              <h3 className="font-semibold dark:text-white text-xl">10K</h3>
              <p className="dark:text-slate-400 font-medium">Online courses</p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-center basis-full col-span-full md:col-span-2 py-6 rounded-lg bg-slate-500/20">
            <span>
              <i className="fas fa-user-tie fa-fw text-6xl text-slate-700"></i>
            </span>
            <div>
              <h3 className="font-semibold dark:text-white text-xl">200+</h3>
              <p className="dark:text-slate-400 font-medium">Expert Tutors</p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-center basis-full col-span-full md:col-span-2 py-6 rounded-lg bg-indigo-500/20">
            <span>
              <i className="fas fa-user-graduate fa-fw text-6xl text-indigo-900"></i>
            </span>
            <div>
              <h3 className="font-semibold dark:text-white text-xl">60K+</h3>
              <p className="dark:text-slate-400 font-medium">Online Students</p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-center basis-full col-span-full md:col-span-2 py-6 rounded-lg bg-emerald-500/20">
            <span>
              <i className="fa-solid fa-circle-check fa-fw text-6xl text-emerald-700"></i>
            </span>
            <div>
              <h3 className="font-semibold dark:text-white text-xl">6K+</h3>
              <p className="dark:text-slate-400 font-medium">
                Certified Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
