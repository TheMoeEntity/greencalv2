'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactPage = () => {
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
                                                CONTACT US
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

            <div className="site-section">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form>
                                <div className="form-group my-4">
                                    <label className="my-3" htmlFor="">Full Name</label>
                                    <input type="text" className="form-control px-3 py-3" placeholder="Enter Your Name" />
                                </div>
                                <div className="form-group my-4">
                                    <label className="my-3" htmlFor="">Email address</label>
                                    <input type="text" className="form-control px-3 py-3" placeholder="Enter Your Email" />
                                </div>
                                <div className="form-group my-4">
                                    <label className="my-3" htmlFor="">Subject</label>
                                    <input type="text" className="form-control px-3 py-3" placeholder="Subject" />
                                </div>
                                <div className="form-group my-4">
                                    <label className="my-3" htmlFor="">Talk to us</label>
                                    <textarea name="" id="" rows={10} className="form-control px-3 py-3" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group my-4">
                                    <input style={{ background: '#0C4949', color: 'white' }} type="submit" value="Send Message" className="btn py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6">
                            <div className={styles.maps}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33020.15565385796!2d8.051868107262973!3d6.363035566481815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105b5f7b70fc171f%3A0xcd60ec82fc0e88b4!2s50%2C%20Kpiri%20Kpiri%2C%20Abakaliki%20480001%2C%20Ebonyi!5e0!3m2!1sen!2sng!4v1706905445265!5m2!1sen!2sng"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    aria-hidden="false"
                                    tabIndex={0}
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                        </div>

                        {/* <div className="col-md-6" id="map"></div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage