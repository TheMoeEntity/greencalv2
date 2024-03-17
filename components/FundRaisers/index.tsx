'use client'
import { eventCard } from '@/Helpers/types'
import styles from '../../app/page.module.css'
import FeaturedCard from '../Cards/Featured'
import Link from 'next/link'
import essay from '../../public/images/essay.jpg'
import medical from '../../public/images/medical.jpeg'

const FundRaisers = () => {
    const content: eventCard[] = [
        {
            img: essay,
            title: "Greencal Foundation Uplifts Students Through Annual Essay Competition",
            content: "For graduating secondary school students preparing for their SSCE or NECO exams, Greencal Foundation's essay competition provides a unique opportunity...",
            comingSoon: false,
            slug: 'greencal-essay-competition'
        },
        {
            img: medical,
            title: "Greencal Foundation Organizes First Medical Outreach at Iboko, Izzi.",
            content: "Event coming soon. ",
            comingSoon: true
        },
    ]
    return (
        <div className={styles.funds}>
            <div className="container">
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2>Latest Events</h2>
                        <p className="lead">Your Donations help determine the fate of children</p>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
                    {content.map((x, i) => (
                        <li
                            className="list-group-item mx-3 px-0 py-o border-0"
                            key={i}
                        >
                            <FeaturedCard title={x.title} comingSoon={x.comingSoon} img={x.img} slug={x.slug} content={x.content} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default FundRaisers