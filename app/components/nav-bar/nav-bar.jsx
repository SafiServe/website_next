import React, { useState, useEffect, useRef } from "react";
import styles from "./nav-bar.module.css";
import Image from "next/image";
import logoImage from "../../../public/picture_logos/real-logo2.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const phoneNumber = "256781856352";
  const message = "Hi";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;
      setIsScrolled(scrollPosition > threshold);
    };

    const handleMouseDown = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section
      className={`flex justify-around px-5 py-4 bg-white shadow-sm ${styles.header}`}
    >
      <div className={`${styles.mobilemenutoggle}`} onClick={toggleMobileMenu}>
        <div className={`${styles.menuicon}`}></div>
        <div className={`${styles.menuicon}`}></div>
        <div className={`${styles.menuicon}`}></div>
      </div>

      <div>
        <Link href="/">
          <Image src={logoImage} alt="logo" className={`${styles.logo}`} />
        </Link>
      </div>

      <nav
        ref={menuRef}
        className={`flex items-center gap-10 font-semibold text-gray-500 ${
          styles.navlist
        } ${isMobileMenuOpen ? styles.mobilemenuopen : ""}`}
      >
        <div className={`${styles.navitem}`} onClick={handleNavItemClick}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${styles.navitem}`} onClick={handleNavItemClick}>
          <Link href="/about">About</Link>
        </div>
        <div className={`${styles.navitem}`} onClick={handleNavItemClick}>
          <Link href="/faqs">FAQs</Link>
        </div>
        <div className={`${styles.navitem}`} onClick={handleNavItemClick}>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href={whatsappLink}
          className={`flex items-center gap-2 ${styles.orderonwhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          Order Here
        </a>
      </div>
    </section>
  );
}
