'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link"

const EventsPage = () => {
    const divStyle = {
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        height: "580px",
    };
    const slideImages = [
        {
            url: "/images/essay.jpg",
            caption: "Slide 1",
        },
    ];


    return (
        <div>
            <div className={styles.hero}>
                <div className="slide-container">
                    <Slide
                        arrows={false}
                        infinite={true}
                        duration={7000}
                        transitionDuration={400}
                    >
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    className={styles.sect}
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <div className={styles.overlay}></div>
                                    <span style={{
                                        visibility: 'hidden'
                                    }}>{slideImage.caption}</span>
                                    {(

                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: {
                                                    scale: 0,
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    scale: 1,
                                                    opacity: 1,
                                                    transition: {
                                                        delay: 0.8,
                                                        duration: 0.8,
                                                    },
                                                },
                                            }}
                                            style={{ float: "left", marginTop: '170px' }}
                                            className={styles.caption}
                                        >
                                            <h1>
                                                Greencal Foundation Uplifts Students Through Annual Essay Competition
                                            </h1>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <article className="mb-4 py-3">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7 text-dark">
                                <h2 className="section-heading">Overview</h2>
                                <p>Greencal Foundation is proud to host an annual essay competition, providing educational support and rewarding academic excellence for students in Abakaliki, Ebonyi State. This program offers a two-pronged approach, benefiting both SSCE/NECO candidates and students in other classes.</p>
                                <h2 className="section-heading">Empowering Students Through Competition</h2>
                                <p>
                                    The essay competition format provides a stimulating platform for students to showcase their critical thinking, writing skills, and knowledge. By encouraging research and well-developed arguments, Greencal Foundation fosters a love of learning that extends beyond the classroom. This approach equips students with valuable skills that will benefit them throughout their academic careers and beyond.</p>
                                <h2 className="section-heading">Building a Brighter Future</h2>
                                <p>
                                    Greencal Foundation believes that education is the cornerstone of individual and societal development. By investing in the next generation of scholars, the foundation empowers students to overcome challenges, achieve their goals, and contribute meaningfully to their communities. The annual essay competition is a significant step towards achieving this goal, ensuring that financial constraints do not hinder a {`student's`} pursuit of knowledge.</p>
                                <h2 className="section-heading">Investing in the Future: Scholarships for SSCE/NECO Exams</h2>
                                <p>For graduating secondary school students preparing for their SSCE or NECO exams, Greencal {`Foundation's`} essay competition provides a unique opportunity.
                                    High-performing students can win scholarships that cover the cost of their WAEC or NECO exam fees.</p>
                                <blockquote className="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. </blockquote>
                                <p> This critical support removes a significant financial hurdle, allowing students to focus on their studies
                                    and confidently approach their exams</p>
                                <h2 className="section-heading">Encouraging a Love of Learning: School Fee Support</h2>
                                <p>
                                    Greencal Foundation recognizes the importance of fostering a love of learning throughout a {`student's`} academic journey. Beyond the crucial exam years, the foundation also holds an annual essay competition for students in other class levels. Winners in this category receive scholarships to help cover their school fees, alleviating the financial burden on families and allowing students to continue their education without interruption.

                                </p>

                                <h2 className="section-heading">Celebrating Success: Disbursement Ceremony</h2>

                                <p>On February 21st, 2024, Greencal Foundation held a ceremony to disburse funds to the winners of the 2023 essay competition. The event took place at New Covenant College Odomoke, Ishieke, Ebonyi State, Nigeria. It was a joyous occasion to celebrate the {`students' `}achievements and acknowledge their hard work.</p>

                                <h2 className="section-heading mb-4">A Commitment to Education</h2>

                                <a href="#!"><img className="img-fluid" src="/images/essay.jpg" alt="..." /></a>
                                <span className="caption text-muted">To go places and do things that have never been done before – {`that’s `}what living is all about.</span>
                                <p className="my-4">
                                    Greencal {`Foundation's`} annual essay competition is a testament to the {`organization's`} unwavering commitment to education. By providing scholarships and fostering a culture of academic excellence, Greencal Foundation empowers students to reach their full potential and pave the way for a brighter future.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default EventsPage