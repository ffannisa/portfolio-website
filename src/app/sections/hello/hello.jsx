import React from "react";
import Button from "@mui/material/Button";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const Hello = () => {
  // Array to hold multiple rose positions
  const roses = Array.from({ length: 50 }, () => ({
    top: `${Math.random() * 90}vh`, // Restrict position to 95% of viewport to prevent overflow
    left: `${Math.random() * 90}vw`,
  }));

  return (
    <section
      id="top"
      className="min-h-screen bg-pink-100 flex justify-center items-center"
    >
      {/* Roses scattered as background */}
      {roses.map((position, index) => (
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
      ))}

      {/* Centered content */}
      <div className="text-center space-y-4">
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
          Big Data Enthusiast | Undergraduate Student | Senior in SUTD
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
};

export default Hello;
