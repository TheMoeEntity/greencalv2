import GalleryPage from '@/components/GalleryPage'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Greencal Foundation - Photo Gallery",
    description:
        "Witness the impact of your generosity! Explore our gallery and see the lives transformed by Greencal Foundation's initiatives.",
    keywords: "Greencal Foundation, gallery, photos, impact, beneficiaries, Abakaliki, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
};
const Galery = () => {
    return (
        <GalleryPage />
    )
}

export default Galery