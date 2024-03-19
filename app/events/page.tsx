import { Metadata } from "next";
import dynamic from "next/dynamic";
const EventsPage = dynamic(() => import("../../components/AllEvents"));
export const metadata: Metadata = {
    title: "Greencal Foundation - Events and Updates",
    description:
        "Stay informed about upcoming events and past initiatives of Greencal Foundation. Discover how we're making a difference in Abakaliki.",
    keywords: "Greencal Foundation, events, blog, updates, initiatives, Abakaliki, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
};

const Events = () => {
    return (
        <EventsPage />
    )
}

export default Events