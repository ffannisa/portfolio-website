"use client";
import Link from "next/link"; // Import Link component
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  CardActions,
  CardActionArea,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const projects = [
    {
    title: "Predictive Forecast & Reporting",
    image: "/images/pic13.jpg",
    details: [
      "Collaborated with cross-functional teams to develop a predictive analytics dashboard integrating SAP and Salesforce data forperformance tracking, featuring a Python forecasting model, key metrics, and drill-down feature for in-depth data analysis",
      "Lead end-to-end data tasks which includes extracting data via SQL queries from Snowflake, identifying key metrics to guide CS team predictions, and building an interactive Power BI dashboard.",
    ],
    link: "https://capstoneshowcase.sutd.edu.sg/project/proj-s36-jci_predictive-forecast-and-reporting/",
  },
  {
    title: "Sales Analytics Dashboard",
    image: "/images/pic_01.jpg",
    details: [
      "Worked with my team to develop a sales visualization dashboard that includes a forecasting model, highlighting key metrics and drill-down function for detailed data analysis.",
      "Learned and used Highcharts library with Python, HTML, CSS, JavaScript, and Flask (backend) to serve as a centralized hub for data presentation and analysis.",
      "Used R for predictive data analytics to forecast sales orders and revenue, enabling accurate monthly performance tracking.",
    ],
    link: "/sections/project1",
  },
  {
    title: "Optimization: Diet Problem",
    image: "/images/pic_02_diet.png",
    details: [
      "Constructed an optimization model for the diet problem, taking into account factors like weight, height, and health risks such as diabetes and heart conditions.",
      "Utilized Python’s PuLP library along with Pandas and NumPy to implement the optimization model.",
    ],
    link: "https://github.com/ffannisa/Weekly-Diet-Planner",
  },
  //   {
  //     title: "Design and Prototype a Food Dehydrator",
  //     image: "/images/pic_03.jpg",
  //     details: [
  //       "Designed a solar oven with historical weather data, focusing on size, efficiency, and sustainability.",
  //       "Analyzed data using Python Matplotlib and Excel to visualize relationships and trends.",
  //       "Performed statistical analysis, including point estimates, confidence intervals, and hypothesis testing.",
  //     ],
  //     link: "#",
  //   },
  {
    title: "RShiny Resource Allocation Game: Housing Hustlers!",
    image: "/images/pic09.jpg",
    details: [
      "Created an RShiny game focused on resource allocation in urban planning, engaging players to construct structures like HDBs in land-scarce Singapore.",
      "Developed an immersive gaming interface using RShiny and CSS.",
      "Managed the database with SQL queries in DBeaver for seamless gameplay.",
    ],
    link: "/sections/project2",
  },
  {
    title: "Investment Portfolio Simulation",
    image: "/images/pic10.jpg",
    details: [
      "Developed an interactive investment simulation game designed to teach strategy creation with adaptive simulations for varying risk profiles and market conditions.",
      "Engineered front-end and back-end using HTML, JavaScript, and Bootstrap, contributing to project conceptualization.",
      "Implemented features like dynamic asset allocation, real-time market simulations, and adaptive strategy constraints.",
    ],
    link: "https://github.com/ffannisa/Investment-Portfolio-Simulation",
  },
  {
    title: "Image Segmentation - GMM Model",
    // image: "/images/pic11.png",
    image: "/images/traffic.gif",
    details: [
      "Leveraged machine learning with a Gaussian Mixture Model (GMM) for precise image segmentation.",
      "Utilized the EM algorithm for effective background subtraction of video frames and GrabCut for foreground extraction.",
      "Implemented using Jupyter Notebook with OpenCV and scikit-learn libraries.",
    ],
    link: "https://github.com/ffannisa/Image-Segmentation-using-GMM",
  },
  {
    title: "Hexabooth!",
    iframe: true,
    src: "https://sketchfab.com/models/e9e934c751d44a00a0fcda06929d5cac/embed?dnt=1",
    details: [
      "Designed a workspace and rest area using Twinmotion and SolidWorks, featuring a unique honeycomb structure to attract attention and engage users.",
      "Used Twinmotion for game visualization and SolidWorks for design.",
      "Built a prototype from scratch using woodworking techniques to bring the concept to life.",
    ],
    link: "http://asd.courses.sutd.edu.sg/dti-teams/hexabooth/",
  },
  {
    title: "Portfolio Website",
    image: "/images/pic12.png",
    details: [
      "Created a website portfolio hosted in vercel.",
      "Utilized Next.Js and Tailwind.css framework for easily editable and dynamic UI.",
    ],
    link: "https://github.com/ffannisa/portfolio-website",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      // className="h-auto bg-pink-100 flex flex-col items-center p-4"
      className="h-auto flex flex-col items-center p-4"
      style={{
        backgroundColor: "#f5f1e8",
        backgroundImage: "url('/images/paper_texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <h2
        className="cherry-bomb-one-regular text-2xl"
        style={{ color: "black" }}
      >
        My Projects
      </h2> */}
      <h1
        className="text-[2rem] md:text-[4rem] font-extrabold leading-none"
        style={{
          color: "#000000ff",
          fontFamily: "var(--font-anton), Impact, sans-serif", // Title font
          letterSpacing: "0px",
          lineHeight: 1.2,
        }}
      >
        MY PROJECTS
      </h1>
      <p className="mt-4" style={{ color: "black" }}>
        Being a highly motivated engineering student, I have been proactively
        seeking out opportunities to hone my analytical skills.
      </p>
      <p className="mt-4" style={{ color: "black" }}>
        Below are some projects I have done!
      </p>
      <div className="inner">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5em",
            justifyContent: "center",
            padding: { xs: "1em", sm: "2em", md: "4em" }, // Responsive padding
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: {
                  xs: "100%", // Full width on extra small screens
                  sm: "calc(100% - 1.5em)", // Slightly reduced for small screens
                  md: "calc(50% - 1.5em)", // Two cards in one row for medium screens
                  lg: "calc(33.33% - 1.5em)", // Three cards in one row for large screens
                },
                backgroundColor: "#0a0a0a",
                color: "#fff",
                borderRadius: "5px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardActionArea>
                {project.iframe ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%", // 16:9 aspect ratio
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      title={project.title}
                      src={project.src}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    ></iframe>
                  </Box>
                ) : (
                  <CardMedia
                    component="img"
                    // height="140"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: 200,
                      width: "100%",
                      borderRadius: "5px 5px 0 0",
                      objectFit: "cover",
                    }}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: "1rem",
                      mb: 1,
                      fontWeight: "bold",
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }}>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{
                            fontSize: "0.75rem",
                            fontFamily: "'Fira Code', monospace",
                          }}
                        >
                          {detail}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {project.link && (
                  <Link href={project.link} passHref target="_blank">
                    <Button
                      size="small"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginRight: "2px",
                        color: "#fff",
                        fontFamily: "'Fira Code', monospace",
                        "&:hover": { backgroundColor: "#edb9e2" },
                      }}
                    >
                      <span style={{ marginRight: "10px" }}>Learn More</span>
                      <ArrowCircleRightOutlinedIcon />
                    </Button>
                  </Link>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default Projects;
