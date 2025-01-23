import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-screen bg-purple-100 flex justify-center items-center"
    >
      <div className="text-center space-y-4">
        <h2 className="cherry-bomb-one-regular text-2xl">My Experience</h2>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                Research & Development Intern
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <li>
                <a>
                  Supports the tech team as an R&D Intern, actively enhancing
                  codebase of assigned projects, addressing bugs, optimizing
                  functions, and implementing feature updates for improved
                  performance.
                </a>
              </li>
              <li>
                <a>
                  Leveraged machine learning model to refine and optimize
                  Inventory Optimization system for accurate inventory level
                  forecasting.
                </a>
              </li>
              <li>
                <a>
                  Conducted comprehensive data analysis and visualization to
                  evaluate model effectiveness and improvements, proficiently
                  utilizing tools like Matplotlib and Python to provide clear
                  comparative insights.
                </a>
              </li>
            </AccordionDetails>
            <AccordionActions>
              <Button>
                <FolderSharedRoundedIcon />
              </Button>
            </AccordionActions>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                Social Media Analtics Intern
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>
                <FolderSharedRoundedIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
