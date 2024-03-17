'use client'
import './style.css'

const EventsPage = () => {

    return (
        <>
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white invisible">Event details</span>
                                <h1 className="text-capitalize mb-5 text-lg invisible">Events</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-12 mb-5">
                                    <div className="single-blog-item">
                                        <img src="images/blog/blog-1.jpg" alt="" className="img-fluid" />

                                        <div className="blog-item-content mt-5">
                                            <div className="blog-item-meta mb-3">
                                                <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> 15th March 2024</span>
                                            </div>

                                            <h2 className="mb-4 text-md"><a href="blog-single.html">Greencal Foundation Uplifts Students Through Annual Essay Competition</a></h2>

                                            <p className="lead mb-4">Greencal foundation organizes her first official event!</p>

                                            <p>
                                                Greencal Foundation is proud to host an annual essay competition, providing educational support and rewarding academic excellence for students in Abakaliki, Ebonyi State. This program offers a two-pronged approach, benefiting both SSCE/NECO candidates and students in other classes.
                                            </p>

                                            <blockquote className="quote">
                                                To go places and do things that have never been done before – {`that's`}what living is all about.
                                            </blockquote>

                                            <p>
                                                The essay competition format provides a stimulating platform for students to showcase their critical thinking, writing skills, and knowledge. By encouraging research and well-developed arguments, Greencal Foundation fosters a love of learning that extends beyond the classroom. This approach equips students with valuable skills that will benefit them throughout their academic careers and beyond
                                            </p>

                                            <h2 className="mb-4 text-md mt-5">Building a Brighter Future</h2>

                                            <p>
                                                Greencal Foundation believes that education is the cornerstone of individual and societal development. By investing in the next generation of scholars, the foundation empowers students to overcome challenges, achieve their goals, and contribute meaningfully to their communities. The annual essay competition is a significant step towards achieving this goal, ensuring that financial constraints do not hinder a {`student's`} pursuit of knowledge.
                                            </p>

                                            <h2 className="mb-4 text-md mt-5">Investing in the Future: Scholarships for SSCE/NECO Exams</h2>

                                            <p>
                                                For graduating secondary school students preparing for their SSCE or NECO exams, Greencal {`Foundation's`} essay competition provides a unique opportunity. High-performing students can win scholarships that cover the cost of their WAEC or NECO exam fees.
                                            </p>
                                            <blockquote className='quote'>
                                                The dreams of yesterday are the hopes of today and the reality of tomorrow.
                                            </blockquote>
                                            <p>This critical support removes a significant financial hurdle, allowing students to focus on their studies and confidently approach their exams</p>

                                            <h2 className="mb-4 text-md mt-5">Encouraging a Love of Learning: School Fee Support</h2>

                                            <p>
                                                Greencal Foundation recognizes the importance of fostering a love of learning throughout a {`student's`} academic journey. Beyond the crucial exam years, the foundation also holds an annual essay competition for students in other class levels. Winners in this category receive scholarships to help cover their school fees, alleviating the financial burden on families and allowing students to continue their education without interruption.
                                            </p>

                                            <>
                                                <h2 className="mb-4 text-md mt-5">Celebrating Success: Disbursement Ceremony</h2>

                                                <p>
                                                    On February 21st, 2024, Greencal Foundation held a ceremony to disburse funds to the winners of the 2023 essay competition. The event took place at New Covenant College Odomoke, Ishieke, Ebonyi State, Nigeria. It was a joyous occasion to celebrate the {`students' `}achievements and acknowledge their hard work.
                                                </p>
                                            </>

                                            <>
                                                <h2 className='mb-4 text-md mt-5 mb-5'>A Commitment to Education and Community Development:</h2>
                                                <a href="#!"><img className="img-fluid" src="/images/essay.jpg" alt="..." /></a>
                                                <span className="caption text-muted">To go places and do things that have never been done before – {`that’s `}what living is all about.</span>
                                                <p className="my-4">
                                                    Greencal {`Foundation's`} annual essay competition is a testament to the {`organization's`} unwavering commitment to education. By providing scholarships and fostering a culture of academic excellence, Greencal Foundation empowers students to reach their full potential and pave the way for a brighter future.
                                                </p>
                                            </>

                                            <div className="mt-5 clearfix">
                                                <ul className="float-left list-inline tag-option">
                                                    <li className="list-inline-item"><a href="#">Education</a></li>
                                                    <li className="list-inline-item"><a href="#">Scholarships</a></li>
                                                    <li className="list-inline-item"><a href="#">Outreach</a></li>
                                                </ul>

                                                {/* <ul className="float-right list-inline">
                                                    <li className="list-inline-item"> Share: </li>
                                                    <li className="list-inline-item"><a href="#" target="_blank"><i className="icofont-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" target="_blank"><i className="icofont-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" target="_blank"><i className="icofont-pinterest" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" target="_blank"><i className="icofont-linkedin" aria-hidden="true"></i></a></li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="comment-area mt-4 mb-5">
                                        <h4 className="mb-4">No Comments yet... </h4>
                                        {/* <ul className="comment-tree list-unstyled">
                                            <li className="mb-5">
                                                <div className="comment-area-box">
                                                    <div className="comment-thumb float-left">
                                                        <img alt="" src="images/blog/testimonial1.jpg" className="img-fluid" />
                                                    </div>

                                                    <div className="comment-info">
                                                        <h5 className="mb-1">John</h5>
                                                        <span>United Kingdom</span>
                                                        <span className="date-comm">| Posted April 7, 2019</span>
                                                    </div>
                                                    <div className="comment-meta mt-2">
                                                        <a href="#"><i className="icofont-reply mr-2 text-muted"></i>Reply</a>
                                                    </div>

                                                    <div className="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="comment-area-box">
                                                    <div className="comment-thumb float-left">
                                                        <img alt="" src="images/blog/testimonial2.jpg" className="img-fluid" />
                                                    </div>

                                                    <div className="comment-info">
                                                        <h5 className="mb-1">Philip W</h5>
                                                        <span>United Kingdom</span>
                                                        <span className="date-comm">| Posted June 7, 2019</span>
                                                    </div>

                                                    <div className="comment-meta mt-2">
                                                        <a href="#"><i className="icofont-reply mr-2 text-muted"></i>Reply </a>
                                                    </div>

                                                    <div className="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <form className="comment-form my-5" id="comment-form">
                                        <h4 className="mb-4">Write a comment</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="name" id="name" placeholder="Name:" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="mail" id="mail" placeholder="Email:" />
                                                </div>
                                            </div>
                                        </div>


                                        <textarea className="form-control mb-4" name="comment" id="comment" cols={30} rows={5} placeholder="Comment"></textarea>

                                        <input className="btn btn-main-2 btn-round-full" type="submit" name="submit-contact" id="submit_contact" value="Submit Message" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">

                                <div className="sidebar-widget latest-post mb-3">
                                    <h5>Popular Events</h5>

                                    <div className="py-2">
                                        <span className="text-sm text-muted">15 Mar 2024</span>
                                        <h6 className="my-2"><a href="#">Greencal Foundation Uplifts Students Through Annual Essay Competition</a></h6>
                                    </div>

                                    <div className="py-2">
                                        <span className="text-sm text-muted">Coming soon</span>
                                        <h6 className="my-2"><a href="#">First medical outreach at FETHA</a></h6>
                                    </div>
                                </div>

                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4">Categories</h5>

                                    <ul className="list-unstyled">
                                        <li className="align-items-center">
                                            <a href="#">Scholarships</a>
                                            <span>(1)</span>
                                        </li>
                                    </ul>
                                </div>


                                {/* <div className="sidebar-widget tags mb-3">
                                    <h5 className="mb-4">Tags</h5>

                                    <a href="#">Doctors</a>
                                    <a href="#">agency</a>
                                    <a href="#">company</a>
                                    <a href="#">medicine</a>
                                    <a href="#">surgery</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Social Media</a>
                                    <a href="#">Branding</a>
                                    <a href="#">Laboratory</a>
                                </div> */}


                                <div className="sidebar-widget schedule-widget mb-3">
                                    <h5 className="mb-4">Time Schedule</h5>

                                    <ul className="list-unstyled">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#">Monday - Friday</a>
                                            <span>9:00 - 17:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#">Saturday</a>
                                            <span>9:00 - 16:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#">Sunday</a>
                                            <span>Closed</span>
                                        </li>
                                    </ul>

                                    <div className="sidebar-contatct-info mt-4">
                                        <p className="mb-0">Talk to Us?</p>
                                        <h3>+234-811-617-7509</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventsPage