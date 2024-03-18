import Hero from "@/components/Hero";
import styles from "./page.module.css";
import About from "@/components/About";
import FundRaisers from "@/components/FundRaisers";
import Testimonials from "@/components/Testimonials";
import '../components/EventsPage/style.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <FundRaisers />
      <Testimonials />
    </main>
  );
}
