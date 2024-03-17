import React from 'react'
import dynamic from "next/dynamic";
const EventsPage = dynamic(() => import("../../../components/EventsPage"));

const EventDetail = () => {
    return (
        <EventsPage />
    )
}

export default EventDetail