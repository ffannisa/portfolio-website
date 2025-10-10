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
      className="h-auto bg-[#0a0a0a] flex justify-center items-center py-12"
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 p-6 items-stretch">
        {/* About Content on the LEFT */}
        <div className="flex flex-col md:flex-row items-center flex-[2] gap-8">
          {/* MUI Avatar for Image */}
          {/* <Avatar
            alt="About Me"
            src="/images/me.jpeg"
            sx={{
              width: 160,
              height: 160,
              marginBottom: "1.5rem",
              marginRight: { md: "1.5rem" }, // was marginLeft before
            }}
          /> */}

          {/* Content */}
          <div className="content text-center md:text-left flex-1">
            {/* <h2
              className="text-[1rem] md:text-[2rem] font-extrabold"
              style={{ color: "black",
                fontFamily: "var(--font-anton), Impact, sans-serif",
              }}
            >
              ABOUT ME
            </h2> */}
            <p className="mb-4" style={{ color: "white" }}>
              I am a recent graduate specialising in Business Analytics &
              Supply Chain. As a highly motivated data analyst and big data enthusiast, 
              I am committed to expanding my skills in this dynamic field. My passion
              lies in leveraging data-driven insights to drive strategic
              decision-making and business growth. With a strong background in
              data analytics, I have experience in a range of tools and
              technologies, including SQL, Python, and BI tools like Power BI.
            </p>
            <p className="mb-4" style={{ color: "white" }}>
              Outside of my academic life, I do several other commitments like volunteer
              activities and extracurricular activities where I can grow my
              communication and people-oriented skills. And in my free time I
              love doing Arts and Crafts!
            </p>
          </div>
        </div>

        {/* Skills Card on the RIGHT */}
        <Card
          sx={{
            flex: 1,
            backgroundColor: "#0a0a0a",
            boxShadow: 3,
            padding: "1rem",
            minWidth: "250px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#ffffffff",
                fontSize: "1.5rem", // smaller scale compared to title
                fontFamily: "'Anton', sans-serif", // same font as title
                fontWeight: 500, // ensure it's bold
                letterSpacing: "2px",
                lineHeight: 1,
              }}
            >
              MY SKILLS
            </Typography>
            {skills.map((group, index) => (
              <div key={index} className="mt-4 flex flex-wrap gap-2">
                {group.map((skill) => (
                  <Button
                    key={skill}
                    variant="contained"
                    size="small"
                    sx={{
                      fontFamily: "'Fira Code', monospace",
                      textTransform: "none",
                      backgroundColor: "#faa1d4",
                      "&:hover": { backgroundColor: "#000000ff" },
                    }}
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
