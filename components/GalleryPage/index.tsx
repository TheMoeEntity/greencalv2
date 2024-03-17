'use client'
import styles from "../Hero/index.module.css";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";
import MainGallery from "./MainGallery";
import { useCustomHero } from "@/Helpers/hooks";


const GalleryPage = () => {
    const { customHero } = useCustomHero(Link, "OUR GALLERY", styles, motion, "medical.jpeg")
    return (
        <div>
            {
                customHero()
            }
            <div className={styles.gallery}>
                <MainGallery />
            </div>
        </div>
    )
}

export default GalleryPage