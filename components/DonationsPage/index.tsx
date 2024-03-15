'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { CSSProperties, useRef, useState } from "react";
import { useCustomHero } from "@/Helpers/hooks";
import Script from "next/script";

const DonationsPage = () => {
    const { customHero } = useCustomHero(Link, "DONATIONS", styles, motion, "outreach2.jpg")
    const [method, setMethod] = useState<{ amount: string, isActive: boolean }[]>([
        {
            amount: "PayPal",
            isActive: false
        },
        {
            amount: "PayStack",
            isActive: false
        },
        {
            amount: "Offline Donation",
            isActive: true
        },
    ])
    const [amounts, setAmounts] = useState<{ amount: number | string, isActive: boolean }[]>([
        {
            amount: 10,
            isActive: true
        },
        {
            amount: 30,
            isActive: false
        },
        {
            amount: 50,
            isActive: false
        },
        {
            amount: 100,
            isActive: false
        },
        {
            amount: 'CUSTOM AMOUNT',
            isActive: false
        }
    ])
    const buttonStyles: CSSProperties = {
        background: '#0C4949',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    }
    const inputRef = useRef<HTMLInputElement>(null)
    const [currPrice, setCurrPrice] = useState<number | string>(10)
    const [isCustom, setIsCustom] = useState<boolean>(false)
    const setCurrAmount = (name: string | number) => {
        setIsCustom(false)
        setAmounts(state =>
            state.map((item) => item.amount === name ? { ...item, isActive: true } : { ...item, isActive: false }))
        if (typeof name === 'number') {
            setCurrPrice(name)
        } else {
            inputRef.current?.focus()
            setIsCustom(true)
        }
    }
    return (
        <div className={styles.dons1}>
            <div style={{ zIndex: '9999999999999' }} className="modal fade" tabIndex={-1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div style={{ zIndex: '9999999999999' }} className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirm Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>
                                    <b>First Name:</b> Moses
                                </li>
                                <li>
                                    <b>Last Name:</b> Nwigberi
                                </li>
                                <li>
                                    <b>Email:</b> mosesnwigberi@gmail.com
                                </li>
                                <li>
                                    <b>Phone:</b>08075489362
                                </li>
                                <li>
                                    <b>Donation:</b> ₦{currPrice}K
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-subtle" data-bs-dismiss="modal">EDIT INFO</button>
                            <button type="button" style={{ ...buttonStyles }} className="btn">SEND DONATION</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                customHero()
            }
            <div className={styles.dons}>
                <div className={styles.donationsForm}>
                    <h2 className="mb-5">Support GREENCAL Foundation</h2>
                    <div className={styles.runningDonation}>
                        <div className={styles.currency}>
                            ₦
                        </div>
                        <input type="number" ref={inputRef} readOnly={isCustom ? false : true} value={currPrice} onChange={e => setCurrPrice((e.target.value))} className={styles.amountInput} />
                    </div>
                    <div className={styles.amounts}>
                        {
                            amounts.map((x, i) => (
                                i === amounts.length - 1 ? (
                                    <div className={x.isActive ? styles.active : ''} key={i} onClick={() => setCurrAmount(x.amount)}>{x.amount}</div>
                                ) :
                                    (<div className={x.isActive ? styles.active : ''} key={i} onClick={() => setCurrAmount(x.amount)}>₦{x.amount}K</div>)
                            ))
                        }
                    </div>
                    <hr />
                    <h4 className="mt-5">Select Payment Method</h4>
                    <div className={styles.amounts}>
                        {
                            method.map((x, i) => (
                                <div onClick={() => setMethod(state =>
                                    state.map((item) => x.amount === item.amount ? { ...item, isActive: true } : { ...item, isActive: false }))} className={x.isActive ? styles.active : ''} key={i}>{x.amount}</div>
                            ))
                        }
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
                            <label className="my-3" htmlFor="">Phone:</label>
                            <input type="phone" className="form-control px-3 py-3" placeholder="Enter Your Phone Number" />
                        </div>
                        <div className="form-group my-4">
                            <input style={{ background: '#0C4949', color: 'white' }} type="button" defaultValue="SUBMIT" className="btn mt-3 py-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        </div>
                    </form>
                </div>
            </div>
            <Script src="https://js.paystack.co/v1/inline.js" />
        </div>
    )
}

export default DonationsPage