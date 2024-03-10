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
            Water is life. Clean Water in Urban Africa.
          </h5>
        </div>
        <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sint nemo officiis. Eaque deleniti dignissimos sequi dolore inventore assumenda non.</p></div>
        <div style={{ color: "gray" }}>
          $23,000 raised
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
