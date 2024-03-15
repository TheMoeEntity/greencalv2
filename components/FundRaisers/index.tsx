'use client'
import Image from 'next/image'
import styles from '../../app/page.module.css'
import { useRouter } from 'next/navigation'
import FeaturedCard from '../Cards/Featured'
import Link from 'next/link'

const FundRaisers = () => {
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
                <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-scroll w-100 mb-5">
                    {[...Array(4)].map((_x, i) => (
                        <li
                            className="list-group-item mx-3 px-0 py-o border-0"
                            key={i}
                        >
                            <Link href={'/events'}>
                                <FeaturedCard title={"Title of project"} img={'/images/essay.jpg'} price={0} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default FundRaisers