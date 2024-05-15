import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Frontend Development",
    descriptions: `My journey into Frontend development began in 2016 as a freelance. 
    Since then, I've been on an exciting trajectory of learning and innovation, 
    staying abreast of the latest trends and technologies in the field. 
    From mastering the fundamentals of HTML, CSS, and JavaScript to diving deep into Frontend 
    frameworks and libraries like Flutter, reactJs, and VueJs I've cultivated 
    a versatile skill set that enables me to tackle projects of varying 
    complexities with confidence.`,
    delayAnimation: "",
  },
  {
    icon: "icon-laptop",
    title: "Backend Development",
    descriptions: `The same with Backend my experience started in 2016 as a freelance. 
    Since then, I've been on an exciting trajectory of learning and innovation as a backend developer also, 
    staying abreast of the latest trends and technologies in the field. 
    From mastering the fundamentals of PHP, Java, and NodeJs to diving deep into Backend 
    frameworks and libraries like Flutter, reactJs, and VueJs I've cultivated 
    a versatile skill set that enables me to tackle projects of varying 
    complexities with confidence.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-target",
    title: "DevOps",
    descriptions: `My journey into DevOps began work in Telkomsel as a vendor by MBI. Over the past 2 years, 
    I've immersed myself in the principles of DevOps culture, mastering a wide range of tools and technologies 
    to automate processes, increase efficiency, and enhance the reliability of software delivery pipelines. 
    From operating RedHat OS and building CI/CD pipelines to implementing infrastructure as code, 
    I've embraced every challenge as an opportunity to grow and contribute to the success of cross-functional teams.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
