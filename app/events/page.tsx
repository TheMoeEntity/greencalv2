import dynamic from "next/dynamic";
const EventsPage = dynamic(() => import("../../components/EventsPage"));

const Events = () => {
    return (
        <EventsPage />
    )
}

export default Events