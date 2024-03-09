import Hero from "@/components/Hero";
import styles from "./page.module.css";
import About from "@/components/About";


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
}
