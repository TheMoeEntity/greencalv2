'use client'
import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBContainer className="my-5">
            <MDBCarousel showControls dark>

                <MDBCarouselItem className="active text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3"> FUNMILAYO ADEGOKE</h5>
                            <p>Nutristionist, Abuja, Nigeria</p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                {`I've `}witnessed the impact of Greencal {`Foundation's`} food outreach programs. They not only provide nourishment but also promote a healthy community, ensuring no child goes to bed hungry.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>

                <MDBCarouselItem className="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3">CHIJIOKE NWANKWO</h5>
                            <p>Software Engineer, Lagos, Nigeria
                            </p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Greencal Foundation has been a beacon of hope for children in our community. Their dedication to education and scholarships is changing lives and shaping a brighter future.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>

                <MDBCarouselItem className="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3">IBRAHIM ABDULLAHI</h5>
                            <p>Education Advocate, Kano, Nigeria</p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                As an education advocate, I applaud Greencal {`Foundation's`} commitment to empowering young minds. The scholarships offered are instrumental in bridging the gap and creating opportunities for deserving students.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
    );
}