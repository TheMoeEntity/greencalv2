'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCustomHero } from "@/Helpers/hooks";
import '../EventsPage/style.css'

const AboutPage = () => {
    const { customHero } = useCustomHero(Link, "ABOUT US", styles, motion, "banner.jpg")
    return (
        <div>
            {customHero()}
            <div className="site-section mb-5 px-2">
                <div className="container">
                    <section className="section about-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className="title-color">About Greencal Foundation.</h2>
                                </div>
                                <div className="col-lg-8">
                                    <p>Greencal Foundation is a non-profit organization based in Abakaliki, Ebonyi State, Nigeria. We are dedicated to improving the lives of those facing illness, hardship, and limited opportunities.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section about-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className="title-color">A Story of Inspiration</h2>
                                </div>
                                <div className="col-lg-8">
                                    <p>
                                        Greencal Foundation was born out of a deeply personal experience. Our founder, Obinna Adum, was deeply affected by the passing of his mother, Mrs. Juliana Calista Adum. A renowned philanthropist herself, Mrs. Adum dedicated her life to helping others in need. When she fell ill, Obinna was inspired to create a lasting legacy in her honor.
                                    </p>
                                    <p>Greencal Foundation serves as a way to continue Mrs. Adum's incredible work and provide the support Obinna would have wanted for her.</p>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section about-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className="title-color">Empowering A Community</h2>
                                </div>
                                <div className="col-lg-8">
                                    <p>At Greencal Foundation, we're passionate about transforming lives in Abakaliki, Ebonyi State. With a focus on education, medical outreach, and scholarships, we strive to create a brighter future for children, fostering a community of empowerment and growth. We believe that by investing in education and basic needs, we can equip the next generation to overcome challenges and reach their full potential.</p>
                                    <h3 className="mt-4 title-color">Our Mission</h3>
                                    <ul>
                                        <li>Providing assistance to individuals and families struggling with medical bills.</li>
                                        <li>Supporting access to quality healthcare in underserved communities.</li>
                                        <li>Upholding the values of compassion, empathy, and generosity exemplified by Mrs. Juliana Calista Adum.</li>
                                    </ul>
                                    <h3 className="mt-5 title-color">Our Vision</h3>
                                    <p>
                                        Greencal Foundation envisions a future where education is accessible and empowering for all children in Abakaliki, Ebonyi State. We strive to create a community where financial limitations do not hinder a student's pursuit of knowledge and potential.
                                    </p>
                                    <p>Through our scholarship and essay competition programs, we aspire to see a generation of well-educated young minds who are equipped to contribute meaningfully to their communities and shape a brighter future for Abakaliki.</p>
                                </div>
                            </div>
                        </div>
                    </section>

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