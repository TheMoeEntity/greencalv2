'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCustomHero } from "@/Helpers/hooks";
import '../EventsPage/style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AboutPage = () => {
    const leaders = [
        {
            name: "Adum Obinna",
            position: "Founder",
            info: 'Adum Obinna, a passionate philanthropist, economics student and owner of Brill Exchange, in Ebonyi State, established Greencal Foundation in memory of his inspiring mother. Witnessing her dedication to helping others ignited a fire in him to continue her legacy of giving back to the community.'
        },
        {
            name: "Kepha",
            position: "Co-founder",
            info: 'Kepha, a dedicated medical student, brings his medical expertise and unwavering commitment to social justice to Greencal Foundation. Witnessing the struggles faced by many in Abakaliki firsthand fuels his drive to improve access to quality healthcare in underserved communities.'
        }
    ]
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
                                    <p>Greencal Foundation serves as a way to continue Mrs. {`Adum's `}incredible work and provide the support Obinna would have wanted for her.</p>

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
                                    <p>At Greencal Foundation, {`we're`} passionate about transforming lives in Abakaliki, Ebonyi State. With a focus on education, medical outreach, and scholarships, we strive to create a brighter future for children, fostering a community of empowerment and growth. We believe that by investing in education and basic needs, we can equip the next generation to overcome challenges and reach their full potential.</p>
                                    <h3 className="mt-4 title-color">Our Mission</h3>
                                    <ul>
                                        <li>Providing assistance to individuals and families struggling with medical bills.</li>
                                        <li>Supporting access to quality healthcare in underserved communities.</li>
                                        <li>Offering scholarships and educational support programs to empower students of all ages</li>
                                        <li>Partnering with churches and faith-based organizations to address community needs.</li>
                                        <li>Upholding the values of compassion, empathy, and generosity exemplified by Mrs. Juliana Calista Adum.</li>
                                    </ul>
                                    <h3 className="mt-5 title-color">Our Vision</h3>
                                    <p>
                                        Greencal Foundation envisions a future where education is accessible and empowering for all children in Abakaliki, Ebonyi State. We strive to create a community where financial limitations do not hinder a {`student's`} pursuit of knowledge and potential.
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
                        <Row xs={1} md={2} lg={2} className="g-4">
                            {leaders.map((leader) => (
                                <Col key={leader.name}>
                                    <div className="leader-card text-center">
                                        {/* <img src={leader.imageUrl} alt={leader.name} className="leader-img" /> */}
                                        <div className="leader-info">
                                            <h3>{leader.name}</h3>
                                            <p style={{ color: 'gray' }}>{leader.position}</p>
                                            <p>{leader.info}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage