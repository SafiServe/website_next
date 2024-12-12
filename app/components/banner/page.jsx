import image1 from "../../../public/pictures/afro-woman-cleaning-window-with-rag-home-ezgif.com-resize.webp";
import image2 from "../../../public/pictures/front-view-man-cleaning-indoors-ezgif.com-resize.webp";
import image3 from "../../../public/pictures/person-wearing-yellow-rubber-boots.webp";
import image4 from "../../../public/pictures/woman_holding_up_detergent-ezgif.com-resize.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css";
import Image from "next/image";

export default function Banner() {
  // WhatsApp redirect
  const phoneNumber = "256781856352";
  const message = "Hi";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return (
    <div
      className={`${styles.herosection} py-6 px-4 md:px-0 ${styles.bannerleft}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center w-3/4 pt-16">
        {/* Left side with text */}
        <div className="md:w-1/2 md:pr-12 text-center md:text-left pt-8 relative ">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Safiserve
            <br />
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The fastest, & most affordable way to order  <br/>reliable services, 
          via WhatsApp! No extra app to install.
          </p>
          <div className={`flex items-center gap-4 ${styles.bannerbutton}`}>
            <a
              href={whatsappLink}
              className={`flex items-center gap-2 ${styles.orderonwhatsappbutton}`}
              variant="outline"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Order Here
            </a>
          </div>
        </div>

        {/* Right side with floating circular images */}
        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <div
            className={`grid grid-cols-2 gap-4 pl-16  ${styles.bannerimagecontainer}`}
          >
            {/* Circular images */}
            <div className={`${styles.imagediv1}`}>
              <Image
                src={image2}
                alt="Service 1"
                className={`${styles.bannerimage}`}
              />
            </div>
            <div className={`${styles.imagediv2}`}>
              <Image
                src={image1}
                alt="Service 2"
                className={`${styles.bannerimage}`}
              />
            </div>
            <div className={`${styles.imagediv3} ml-8`}>
              <Image
                loading="lazy"
                src={image4}
                alt="Service 3"
                className={`${styles.bannerimage}`}
              />
            </div>
            <div className={`${styles.imagediv4} ml-2 mt-8`}>
              <Image
                src={image3}
                alt="Service 4"
                className={`${styles.bannerimage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
