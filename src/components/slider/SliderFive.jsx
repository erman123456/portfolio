import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Erman Sibarani",
  description: `With a passion for crafting seamless digital experiences, 
  I am a seasoned full-stack developer proficient in both frontend and backend technologies. 
  I thrive in dynamic environments where I can leverage my expertise to design, 
  develop, and deploy innovative web applications that exceed expectations.`,
  btnText: "HIRE ME",
  btnText2: "My Work",
  btnText3: "Download CV",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-7 order-2 order-md-1">
              <div className="type-box">
                <h6>Hello there...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <p className="desc">{sliderContent.description}</p>

                <TextLoop>
                  <p className="loop-text lead">Fullstack Developer</p>
                  <p className="loop-text lead">Content Writer</p>
                  <p className="loop-text lead">Businessman</p>
                </TextLoop>{" "}
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline mr-4" href="#contactus">
                    {sliderContent.btnText}
                  </a>
                  <a className="px-btn btn-outline "
                     href="erman_cv.pdf"
                     download >
                    {sliderContent.btnText3}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-5 order-1 order-md-2">
              <img src="img/about/erman-bg.png" alt="about image"/>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
