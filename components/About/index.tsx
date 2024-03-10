'use client'
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/outreach8.jpg";
import { useRouter } from "next/navigation";
import shape from "../../public/images/shape-1.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
const About = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }

    // if (!inView) {
    //   setVisible(false);
    // }
  }, [inView]);
  const { push } = useRouter()
  return (
    <div className={styles.about}>
      <div ref={ref} className={styles.test}></div>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-book"></i>
          </div>
          <div>
            <strong>Education & Food</strong>
          </div>
          <div>
            <p>
              Empowering young minds with knowledge and nourishment for a brighter future.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-hand"></i>
          </div>
          <div>
            <strong>Outreach</strong>
          </div>
          <div>
            <p>
              Extending a helping hand to communities through impactful outreach initiatives.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <strong>Grants & Scholarships</strong>
          </div>
          <div>
            <p>
              Fueling dreams with opportunities through grants and scholarships for aspiring minds.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={visible ? `${styles.man} ${styles.animClass}` : styles.man}
        >
          <Image
            src={man}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={
            visible ? `${styles.stuff} ${styles.animClass2}` : styles.stuff
          }
        >
          <div className={styles.img}>
            <div>
              <Image
                src={shape}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <h4>&nbsp; &nbsp; &nbsp;WHO WE ARE??</h4>
          <h2>Empowering Lives, Building Futures: Our Commitment to Positive Change.</h2>
          <p>
            At Greencal Foundation, we're passionate about transforming lives in Abakaliki, Ebonyi State. With a focus on education, food outreach, and scholarships, we strive to create a brighter future for children, fostering a community of empowerment and growth.
          </p>
          <button onClick={() => push('/about')}>KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
