import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import whitelogo from "../../../public/picture_logos/whitelogonobackground.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className={`${styles.footercontainer}`}>
        {/* Section 1: Company Description */}
        <div className={`${styles.aboutus}`}>
          <Image
            alt="logo"
            src={whitelogo}
            style={{
              height: "50px",
            }}
          />
          <p className="text-sm mt-4">
            Your one-stop destination for all your home needs. Get trusted
            laundry, cleaning services and more right at your door-step!
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className={`${styles.quicklinks}`}>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faqs" passHref>
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contacts */}
        <div className={`${styles.contacts}`}>
          <h3 className="text-lg font-bold mb-4">Contacts</h3>
          <ul className="text-sm">
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              0772069708
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@safiserve.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              AAA Complex Kisaasi
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media Icons and Newsletter Signup Form */}
        <div
          className={`flex flex-col items-center md:items-start ${styles.socials}`}
        >
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.tiktok.com/@safiserveug?_t=8m0nxG8vitB&_r=1"
              target="_blank"
              className="text-lg"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className={`${styles.mediaicon}`}
              />
            </a>
            <a
              href="https://x.com/safiserveug?s=11"
              target="_blank"
              className="text-lg"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`${styles.mediaicon}`}
              />
            </a>
            <a
              href="https://www.instagram.com/safiserveug?igsh=MWMzc3ljMHY0M2E2Zw=="
              target="_blank"
              className="text-lg"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${styles.mediaicon}`}
              />
            </a>
            <a href="#" target="_blank" className="text-lg" rel="noreferrer">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={`${styles.mediaicon}`}
              />
            </a>
            <a href="#" target="_blank" className="text-lg" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${styles.mediaicon}`}
              />
            </a>
          </div>
          {/* Newsletter Signup Form */}
          <div className={`mt-4 ${styles.newsletter}`}>
            <h3 className="text-lg font-bold mb-2">
              Subscribe to our Newsletter
            </h3>
            <form className={`flex items-center ${styles.form}`}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:border-blue-300">
                <FontAwesomeIcon icon={faPaperPlane} /> {/* Paper plane icon */}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${styles.privacy}`}>
        <p>© 2024 SafiServe. All rights reserved</p>
        <p className="terms">
          <span>
            <Link href="/PrivacyPolicy" passHref>
              Terms and Conditions
            </Link>
          </span>{" "}
          |{" "}
          <span>
            <Link href="/PrivacyPolicy" passHref>
              Privacy
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
