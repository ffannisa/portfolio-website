import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-auto bg-yellow-100 flex justify-center items-center p-8"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Information */}
        <div className="text-center md:text-left" style={{ color: "black" }}>
          <h2 className="cherry-bomb-one-regular text-2xl mb-6">
            Contact Information
          </h2>
          <p>
            59 Changi South Ave 1,
            <br />
            485999 Singapore
          </p>
          <p className="mt-2">
            (65) 91302188 <br /> (62) 814 30235532
          </p>
          <p className="mt-2">
            <a href="mailto:fannisa_fahmi@mymail.sutd.edu.sg">
              fannisafahmi@outlook.com
            </a>
          </p>
          <p>
            <a href="mailto:fannisafahmi3@gmail.com">fannisafahmi3@gmail.com</a>
          </p>
          <p className="mt-2">
            <a
              href="https://linkedin.com/in/fannisa-fahmi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/fannisa-fahmi/
            </a>
          </p>
        </div>

        {/* Right: Useful Links */}
        <div className="flex flex-col items-center">
          {/* <h2 className="cherry-bomb-one-regular text-2xl">Useful Links</h2> */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/ffannisa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Image
                src="/images/github_logo.png"
                alt="GitHub Logo"
                width={220}
                height={220}
                className="cursor-pointer transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
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
                src="/images/linkedin_logo.png"
                alt="LinkedIn Logo"
                width={220}
                height={220}
                className="cursor-pointer transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
              />
            </a>
            {/* Email */}
            <a href="mailto:fannisafahmi@outlook.com" className="flex-shrink-0">
              <Image
                src="/images/email_logo.png"
                alt="Email Logo"
                width={220}
                height={220}
                className="cursor-pointer transition-transform transform hover:scale-110 hover:rotate-180 duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
