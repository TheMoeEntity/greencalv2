'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { Helpers } from "@/Helpers";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useCustomHero } from "@/Helpers/hooks";

const ContactPage = () => {
    const [status, setStatus] = useState('SEND MESSAGE')
    const [val, setVal] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const { customHero } = useCustomHero(Link, "CONTACT US", styles, motion, "outreach2.jpg")
    return (
        <div>
            {customHero()}
            <div className="site-section">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form onSubmit={e => Helpers.handleSubmit(setStatus, setVal, val, e, enqueueSnackbar)}>
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
                                    <textarea onChange={(e) => setVal(e.target.value)} name="" id="" rows={10} className="form-control px-3 py-3" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group my-4">
                                    <input style={{ background: '#0C4949', color: 'white' }} type="submit" value={status} className="btn py-3 px-5" />
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