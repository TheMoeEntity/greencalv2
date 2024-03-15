import styles from "./cards.module.css";
import man5 from "../../public/images/man5.jpeg";
import Image from "next/image";

const FeaturedCard = ({
  title,
  price,
  img,
}: {
  title: string;
  price: number;
  img: string;
}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.img}>
        <Image
          alt="Card Picture"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
        />
      </div>
      <div className={styles.deets}>
        <div>
          <h5>
            Greencal Foundation Uplifts Students Through Annual Essay Competition.
          </h5>
        </div>
        <div><p>For graduating secondary school students preparing for their SSCE or NECO exams, Greencal Foundation's essay competition provides a unique opportunity...</p></div>
        <div style={{ color: "gray" }}>
          {/* $23,000 raised */}
          View event
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
