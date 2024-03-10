'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const DonationsPage = () => {
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
                                                DONATIONS
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
            <div className={styles.dons}>
                <div className={styles.donationsForm}>
                    <h2>Gift an Education… Make a Life Better!</h2>
                    <div className={styles.runningDonation}>
                        <div className={styles.currency}>
                            $
                        </div>
                        <input defaultValue={30000} className={styles.amountInput} />
                    </div>
                    <div className={styles.amounts}>
                        <div>$30k</div>
                        <div>$30k</div>
                        <div>$30k</div>
                        <div>$30k</div>
                        <div>CUSTOM AMOUNT</div>
                    </div>
                    <hr />
                    <h4 className="mt-5">Select Payment Method</h4>
                    <div className={styles.amounts}>
                        <div>Credit Card</div>
                        <div>PayPal</div>
                        <div>PayStack</div>
                        <div>Offline Donation</div>
                    </div>
                    <hr />
                    <form>
                        <h4 className="mt-5">Personal Info</h4>
                        <div className="form-group my-4">
                            <label className="my-3" htmlFor="">First Name</label>
                            <input type="text" className="form-control px-3 py-3" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group my-4">
                            <label className="my-3" htmlFor="">Last Name</label>
                            <input type="text" className="form-control px-3 py-3" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group my-4">
                            <label className="my-3" htmlFor="">Email address</label>
                            <input type="text" className="form-control px-3 py-3" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group my-4">
                            <input style={{ background: '#0C4949', color: 'white' }} type="submit" defaultValue="DONATE NOW" className="btn mt-3 py-3 px-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonationsPage