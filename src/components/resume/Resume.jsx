import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [

    {
        jobPosition: `Sr. Backend Developer`,
        jobType: `Vendor | Remote`,
        jobDuration: `Jan 2022 - Present`,
        timeDuraton: `Full Time`,
        compnayName: "Mitra Bhakti Information",
        jobDescription: ` As a Senior Backend Developer at Mitra Bhakti Information, 
        I have significant experience in designing, implementing, and maintaining server-side logic for web applications. 
        My responsibilities may include developing APIs, databases, and other backend systems, ensuring high performance, 
        scalability, and security of the software. I also am involved in collaborating with Frontend developers, UX/UI designers, 
        and other team members to deliver seamless user experiences. Additionally, I have a role that may involve troubleshooting issues, 
        optimizing code, and staying updated with the latest technologies and best practices in backend development.`,
    },
    {
        jobPosition: `Sr. Mobile Developer`,
        jobType: `Finance Technology | Hybrid`,
        jobDuration: `Jan 2020 - Jan 2022`,
        timeDuraton: `Full Time`,
        compnayName: "Global Investa Cakrawala",
        jobDescription: `As a Senior Mobile Developer at Global Investa Cakrawala, 
        My role involves leading the development of mobile applications for both iOS and Android platforms with Flutter. 
        My responsible for the end-to-end development process, from conceptualization to deployment and maintenance. 
        This includes collaborating with cross-functional teams such as designers, product managers, 
        and backend developers to deliver high-quality mobile experiences.
        My role as a senior developer also involves contributing to architectural decisions,
        providing technical leadership, and driving innovation within the mobile development team at Global Investa Cakrawala.`,
    },
    {
        jobPosition: `Fullstack Developer`,
        jobType: `Software House | Onsite`,
        jobDuration: `Feb 2017 - Des 2020`,
        timeDuraton: `Full Time`,
        compnayName: "Lunata Technologies",
        jobDescription: `Develop and maintain web applications using Java, PHP, Node.js, Laravel, and Spring Boot.
Collaborate with designers and frontend developers to translate design mockups into responsive and user-friendly interfaces.
Implement backend functionalities and APIs to support frontend features, ensuring scalability, performance, and security.
Write clean, efficient, and maintainable code following best practices and coding standards.
Conduct code reviews, identify areas for improvement, and mentor junior developers to promote continuous learning and growth within the team.
Stay up-to-date with the latest trends and technologies in web development, and actively contribute to the adoption of new tools and methodologies.
Work closely with product managers and stakeholders to understand project requirements and deliver solutions that meet business objectives.
Troubleshoot and debug issues reported by clients or users, and provide timely resolutions to ensure smooth operation of web applications.`,
    },
];

const educatonContent = [
    {
        passingYear: "2020-2023",
        degreeTitle: "Msc. in Computer Science",
        instituteName: "University Of North Sumatra",
    },
    {
        passingYear: "2014-2018",
        degreeTitle: "Bsc. in Information System",
        instituteName: "Potensi Utama University",
    },
];

const Resume = () => {
    return (
        <>
            <section id="resume" className="section">
                <div className="container">
                    <div className="title">
                        <h3>Experience.</h3>
                    </div>
                    {/* End title */}
                    <div className="resume-box">
                        {resumeContent.map((val, i) => (
                            <div className="resume-row" key={i}>
                                <div className="row">
                                    <div className="col-md-4 col-xl-3">
                                        <div className="rb-left">
                                            <h6>{val.jobPosition}</h6>
                                            <label>{val.jobType}</label>
                                            <p>{val.jobDuration}</p>
                                            <div className="rb-time bg-success">{val.timeDuraton}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-xl-9">
                                        <div className="rb-right">
                                            <h6>{val.compnayName}</h6>
                                            <p>{val.jobDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // End resume-row
                        ))}
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
                        <h3>Education & Skills</h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 m-15px-tb">
                            <ul className="aducation-box">
                                {educatonContent.map((val, i) => (
                                    <li key={i}>
                                        <span>{val.passingYear}</span>
                                        <h6>{val.degreeTitle} </h6>
                                        <p>{val.instituteName}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-7 ml-auto m-15px-tb">
                            <Skills/>
                        </div>
                        {/* End .col */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
