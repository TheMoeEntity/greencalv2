'use client'
import Image from 'next/image'
import styles from '../../app/page.module.css'
import { useRouter } from 'next/navigation'
import FeaturedCard from '../Cards/Featured'

const FundRaisers = () => {
    const router = useRouter()
    return (
        <div className={styles.funds}>
            <div className="container">
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2>Latest Fundraisers</h2>
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
                            <FeaturedCard title={"Title of project"} img={'/images/img_1.jpeg'} price={0} />
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}


export default FundRaisers