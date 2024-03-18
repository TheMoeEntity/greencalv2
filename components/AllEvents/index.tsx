'use client'
import { useCustomHero } from "@/Helpers/hooks";
import styles from "../Hero/index.module.css";
import styles2 from '../../app/page.module.css'
import Link from "next/link";
import { motion } from "framer-motion";
import FeaturedCard from "../Cards/Featured";
import '../EventsPage/style.css'
import { Helpers } from "@/Helpers";


const AllEvents = () => {

    const { customHero } = useCustomHero(Link, "EVENTS", styles, motion, "outreach6.jpg")
    return (
        <div>
            {customHero()}
            <section className="events px-2 py-5">
                <h1 className="title-color text-center">Upcoming and Past Events</h1>
                <p className="text-center">Greencal Foundation is dedicated to empowering our community through various initiatives. <br /> {`Here's `}a glimpse into some of our recent events.</p>
                <div className={styles2.grid}>
                    <ul className="px-1 py-0 list-group list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
                        {Helpers.events.map((x, i) => (
                            <li
                                className="list-group-item mx-3 px-0 py-o border-0"
                                key={i}
                            >
                                <FeaturedCard slug={'essay-competition'} title={x.title} comingSoon={x.comingSoon} img={x.img} content={x.content} />
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-center mt-5">
                    Stay tuned for upcoming events and initiatives!
                </p>
            </section>
        </div>
    )
}

export default AllEvents