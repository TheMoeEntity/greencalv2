'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
    const divStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
    };
    const slideImages = [
        {
            url: "/images/outreach2.jpg",
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
                                            style={{ float: "left", marginTop: '80px' }}
                                            className={styles.caption}
                                        >
                                            <h1>
                                                ABOUT US
                                            </h1>
                                            <p>
                                                Empowering lives through compassionate giving. Join Greencal Foundation in making a positive impact in Abakaliki, Ebonyi State, Nigeria.
                                            </p>

                                            <Link href={'/donate'}><button>DONATE NOW</button></Link>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
            <div className="site-section mb-5 px-2">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 mb-5"><h1>About Greencal Foundation</h1></div>
                        <div className="col-md-6">
                            <p className="lead mb-4">Greencal Foundation is a non-profit organization based in Abakaliki, Ebonyi State, Nigeria. We are dedicated to improving the lives of those facing illness, hardship, and limited opportunities.</p> <br />
                            <h3 className="h3">A Story of Inspiration</h3>
                            <p>Greencal Foundation was born out of a deeply personal experience. Our founder, Obinna Adum, was deeply affected by the passing of his mother, Mrs. Juliana Calista Adum. A renowned philanthropist herself, Mrs. Adum dedicated her life to helping others in need.
                                When she fell ill, Obinna was inspired to create a lasting legacy in her honor.</p>
                            <p>Greencal Foundation serves as a way to continue Mrs. Adum's incredible work and provide the support Obinna would have wanted for her.</p>
                        </div>
                        <div className="col-md-6">

                            <h3 className="h3">Our Mission</h3>
                            <p>
                                <ul>
                                    <li>Providing assistance to individuals and families struggling with medical bills.</li>
                                    <li>Supporting access to quality healthcare in underserved communities.</li>
                                    <li>Upholding the values of compassion, empathy, and generosity exemplified by Mrs. Juliana Calista Adum.</li>
                                </ul>
                            </p>

                            <h3 className="h3 mt-4">Empowering Our Community</h3>
                            <p>
                                At Greencal Foundation, we're passionate about transforming lives in Abakaliki, Ebonyi State. With a focus on education, food outreach, and scholarships, we strive to create a brighter future for children, fostering a community of empowerment and growth. We believe that by investing in education and basic needs, we can equip the next generation to overcome challenges and reach their full potential.
                            </p> <br />


                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12 mb-5 text-center mt-5">
                            <h2>Leadership</h2>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">

                                        <h3 className="block-38-heading">Adum Obinna</h3>
                                        <p className="block-38-subheading">CEO</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        {/* <img src="images/person_2.jpg" alt="Image placeholder" /> */}
                                        <h3 className="block-38-heading">Jennifer Greive</h3>
                                        <p className="block-38-subheading">President</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        {/* <img src="images/person_3.jpg" alt="Image placeholder" /> */}
                                        <h3 className="block-38-heading">Patrick Marx</h3>
                                        <p className="block-38-subheading">Marketer</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        {/* <img src="images/person_4.jpg" alt="Image placeholder" /> */}
                                        <h3 className="block-38-heading">Mike Coolbert</h3>
                                        <p className="block-38-subheading">Partner</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage