import ContactPage from '@/components/ContactPage'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Greencal Foundation - Contact Us",
    description:
        "Get in touch with Greencal Foundation. We welcome inquiries, volunteer applications, and collaboration opportunities.",
    keywords: "Greencal Foundation, contact, inquiries, volunteer, collaboration, Abakaliki, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
};
const Contact = () => {
    return (
        <ContactPage />
    )
}

export default Contact