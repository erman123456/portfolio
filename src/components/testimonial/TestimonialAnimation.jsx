import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        margin: 30,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const TestimonilContent = [
        {
            imageName: "rian.jpeg",
            desc: `  "Erman is creative person in Tech, I've been working with him for many years and
       he's very good at delivering project task with quality, clean code and well documented."`,
            reviewerName: "Rian Iregho",
            designation: "CEO at Doiscode",
            delayAnimation: "",
        },
        {
            imageName: "zikri.jpeg",
            desc: `  "I wholeheartedly endorse Erman Sibarani as a Fullstack developer and believe that 
      he would be a valuable addition to any development team or project. If you need a skilled and dedicated full-stack developer, 
      I highly recommend reaching out to him."`,
            reviewerName: "Zikri Akmal Santoso",
            designation: "Tech Lead at AppFuxion Consulting",
            delayAnimation: "200",
        },
        {
            imageName: "felix.jpeg",
            desc: `  "I just wanted to express my gratitude for the amazing experience I've had as a partnership. 
      From the moment I started using the results of my Apps. I can't recommend it enough!."`,
            reviewerName: "Felix Seran",
            designation: "Tech Lead at Mitra Bhakti Information",
            delayAnimation: "400",
        },
    ];

    return (
        <div className="testimonial-wrapper">
            <Slider {...settings}>
                {TestimonilContent.map((val, i) => {
                    const path = window.location.origin + '/img/testimonial/' + val.imageName;
                    const schema = {
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: val.reviewerName,
                        description: val.desc,
                        image: path,
                        datePublished: "2024-05-10",
                        dateModified: "2024-05-10",
                        author: {
                            '@type': 'Person',
                            name: val.reviewerName,
                            url: path
                        },
                    }
                    return (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay={val.delayAnimation}
                            className="application"
                        >
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify(schema),
                                }}
                            />
                            <div className="testimonial-01 media">
                                <div className="avatar">
                                    <img
                                        src={path}
                                        alt="review comments"
                                    ></img>
                                </div>
                                <div className="media-body">
                                    <p>{val.desc}</p>
                                    <h6>{val.reviewerName}</h6>
                                    <span>{val.designation}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}
