import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/SliderFive";
import About from "../components/about/AboutThree";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import ContactInfo from "../components/contact/ContactInfo";
import Map from "../components/contact/Map";
import Footer from "../components/footer/Footer";
import useDocumentTitle from "../components/useDocumentTitle";
import {Helmet} from "react-helmet";

const HomeLightSidebar = () => {
    useDocumentTitle("Home | Erman Sibarani Portfolio");
    document.body.classList.add("theme-light");
    return (
        <div className="main-left">
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="I'm a Freelancer Fullstack Developer with over 8 years of experience. I'm from Medan. I code and create multi devices elements for amazing people around the world. I like work with new people. New people new Experiences."/>
                <title>Home | Erman Sibarani Portfolio</title>
                <meta name="og:Erman Sibarani Portfolio" property="og:Erman Sibarani Portfolio" content="I'm a Freelancer Fullstack Developer with over 8 years of experience. I'm from Medan. I code and create multi devices elements for amazing people around the world. I like work with new people. New people new Experiences."/>
                <meta name="robots" content="index, follow"/>
                <link href="https://ermansibarani.com" rel="canonical"/>
                <link rel="alternate" hrefLang="en" href="https://ermansibarani.com/"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:url" content="https://ermansibarani.com/"/>
                <meta property="og:image" content="https://ermansibarani.com/img/about/erman-bg.png"/>
                <meta property="og:site_name" content="ermansibarani.com"/>
                <meta property="og:title" content="Erman Sibarani Portfolio"/>
                <meta property="og:description"
                      content="I'm a Freelancer Fullstack Developer with over 8 years of experience. I'm from Medan. I code and create multi devices elements for amazing people around the world. I like work with new people. New people new Experiences."/>
                <meta property="og:type" content="website"/>
                <meta name="description"
                      content="I'm a Freelancer Fullstack Developer with over 8 years of experience. I'm from Medan. I code and create multi devices elements for amazing people around the world. I like work with new people. New people new Experiences."/>
                <link rel="icon" href="https://ermansibarani.com/img/about/icon-circle.png" type="image/x-icon"/>
                <link rel="shortcut icon" href="https://ermansibarani.com/img/about/icon-circle.png"
                      type="image/x-icon"/>
            </Helmet>
            <Header/>
            {/* End Header Section */}

            <Slider/>
            {/* End Slider Section */}

            <About/>
            {/* End About Section */}

            <Resume/>
            {/* End Resume Section */}

            <section id="work" className="section theme-light dark-bg">
                <div className="container">
                    <div className="title">
                        <h3>My Portfolio.</h3>
                    </div>
                    <Portfolio/>
                </div>
            </section>
            {/* End Portfolio Section */}

            <section id="contactus" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 m-15px-tb">
                            <ContactInfo/>
                        </div>
                        {/* End Contact info */}

                        <div className="col-lg-7 ml-auto m-15px-tb  ">
                            <div className="contact-form">
                                <h4>Say Something</h4>
                                <Contact/>
                            </div>
                        </div>
                        {/* End contact form */}

                        <div className="col-12">
                            <Map/>
                            {/* End google-map */}
                        </div>
                        {/* End Col */}
                    </div>
                </div>
            </section>
            {/* End Contact Section */}

            <footer className="footer white">
                <div className="container">
                    <Footer/>
                </div>
            </footer>
            {/* End Contact Section */}
        </div>
    );
};

export default HomeLightSidebar;
