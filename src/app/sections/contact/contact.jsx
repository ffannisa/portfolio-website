import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#ffb3dc] flex justify-center items-center py-12 px-8"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
      <h1
        className="text-[1rem] md:text-[2rem] font-extrabold leading-none"
        style={{
          color: "#000000ff",
          fontFamily: "var(--font-anton), Impact, sans-serif", // Title font
          letterSpacing: "0px",
        }}
      >
        CONTACT DETAILS
      </h1>
        {/* LEFT: Contact Info */}
        <div className="text-center md:text-left" style={{ color: "black" }}>
          <p>310C Punggol Walk, 823310</p>
          <p className="mt-2">
            (65) 91302188 <br /> (62) 814 30235532
          </p>
        </div>

        {/* RIGHT: Icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap md:flex-nowrap">
          {/* GitHub */}
          <a
            href="https://github.com/ffannisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/images/Github_logo.png"
              alt="GitHub Logo"
              width={120}
              height={120}
              className="cursor-pointer w-16 sm:w-20 md:w-28 lg:w-32 h-auto transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/fannisa-fahmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/images/Linkedin_logo.png"
              alt="LinkedIn Logo"
              width={120}
              height={120}
              className="cursor-pointer w-16 sm:w-20 md:w-28 lg:w-32 h-auto transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
            />
          </a>

          {/* Email */}
          <a href="mailto:fannisafahmi@outlook.com" className="flex-shrink-0">
            <Image
              src="/images/Email_logo.png"
              alt="Email Logo"
              width={120}
              height={120}
              className="cursor-pointer w-16 sm:w-20 md:w-28 lg:w-32 h-auto transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
