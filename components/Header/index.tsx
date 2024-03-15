'use client'
import styles from "./index.module.css";
import logo from "../../public/images/greencal_logo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Helpers } from "@/Helpers";
import { useLinks } from "@/Helpers/hooks";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const { links, LinkAction } = useLinks();
  const sideContent = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (!headerRef.current) { return }
    let number = headerRef.current.style.display === "" ? 120 : 175;
    const stickyClass = scrollTop >= number ? styles.isSticky : "";
    setSticky(stickyClass);
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (!sideContent.current) { return }
      sideContent.current.style.width = "70%";
      sideContent.current.style.visibility = "visible";
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (!sideContent.current) { return }
      sideContent.current.style.width = "0%";
      sideContent.current.style.visibility = "hidden";
    }, 400);
  };

  return (
    <div className={styles.header}>
      <div
        style={{ right: sidebar ? "0%" : "-100%" }}
        className={styles.sidebar}
      >
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ul>
            {
              links.map((x, i) => (
                <li key={i}>
                  <Link href={'/' + x.href}>{x.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div
        ref={headerRef}
        style={{ display: "flex" }}
        className={styles.headerOne}
      >
        <div>
          <div>
            <i className="fa fa-envelope"></i> greencalfoundation@gmail.com
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fas fa-map-marker"></i>Opinion Nigeria LTD prince and princess ishieke Abakaliki
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div>
          <div>
            <i style={{ color: "#0C4949" }} className="fa fa-clock"></i> Hours:
            Mon-Fri: 8.00 am - 5.00 pm &nbsp;&nbsp;&nbsp;&nbsp;|
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky}`}>
        <div>
          <Link href={`/`}>
            <Image
              src={logo}
              alt="card-image"
              style={{ objectFit: 'cover' }}
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <ul >
            {
              links.map((x, i) =>
              (
                <li key={i}>
                  <Link href={'/' + x.href}> {x.name} </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.search}>
          {/* <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div> */}
          <div style={{ color: 'white' }}>
            <a
              target={`_blank`}
              rel="noopener noreferrer"
              href="https://wa.me/+2348116177509"
            >
              {`LETS`} TALK
            </a>
          </div>
        </div>
        <div onClick={show} className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
