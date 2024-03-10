import dynamic from "next/dynamic";
const DonationsPage = dynamic(() => import("../../components/DonationsPage"));

const page = () => {
    return (
        <DonationsPage />
    )
}

export default page