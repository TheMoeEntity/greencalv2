import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
// import icon1 from "../../public/images/1.png";
// import icon2 from "../../public/images/2.png";
// import icon3 from "../../public/images/3.png";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              style={{
                objectFit: "cover",
              }}
              alt="Greencal-foundation logo"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>
            Giving help To Those Who Need It. Charity works make the world a better place.
          </p>
          <strong>Opening Hours :</strong> Monday Sat: 9am to 6pm

          <div className={styles.icons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div>
          <h2 style={{ marginLeft: '30px' }}>CONTACT INFO</h2>
          <div>
            <div>
              <i className="fas fa-map-marker"></i>
            </div>
            <div>Nepa Junction, Mile 50, Abakaliki, Ebonyi, Nigeria</div>
          </div>

          <div>
            <div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div>
              (+234) 807 548 9362, (+880) 155 69569 366</div>
          </div>
          <div>
            <div style={{ width: '50px' }} className={styles.footerIcons}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              info@greencal.com, info.greencal@yahoo.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Grants and Scholarships
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Food and Education
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Outreach
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            International Collaboration
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Donations
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Medical outreach
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2024 Greencal Foundation.</div>
        <div>
          <ul>
            <li>Home <i className="fas fa-circle"></i></li>
            <li>About <i className="fas fa-circle"></i></li>
            <li>Donate <i className="fas fa-circle"></i></li>
            <li>Gallery <i className="fas fa-circle"></i></li>
            <li>Contact <i className="fas fa-circle"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
