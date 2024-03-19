import React from 'react'
import dynamic from "next/dynamic";
import { Metadata } from 'next';
const EventsPage = dynamic(() => import("../../../components/EventsPage"));
export const metadata: Metadata = {
    title: "Greencal Foundation - Events and Updates",
    description:
        "Stay informed about upcoming events and past initiatives of Greencal Foundation. Discover how we're making a difference in Abakaliki.",
    keywords: "Greencal Foundation, events, blog, updates, initiatives, Abakaliki, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
};

const EventDetail = () => {
    return (
        <EventsPage />
    )
}

export default EventDetail