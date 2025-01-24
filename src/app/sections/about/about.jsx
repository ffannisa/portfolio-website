import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// const skills = [
//   ["Python", "Excel", "Powerpoint", "SQL", "R", "RShiny", "HTML", "Javascript"],
//   ["Power BI", "Julia", "Highcharts Js", "Next.Js", "Tailwind CSS", "React"],
//   ["Google Cloud Platform", "Snowflake", "Git"],
// ];

const skills = [
  [
    "Python",
    "SQL",
    "R",
    "RShiny",
    "HTML",
    "Javascript",
    "Power BI",
    "Julia",
    "Powerpoint",
    "Excel",
    "Highcharts Js",
    "Next.Js",
    "Tailwind CSS",
    "React",
    "Google Cloud Platform",
    "Snowflake",
    "Git",
  ],
];

const About = () => {
  return (
    <section
      id="about"
      className="h-auto bg-blue-100 flex justify-center items-center py-12"
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 p-6 items-stretch">
        {/* Skills Card on the Left */}
        <Card
          sx={{
            flex: 1,
            backgroundColor: "white",
            boxShadow: 3,
            padding: "1rem",
            minWidth: "250px", // Ensure the card has a minimum width
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              className="text-2xl cherry-bomb-one-regular"
            >
              My Skills
            </Typography>
            {skills.map((group, index) => (
              <div key={index} className="mt-4 flex flex-wrap gap-2">
                {group.map((skill) => (
                  <Button
                    key={skill}
                    variant="contained"
                    size="small"
                    className="fira-code-regular"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#4298f5",
                      "&:hover": { backgroundColor: "#2563eb" },
                    }}
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* About Content on the Right */}
        <div className="flex flex-col md:flex-row-reverse items-center flex-[2] gap-8">
          {/* MUI Avatar for Image */}
          <Avatar
            alt="About Me"
            src="/images/me.jpeg"
            sx={{
              width: 160, // Adjust size for larger avatar
              height: 160,
              marginBottom: "1.5rem", // Margin for spacing
              marginLeft: { md: "1.5rem" }, // Add spacing for larger screens
            }}
          />

          {/* Content */}
          <div className="content text-center md:text-left flex-1">
            <h2
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              About Me
            </h2>
            <p className="mb-4" style={{ color: "black" }}>
              I am currently a student specialising in Business Analytics &
              Operations Research as well as Supply Chain & Logistics. As a
              highly motivated data analyst and big data enthusiast, I am
              committed to expanding my skills in this dynamic field. My passion
              lies in leveraging data-driven insights to drive strategic
              decision-making and business growth. With a strong background in
              data analytics, I have experience in a range of tools and
              technologies, including SQL, Python, and BI tools like Power BI.
            </p>
            <p className="mb-4" style={{ color: "black" }}>
              Outside of school, I do several other commitments like volunteer
              activities and extracurricular activities where I can grow my
              communication and people-oriented skills. And in my free time I
              love doing Arts and Crafts!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
