'use client'
import { useCustomHero } from "@/Helpers/hooks";
import styles from "../Hero/index.module.css";
import styles2 from '../../app/page.module.css'
import Link from "next/link";
import { motion } from "framer-motion";
import FeaturedCard from "../Cards/Featured";
import essay from '../../public/images/essay.jpg'
import medical from '../../public/images/medical.jpeg'
import '../EventsPage/style.css'
import { eventCard } from "@/Helpers/types";

const AllEvents = () => {
    const events: eventCard[] = [
        {
            img: essay,
            title: "Greencal Foundation Uplifts Students Through Annual Essay Competition",
            content: "For graduating secondary school students preparing for their SSCE or NECO exams, Greencal Foundation's essay competition provides a unique opportunity...",
            comingSoon: false
        },
        {
            img: medical,
            title: "Greencal Foundation Organizes First Medical Outreach at Iboko, Izzi.",
            content: "Event coming soon. ",
            comingSoon: true
        },
    ]
    const { customHero } = useCustomHero(Link, "EVENTS", styles, motion, "outreach6.jpg")
    return (
        <div>
            {customHero()}
            <section className="events px-2 py-5">
                <h1 className="title-color text-center">Upcoming and Past Events</h1>
                <p className="text-center">Greencal Foundation is dedicated to empowering our community through various initiatives. <br /> Here's a glimpse into some of our recent events.</p>
                <div className={styles2.grid}>
                    <ul className="px-1 py-0 list-group list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
                        {events.map((x, i) => (
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