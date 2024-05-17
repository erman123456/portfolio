import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const AboutThree = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/erman.jpeg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Fullstack Developer</p>
                  <h3>Erman Sibarani</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Freelancer Fullstack Developer with over 8 years of
                    experience. I'm from Medan. I code and create multi devices
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                    <b>Frontend</b>
                  <p>
                    I have experience with Flutter, ReactJS, NextJS, and VueJS
                  </p>
                    <b>Backend</b>
                  <p>
                    I have experience with NodeJs, NestJs, Fastify, NxMonorepo, Springboot, and Laravel
                  </p>
                    <b>DevOps</b>
                  <p>
                    I have experience with RetHat, Docker & Kubernetes
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Erman Sibarani</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>15th August 1996</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>{new Date().getFullYear() - 1996} years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Jln. Krakatau Ujung, Medan, Indonesia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+62) 812 6813 7084</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>ermanjobs15@gmail.com</span>
                        </li>
                        <li>
                          <label>Github: </label>
                          <span>erman123456</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutThree;
