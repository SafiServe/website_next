"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import logo1 from "../../public/picture_logos/blue_mark.png";
import lawn from "../../public/pictures/person-wearing-yellow-rubber-boots.webp";
import laundry from "../../public/pictures/woman_holding_up_detergent-ezgif.com-resize.webp";
import provider from "../components/serviceprovidersarray";
import Image from "next/image";
import Loader from "../components/loading";

const ImageWithLoader = ({ src, alt, className, onLoad }) => {
  return (
    <div className="relative">
      <Image src={src} alt={alt} className={className} onLoad={onLoad} />
    </div>
  );
};

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div
        className={`${styles.section1container} pt-0 text-gray-500 bg-gray-100`}
      >
        <div className={`${styles.section1}`}>
          <div className={`${styles.section1image} pt-8 px-4`}>
            <ImageWithLoader
              src={lawn}
              alt="Lawn"
              onLoad={() => setLoading(false)}
            />
          </div>
          <div className={`${styles.section1content} py-8 px-4`}>
            <h3 className={`${styles.section1head1}`}>OUR COMPANY OFFERS</h3>
            <p className={`${styles.section1head2} pt-4 ${styles.semihead}`}>
              The Best Solution For All Your Home Services
            </p>
            <p className={`${styles.section1paragraph} pt-2`}>
              Safiserve is your go-to platform for connecting with top-rated
              service providers for all your everyday needs. Whether you're
              looking for laundry services, home cleaning, or a fresh haircut,
              we've got you covered. Our mission is to simplify your life by
              bringing trusted professionals right to your doorstep. At
              Safiserve, we believe in convenience, quality, and reliability.
              Discover the easiest way to find and book the services you need,
              when you need them. Thank you for choosing us to make your day a
              little easier.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.section2container} ${styles.menu} pt-0 text-gray-500`}>
        <section className={`bg-white py-12 ${styles.questions}`}>
          <div className={`${styles.container} mx-auto px-4`}>
            <h2
              className={`text-4xl text-gray-700 font-bold mb-4 ${styles.semihead}`}
            >
              Why Choose Us?
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-200 p-4 rounded">
                <summary className="font-semibold cursor-pointer">
                  24/7 Support
                </summary>
                <p className="text-gray-700 mt-2">
                  Place Orders at anytime and we will receive and process it
                </p>
              </details>
              <details className="bg-gray-200 p-4 rounded">
                <summary className="font-semibold cursor-pointer">
                  Client's Reviews
                </summary>
                <p className="text-gray-700 mt-2">
                  Read what our satisfied clients have to say about our
                  services.
                </p>
              </details>
              <details className="bg-gray-200 p-4 rounded">
                <summary className="font-semibold cursor-pointer">
                  Vetted service providers
                </summary>
                <p className="text-gray-700 mt-2">
                  All services providers are professionals with years of
                  experience in their respective industries
                </p>
              </details>
              <details className="bg-gray-200 p-4 rounded">
                <summary className="font-semibold cursor-pointer">
                  Orders are placed on whatsapp
                </summary>
                <p className="text-gray-700 mt-2">
                  Whatsapp is an easy to use and familiar app to everyone so its
                  very easy to place orders with us
                </p>
              </details>
              <details className="bg-gray-200 p-4 rounded">
                <summary className="font-semibold cursor-pointer">
                  Discounts
                </summary>
                <p className="text-gray-700 mt-2">
                  We offer frequent discounts with a current one running of 10%
                  off all services
                </p>
              </details>
            </div>
          </div>
        </section>
        <div className={`${styles.section2image} pt-8 px-4`}>
          <ImageWithLoader
            src={logo1}
            alt="Logo 1"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>

      <div className={`bg-gray-100 pb-16 ${styles.section3container}`}>
        <div className={`${styles.section3} bg-gray-100`}>
          <h1
            className={`text-4xl text-gray-700 font-bold mb-4 ${styles.semihead}`}
          >
            Top Service Providers
          </h1>
          <div className={`${styles.cardsection}`}>
            {provider.map((provider) => (
              <div
                key={provider.id}
                className="card bg-white shadow pb-8 px-2 pt-2 rounded"
              >
                <ImageWithLoader
                  src={provider.image}
                  alt={provider.name}
                  className={`providerImage-${provider.id}`}
                  onLoad={() => setLoading(false)}
                />
                <p className="px-2 py-6 font-semibold text-gray-800">
                  {provider.name}
                </p>
                <p className="px-2 text-gray-500">{provider.serviceType}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.section1container} pt-0 text-gray-500`}>
        <div className={`${styles.section1}`}>
          <div className={`${styles.section1image} pt-8 px-4 sm:pt-2 `}>
            <ImageWithLoader
              src={laundry}
              alt="Laundry"
              onLoad={() => setLoading(false)}
            />
          </div>
          <div className={`${styles.section1content} py-8 px-4`}>
            <h3 className={`${styles.section1head1}`}>Our Vision & Mission</h3>
            <p className={`${styles.section1head2} pt-4 ${styles.semihead}`}>
              Vision
            </p>
            <p className={`${styles.section1paragraph} pt-2`}>
              To enrich lives and businesses by offering a versatile, digital
              platform that connects vetted service providers to customers
              across residential, tourist, and professional settings, thereby
              ensuring quality, reliability, and convenience.
            </p>
            <p className={`${styles.section1head2} pt-4 ${styles.semihead}`}>
              Mission
            </p>
            <p className={`${styles.section1paragraph} pt-2`}>
              To become the global standard for connecting individuals and
              businesses to a comprehensive range of services, facilitated by
              state-of-the-art technology and characterized by trust,
              excellence, and community engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
