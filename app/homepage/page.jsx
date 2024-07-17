"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";
import Banner from "../components/banner/page";
import Icons from "../components/Icons";
import Services from "../our-services/page";
import articles from "../components/article_array";
import discount1 from "../../public/promotions/discount.png";
import safilogo from "../../public/picture_logos/white_mark.png";
import styles from "./page.module.css";

// Loader Component
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </div>
  );
};

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [latestPosts, setLatestPosts] = useState([]);

  // WhatsApp redirect
  const phoneNumber = "256781856352";
  const message = "Hi";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    // Simulating data fetch delay for demonstration
    setTimeout(() => {
      setLatestPosts(articles.slice(0, 3));
      setIsLoading(false); // Set loading to false after data is fetched
    }, 2000); // Adjust delay as per your API response time
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display loader for the entire page while fetching data
      ) : (
        <>
          <div className={`${styles.page}`}>
            <div className={`${styles.bannercontainer} pt-16`}>
              <Banner />
            </div>
            <div className="pt-10">
              <Services />
            </div>
            <div className={`${styles.discountbannercontainer}`}>
              <div className={`${styles.discountbanner}`}>
                <Image
                  src={discount1}
                  alt="lady pointing to the right"
                  className={`${styles.discountimage}`}
                />
                <div className={`${styles.discountcontent}`}>
                  <h1>We are offering a 10% Discount on all services</h1>
                  <a href={whatsappLink} className={`${styles.discountbutton}`}>
                    <button className="m-5">Get Discount Here</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.howtoorder} bg-gray-100`}>
              <h2 className="text-2xl text-center font-bold pb-16">
                How To Order
              </h2>
              <Icons />
            </div>
            <div className="bg-white mb-8">
              <h1 className="text-3xl text-center font-bold my-6">Our Blog</h1>
              <h3 className="text-xl text-center font-semibold mb-4">
                Latest Articles
              </h3>
              <div className={`flex flex-wrap justify-center gap-4 px-4 ${styles.blogList}`}>
                {latestPosts.map((article) => (
                  <BlogPost key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Individual Blog Post Component
const BlogPost = ({ article }) => {
  return (
    <Link href={`/post/${article.slug}`}>
      <div
        className={`max-w-sm w-full bg-gray-100 border border-gray-200 shadow-md ${styles.articlecard}`}
      >
          <Image
            src={article.thumbnail}
            alt={article.title}
            // width={'30vw'}
            // height={170}
            className={`object-cover ${styles.articleimage}`}
          />

        <div className="p-5">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {article.title}
          </h3>
          <p
            className="mt-2 text-gray-600 line-clamp-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content.substring(0, 200)),
            }}
          />
          <div className="flex items-center mt-4">
            <Image
              src={safilogo}
              alt="Safiserve logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-2 text-sm font-medium text-gray-900">
              {article.author}
              <span className="block text-gray-500">{article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
