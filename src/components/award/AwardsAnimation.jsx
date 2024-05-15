import React from "react";

const AwardContnet = [
  {
    img: "gic",
    awardName: "Mobile Developer",
    awardFor: "Launch of the Apps Production.",
    delayAnimation: "0",
    link: "https://www.gicindonesia.com/",
  },
  {
    img: "telkomsel",
    awardName: "Best Deployment",
    awardFor: "Combining the reward feature on the Telkomsel apps as a Telkomsel reward.",
    delayAnimation: "200",
    link: "https://www.telkomsel.com/telkomsel-poin",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
            <div
                className="col-lg-4 m-15px-tb"
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
            >
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
              <div className="feature-box-02 d-flex align-items-center">
                <div className="icon">
                  <img src={`img/award/${val.img}.png`} alt="award"/>
                </div>
                <div className="media-body">
                  <h6>{val.awardName}</h6>
                  <p>{val.awardFor}</p>
                </div>
              </div>
              </a>
            </div>
            // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
