import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Frontend Mobile", "Frontend Web", "Backend"];
const tabListContent = [
  //   All
  {
    porftoliItems: [
      {
        img: "/img/portfolio/gic.png",
        width: 400,
        height: 900,
        title: "GIC Trade",
        subTitle: "Build Apps with GIC",
        alterText: "Mobile Application",
        portfolioLink:
            "https://apps.apple.com/id/app/gictrade-p2p-forex-platform/id1590171366?l=id",
      },

      {
        img: "/img/portfolio/fe-telkomsel.png",
        width: 800,
        height: 400,
        title: "Telkomsel Reward Portal",
        subTitle: "Build & Embedding App",
        alterText: "Business Card",
        portfolioLink:
            "https://www.telkomsel.com/telkomsel-poin/",
      },
      {
        img: "/img/portfolio/mobile-telkomsel.png",
        width: 800,
        height: 900,
        title: "UI Telkomsel Mobile",
        subTitle: "Slicing Ui Telkomsel",
        alterText: "Mobile Application",
        portfolioLink:
            "https://github.com/erman123456/myTelkomsel-UI",
      },

      {
        img: "/img/portfolio/threejs.png",
        width: 400,
        height: 250,
        title: "Three JS",
        subTitle: "Shopsystems",
        alterText: "Illustration",
        portfolioLink:
            "https://payever-task1.vercel.app/",
      },
      {
        img: "/img/portfolio/bca.png",
        width: 400,
        height: 900,
        title: "UI Instagram BCA",
        subTitle: "Slicing Ui BCA",
        alterText: "Mobile Application",
        portfolioLink:
            "https://github.com/erman123456/bca-ui",
      },
      {
        img: "/img/portfolio/instagram.png",
        width: 400,
        height: 900,
        title: "UI Instagram Mobile",
        subTitle: "Slicing Ui Instagram",
        alterText: "Mobile Application",
        portfolioLink:
            "https://drive.google.com/file/d/1wcHrwqgurSkjPwiXGGjKjZixGaylR_iF/view?usp=sharing",
      },
      {
        img: "/img/portfolio/sjt.png",
        width: 400,
        height: 200,
        title: "CMS System",
        subTitle: "Expeditions Business",
        alterText: "Business Card",
        portfolioLink:
            "https://sjtransindo.com/home",
      },
      {
        img: "/img/portfolio/swagger-telkomsel.jpg",
        width: 800,
        height: 400,
        title: "Telkomsel Reward",
        subTitle: "Build API Project",
        alterText: "Business Card",
        portfolioLink:
            "https://www.telkomsel.com/telkomsel-poin/",
      },  {
        img: "/img/portfolio/ekan.png",
        width: 800,
        height: 400,
        title: "API Application",
        subTitle: "E-Lang & E-Port App",
        alterText: "Business Card",
        portfolioLink:
            "https://ekan.id/",
      },
      {
        img: "/img/portfolio/bkd-pemko.png",
        width: 800,
        height: 400,
        title: "Simpeg BKD",
        subTitle: "System management Pemko Medan",
        alterText: "Business Card",
        portfolioLink:
            "https://bkpsdm.pemkomedan.go.id/simpeg/",
      },
    ],
  },
  //   Frontend Mobile
  {
    porftoliItems: [
      {
        img: "/img/portfolio/gic.png",
        width: 400,
        height: 900,
        title: "GIC Trade",
        subTitle: "Build Apps with GIC",
        alterText: "Mobile Application",
        portfolioLink:
          "https://apps.apple.com/id/app/gictrade-p2p-forex-platform/id1590171366?l=id",
      },
      {
        img: "/img/portfolio/mobile-telkomsel.png",
        width: 800,
        height: 900,
        title: "UI Telkomsel Mobile",
        subTitle: "Slicing Ui Telkomsel",
        alterText: "Mobile Application",
        portfolioLink:
            "https://github.com/erman123456/myTelkomsel-UI",
      },
      {
        img: "/img/portfolio/bca.png",
        width: 400,
        height: 900,
        title: "UI Instagram BCA",
        subTitle: "Slicing Ui BCA",
        alterText: "Mobile Application",
        portfolioLink:
            "https://github.com/erman123456/bca-ui",
      },
      {
        img: "/img/portfolio/instagram.png",
        width: 400,
        height: 900,
        title: "UI Instagram Mobile",
        subTitle: "Slicing Ui Instagram",
        alterText: "Mobile Application",
        portfolioLink:
            "https://drive.google.com/file/d/1wcHrwqgurSkjPwiXGGjKjZixGaylR_iF/view?usp=sharing",
      },
    ],
  },
  //   Frontend Web
  {
    porftoliItems: [
      {
        img: "/img/portfolio/fe-telkomsel.png",
        width: 800,
        height: 400,
        title: "Telkomsel Reward Portal",
        subTitle: "Build & Embedding App",
        alterText: "Business Card",
        portfolioLink:
            "https://www.telkomsel.com/telkomsel-poin/",
      },
      {
        img: "/img/portfolio/threejs.png",
        width: 400,
        height: 250,
        title: "Three JS",
        subTitle: "Shopsystems",
        alterText: "Illustration",
        portfolioLink:
          "https://payever-task1.vercel.app/",
      },

      {
        img: "/img/portfolio/sjt.png",
        width: 400,
        height: 200,
        title: "CMS System",
        subTitle: "Expeditions Business",
        alterText: "Business Card",
        portfolioLink:
          "https://sjtransindo.com/home",
      },
    ],
  },
  //   Backend
  {
    porftoliItems: [
      {
        img: "/img/portfolio/swagger-telkomsel.jpg",
        width: 800,
        height: 400,
        title: "Telkomsel Reward",
        subTitle: "Build API Project",
        alterText: "Business Card",
        portfolioLink:
          "https://www.telkomsel.com/telkomsel-poin/",
      },  {
        img: "/img/portfolio/ekan.png",
        width: 800,
        height: 400,
        title: "API Application",
        subTitle: "E-Lang & E-Port App",
        alterText: "Business Card",
        portfolioLink:
          "https://ekan.id/",
      },
      {
        img: "/img/portfolio/sjt.png",
        width: 800,
        height: 400,
        title: "Backend System",
        subTitle: "Expeditions Business",
        alterText: "Business Card",
        portfolioLink:
            "https://sjtransindo.com/hoe",
      },
      {
        img: "/img/portfolio/bkd-pemko.png",
        width: 800,
        height: 400,
        title: "Simpeg BKD",
        subTitle: "System management Pemko Medan",
        alterText: "Business Card",
        portfolioLink:
          "https://bkpsdm.pemkomedan.go.id/simpeg/",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
