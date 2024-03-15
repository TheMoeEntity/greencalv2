'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useCustomHero } from "@/Helpers/hooks";

const DonationsPage = () => {
    const { customHero } = useCustomHero(Link, "DONATIONS", styles, motion, "outreach2.jpg")
    const [method, setMethod] = useState<{ amount: string, isActive: boolean }[]>([
        {
            amount: "Credit Card",
            isActive: false
        },
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
    const inputRef = useRef<HTMLInputElement>(null)
    const [currPrice, setCurrPrice] = useState<number | string>(10)
    const setCurrAmount = (name: string | number) => {
        setAmounts(state =>
            state.map((item) => item.amount === name ? { ...item, isActive: true } : { ...item, isActive: false }))
        if (typeof name === 'number') {
            setCurrPrice(name)
        } else {
            inputRef.current?.focus()
        }
    }
    return (
        <div>
            {
                customHero()
            }
            <div className={styles.dons}>
                <div className={styles.donationsForm}>
                    <h2 className="mb-5">Support GREENCAL Foundation</h2>
                    <div className={styles.runningDonation}>
                        <div className={styles.currency}>
                            $
                        </div>
                        <input type="number" ref={inputRef} value={currPrice} onChange={e => setCurrPrice((e.target.value))} className={styles.amountInput} />
                    </div>
                    <div className={styles.amounts}>
                        {
                            amounts.map((x, i) => (
                                i === amounts.length - 1 ? (
                                    <div className={x.isActive ? styles.active : ''} key={i} onClick={() => setCurrAmount(x.amount)}>{x.amount}</div>
                                ) :
                                    (<div className={x.isActive ? styles.active : ''} key={i} onClick={() => setCurrAmount(x.amount)}>${x.amount}K</div>)
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
                            <input style={{ background: '#0C4949', color: 'white' }} type="submit" defaultValue="DONATE NOW" className="btn mt-3 py-3 px-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonationsPage