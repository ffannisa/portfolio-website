import Image from "next/image";
import Navbar_Proj from "@/app/components/navbar-projects";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const Project2 = () => {
  return (
    <div className="bg-pink-100 h-auto">
      {/* Navbar */}
      <Navbar_Proj />

      {/* Page Wrapper */}
      <div id="page-wrapper" className="pt-16">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-5xl mx-auto p-6">
            <h2 className="cherry-bomb-one-regular text-2xl text-gray-900">
              RShiny Game: Housing Hustlers!
            </h2>
            <ul className="flex space-x-4 mt-4">
              <li>
                <a
                  href="/files/RShiny_slides.pdf"
                  target="_blank"
                  className="text-white font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105 bg-black"
                >
                  <ArticleOutlinedIcon className="mr-2" />
                  Slides
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ffannisa/RShiny-Housing-Allocation"
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
          {/* Game Description */}
          <section>
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              A little about our game!
            </h3>
            <p style={{ color: "black" }}>
              Our game "Housing Hustlers" thrusts players into making crucial
              urban planning decisions as trade-offs are made in the pursuit of
              developing all three building structures whilst operating within
              budget, land, and lease constraints to achieve overall happiness.
            </p>
          </section>

          {/* Game Overview */}
          <section className="mt-8">
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Game Overview
            </h3>
            <div className="flex flex-col gap-4">
              <Image
                src="/images/idefo.jpg"
                alt="Game Overview Diagram"
                width={800}
                height={400}
                className="mx-auto block rounded"
              />
              <Image
                src="/images/game screen.jpg"
                alt="Game Screen"
                width={800}
                height={400}
                className="mx-auto block rounded"
              />
            </div>
          </section>

          {/* Video Section */}
          <section className="mt-8">
            <h3
              className="cherry-bomb-one-regular text-2xl mb-4"
              style={{ color: "black" }}
            >
              Click to view video!
            </h3>
            <div className="relative" id="video-container">
              <iframe
                id="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0NUa8OS9IJI?si=o-nVjUd6gVgDeZDa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-auto block rounded"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project2;
