import dynamic from "next/dynamic";
const EventsPage = dynamic(() => import("../../components/AllEvents"));

const Events = () => {
    return (
        <EventsPage />
    )
}

export default Events