import salon from "../../public/pictures/cutting_hair-ezgif.com-resize.webp";
import laundry from "../../public/pictures/suits-ezgif.com-resize.webp";
import cleaning from "../../public/pictures/mopping_floor-ezgif.com-resize.webp";
import fumigation from "../../public/pictures/man-with-tank-reservoir-his-back-spraying-disinfectant-stop-corona-virus-resize.webp";
import makeup from "../../public/pictures/beauty-portrait-make-up-portrait-make-up-ezgif.com-resize.webp";
import nails from "../../public/pictures/ezgif.com-jpg-to-webp-converter.webp";

import {
  SkinOutlined,
  BugOutlined,
  ScissorOutlined,
  EyeOutlined,
  HighlightOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Cleaning",
    icon: <HomeOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: cleaning,
  },
  {
    name: "Nails",
    icon: <HighlightOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: nails,
  },
  {
    name: "Laundry",
    icon: <SkinOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: laundry,
  },
  {
    name: "Fumigation",
    icon: <BugOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: fumigation,
  },
  {
    name: "Salon",
    icon: <ScissorOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: salon,
  },
  {
    name: "Makeup",
    icon: <EyeOutlined style={{ fontSize: "36px", color: "#03519d" }} />,
    image: makeup,
  },
];

function ServicesSection() {
  const phoneNumber = "256781856352";
  const message = "Hi";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="bg-gray-100">
      <div className="services-section container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl py-8 md:py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-4 bg-white shadow-md rounded-lg flex flex-col items-center justify-center relative"
            >
              <div
                className={`rounded-full bg-gray-200 p-4 mb-4 ${styles.serviceicon}`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-xl font-semibold text-center p-4 pt-2 ${styles.servicename}`}
              >
                {service.name}
              </h3>
              <Link
                href={whatsappLink}
                className={`${styles.servicecardbutton}`}
              >
                <div>Order</div>
              </Link>
              {/* <Image
                src={service.image}
                alt={service.name}
                className={`${styles.serviceimage}`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
