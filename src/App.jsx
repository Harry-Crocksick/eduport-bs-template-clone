import React from "react";

function App() {
  return (
    <main className="w-full min-h-screen grid place-content-center">
      <section className="relative w-[550px] h-[538px] mx-auto">
        <img
          src="/hero.png"
          alt="Beautiful Girl"
          className="absolute -top-[113px] left-[75px] w-[500px] object-contain object-center z-10 [clip-path:circle(71.1%_at_45%_26%)]"
        />
        <svg
          width="550px"
          height="538px"
          viewBox="0 0 554 544"
          xml:space="preserve"
          className="relative -z-10"
        >
          <path
            className="fill-yellow-500/80"
            d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"
          ></path>
        </svg>
      </section>
    </main>
  );
}

export default App;
