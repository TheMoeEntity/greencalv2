'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const GalleryPage = () => {
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
                                                OUR GALLERY
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
            <div className={styles.gallery}>

            </div>
        </div>
    )
}

export default GalleryPage