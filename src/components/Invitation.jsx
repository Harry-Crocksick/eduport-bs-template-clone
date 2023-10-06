export default function Invitation() {
  return (
    <section className="mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative flex justify-center items-center bg-cyan-500/70 rounded-lg">
          <figure className="fill-white/20 absolute left-5 z-10">
            <svg width="141px" height="141px">
              <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"></path>
            </svg>
          </figure>
          <div className="relative grid grid-cols-6 gap-4 items-center px-10 py-6 mdx:px-20 mdx:py-12">
            <div className="col-span-full mdx:col-span-4">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Become an Instructor
              </h2>
              <p className="text-white">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished.
              </p>
            </div>
            <div className="col-span-full mdx:col-span-2 mdx:text-right">
              <a
                href="/"
                className="text-yellow-300 font-medium px-3 py-2 ring-1 ring-yellow-300 rounded-md hover:ring-0 hover:bg-yellow-400 hover:text-black transition-colors duration-300 ease-out"
              >
                Start Teaching Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
