"use client";

import React from "react";
import Button from "@mui/material/Button";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { motion } from "framer-motion"; // For floating animation

// const Hello = () => {
  // // Array to hold multiple rose positions
  // const roses = Array.from({ length: 50 }, () => ({
  //   top: `${Math.random() * 90}vh`, // Restrict position to 95% of viewport to prevent overflow
  //   left: `${Math.random() * 90}vw`,
  // }));

  // return (
  //   <section
  //     id="top"
  //     className="min-h-screen bg-pink-100 flex justify-center items-center"
  //   >
      {/* Roses scattered as background */}
      {/* {roses.map((position, index) => (
        <img
          key={index}
          src="/images/roses.png"
          alt="Rose"
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            width: "40px", // Adjust size
            height: "40px",
            opacity: 0.5, // Make translucent
            zIndex: 0, // Ensure roses are beneath the text
          }}
        />
      ))} */}

      {/* Centered content */}
      {/* <div className="text-center space-y-4">
        <p
          className="cherry-bomb-one-regular text-2xl"
          style={{ color: "black" }}
        >
          Hi! Welcome to my website portfolio!
        </p>
        <h1
          style={{ color: "#ff69b4" }}
          className="cherry-bomb-one-regular text-[4rem] md:text-[6rem]"
        >
          Fannisa Fahmi
        </h1>
        <p className="text-sm md:text-base" style={{ color: "black" }}>
          | Big Data Enthusiast | Business Analytics Graduate |
        </p>
        <Button
          href="./files/FannisaFahmi_Resume.pdf"
          target="_blank"
          sx={{
            color: "white", // Text color
            fontWeight: "bold", // Font weight
            borderRadius: "9999px", // Fully rounded corners (same as rounded-full)
            px: 3, // Padding left and right
            py: 1.5, // Padding top and bottom
            backgroundColor: "black", // Background color
            transition: "all 0.3s ease", // Smooth transition for hover effects
            "&:hover": {
              backgroundColor: "#ff69b4", // Hover background color
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect on hover
              transform: "scale(1.05)", // Slight zoom effect on hover
            },
          }}
        >
          <AttachFileRoundedIcon className="mr-2" />
          View my Resume/CV
        </Button>
      </div>
    </section>
  );
}; */}

const Hello = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#f5f1e8",
        backgroundImage: "url('/images/paper_texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 md:w-10/12 mx-auto space-y-10 md:space-y-0">
        {/* LEFT SECTION */}
        {/* <div className="flex flex-col items-start text-left z-10 ml-[-1rem] mt-[-3rem] space-y-2"> */}
        <div className="flex flex-col items-start space-y-4 text-left z-10">
          {/* Title */}
          <h1
            className="text-[4rem] md:text-[8rem] font-extrabold leading-none"
            style={{
              color: "#faa1d4",
              fontFamily: "var(--font-anton), Impact, sans-serif", // Title font
              letterSpacing: "0px",
              lineHeight: 0.75,
            }}
          >
            FANNISA <br /> FAHMI
          </h1>

          {/* Caption */}
          <p
            className="text-sm md:text-base"
            style={{ color: "black" }}
          >
            | Big Data Enthusiast | Business Analytics Graduate |
          </p>

          {/* Resume Button */}
          <Button
            href="./files/FannisaFahmi_Resume.pdf"
            target="_blank"
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "9999px",
              px: 3,
              py: 1.5,
              backgroundColor: "black",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#faa1d4",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transform: "scale(1.05)",
              },
            }}
          >
            <AttachFileRoundedIcon className="mr-2" />
            View my Resume/CV
          </Button>
        </div>

        {/* RIGHT SECTION – Floating image */}
        <motion.div
          // className="relative w-[280px] md:w-[400px]"
          className="absolute bottom-0 right-0 w-[200px] sm:w-[240px] md:w-[300px] lg:w-[420px]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { duration: 0.4 },
          }}
        >
          <img
            src="/images/fannisa_cutout.png"
            alt="Fannisa Fahmi"
            className="w-full object-contain z-0"
            style={{
              filter: "grayscale(100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hello;
