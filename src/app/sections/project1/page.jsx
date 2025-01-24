import Image from "next/image";
import Navbar_Proj from "@/app/components/navbar-projects";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const Project1 = () => {
  return (
    <div className="bg-pink-100 min-h-screen">
      {/* Navbar */}
      <Navbar_Proj />

      {/* Page Wrapper */}
      <div id="page-wrapper" className="pt-16">
        {" "}
        {/* Ensure navbar space */}
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-5xl mx-auto p-6">
            <h2
              className="cherry-bomb-one-regular text-2xl text-gray-900"
              style={{ color: "black" }}
            >
              Sales Analytics Dashboard x TSH Synergy
            </h2>
            <ul className="flex space-x-4 mt-4">
              <li>
                <a
                  href="/files/poster_01.pdf"
                  target="_blank"
                  className="text-white font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105 bg-black"
                >
                  <ArticleOutlinedIcon className="mr-2" />
                  Poster
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ffannisa/Sales-Dashboard-DBA-Project"
                  target="_blank"
                  className="text-white font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105 bg-black"
                >
                  <CodeOutlinedIcon className="mr-2" />
                  Github: Code
                </a>
              </li>
            </ul>
          </div>
        </header>
        {/* Content */}
        <div className="max-w-5xl mx-auto p-6 bg-white shadow mt-4">
          {/* Objective */}
          <section>
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Objective
            </h3>
            <p style={{ color: "black" }}>
              The project objective is to develop a sales visualization
              dashboard that includes a forecasting model, highlighting key
              metrics and drill-down function for detailed data analysis.
            </p>
          </section>

          {/* Project Overview */}
          <section className="mt-8">
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Project Overview
            </h3>
            <p style={{ color: "black" }}>
              The project main deliverable is to adopt a data-driven approach to
              automate TSH’s business decision-making. This is done by using
              predictive data analytics in R to forecast sales orders and
              revenue data as well as using visualization methodologies in
              Highcharts to generate necessary graphs for weekly meetings. This
              allows for a more efficient and focused sales review meeting.
            </p>
            <p className="mt-4" style={{ color: "black" }}>
              By integrating Highcharts and R using HTML, CSS, JavaScript, and
              Flask for the backend, a comprehensive dashboard was developed
              that serves as a centralized hub for data presentation and data
              analysis. Leveraging technology, the manual work has been
              streamlined requiring two simple steps: uploading the CSV file and
              clicking on the run R script button on the dashboard webpage.
            </p>
            <p className="mt-4" style={{ color: "black" }}>
              Through data analytics of TSH’s revenue and sales order, TSH can
              accurately track their monthly performance, identify, and maintain
              relationships with high-value customers.
            </p>
          </section>

          {/* Methodology */}
          <section className="mt-8">
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Methodology
            </h3>
            <Image
              src="/images/method_01.png"
              alt="Methodology Diagram"
              width={800}
              height={400}
              className="mx-auto block rounded"
            />
          </section>

          {/* Results */}
          <section className="mt-8">
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Results: Dashboard Page
            </h3>
            <Image
              src="/images/overview_01.png"
              alt="Dashboard Overview"
              width={800}
              height={400}
              className="mx-auto block rounded"
            />
            <p className="mt-4" style={{ color: "black" }}>
              Due to the company's and university's policy, the code is not
              uploaded. Attached on the header is the poster and the charting
              code for view.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project1;
