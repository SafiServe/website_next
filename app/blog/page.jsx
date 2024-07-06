"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import articles from "../components/article_array";
import DOMPurify from "dompurify";
import {
  UserOutlined,
  CalendarOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Loader from "../components/loading";
import Image from "next/image";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLatestPosts(articles.slice(0, 3));
      setIsLoading(false);
    }, 4000);
  }, []);

  const shareArticle = (platform, article) => {
    const url = `${window.location.origin}/post/${article.slug}`;
    const text = `${article.title}`;
    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "instagram":
        // Instagram sharing requires different approach, often through app
        alert("Please copy the link to share on instagram");
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${text} ${url}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className={`max-w-7xl mx-auto pt-24 ${styles.blogpage}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`flex gap-8 ${styles.blogpage2}`}>
          <div className={`mt-24 ${styles.articlecontainer}`}>
            {articles.map((article) => (
              <Link href={`/post/${article.slug}`} key={article.id} passHref>
                <div className={`flex-1 mb-6 ${styles.article}`}>
                  <div className={`rounded-lg ${styles.articleimagecontainer}`}>
                    <ImageWithLoader
                      src={article.thumbnail}
                      alt="Thumbnail"
                      className={`rounded-lg mb-4 ${styles.articleimage}`}
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-4 mt-2">
                    {article.title}
                  </h1>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div>
                      <span>
                        <UserOutlined
                          style={{
                            fontSize: "1.2rem",
                            color: "#fff",
                            backgroundColor: "#03519d",
                            borderRadius: "50%",
                          }}
                        />{" "}
                      </span>
                      <span> {article.author} </span>
                      <span className="mx-2">|</span>
                      <span>
                        {" "}
                        <CalendarOutlined
                          style={{
                            fontSize: "1.2rem",
                            color: "#03519d",
                          }}
                        />
                      </span>
                      <time dateTime="2023-01-01">{article.date}</time>
                    </div>
                    <span className="flex space-x-4 mr-4">
                      <TwitterOutlined
                        style={{
                          fontSize: "1rem",
                          color: "#ffff",
                          backgroundColor: "#03519d",
                          padding: "1px",
                        }}
                        onClick={() => shareArticle("twitter", article)}
                      />
                      <FacebookOutlined
                        style={{
                          fontSize: "1.2rem",
                          color: "#03519d",
                          // backgroundColor: "#03519d",
                        }}
                        onClick={() => shareArticle("facebook", article)}
                      />
                      <InstagramOutlined
                        style={{ fontSize: "1.2rem", color: "#C13584" }}
                        onClick={() => shareArticle("instagram", article)}
                      />
                      <LinkedinOutlined
                        style={{
                          fontSize: "1rem",
                          color: "#03519d",
                          backgroundColor: "#ffff",
                          padding: "1px",
                        }}
                        onClick={() => shareArticle("linkedin", article)}
                      />
                      <WhatsAppOutlined
                        style={{ fontSize: "1.2rem", color: "#25D366" }}
                        onClick={() => shareArticle("whatsapp", article)}
                      />
                    </span>
                  </div>
                  <p
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        article.content.substring(0, 200)
                      ),
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className={`w-80 ${styles.sidebar} mt-24`}>
            <div className="flex items-center mb-4 bg-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                style={{ backgroundColor: "#03519d" }}
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                🔍
              </button>
            </div>
            <div className="bg-gray-100 shadow rounded-lg p-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Blog Categories</h3>
              <ul className={`space-y-2 ${styles.categories} text-gray-500`}>
                <li>Cleaning</li>
                <li>Laundry</li>
                <li>Fumigation</li>
              </ul>
            </div>
            <div className="bg-gray-100 shadow rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">Latest News</h3>
              <ul className={`space-y-4 ${styles.latestnewslist}`}>
                {latestPosts.map((article) => (
                  <Link
                    href={`/post/${article.slug}`}
                    key={article.id}
                    passHref
                  >
                    <li className="my-5 border-b border-b-gray-300">
                      <div className="flex gap-4 items-center">
                        <div className={`${styles.sideimagecontainer}`}>
                          <ImageWithLoader
                            src={article.thumbnail}
                            alt="News thumbnail"
                            className={`rounded mr-4 ${styles.sideimage}`}
                          />
                        </div>
                        <div>
                          <time
                            dateTime="2023-01-01"
                            className="text-xs text-gray-500"
                          >
                            {article.date}
                          </time>
                          <p>{article.title}</p>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ImageWithLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${styles.articleimgcontainer}`}>
      {loading && (
        <div
          className={`absolute inset-0 flex justify-center items-center bg-gray-100`}
        >
          <Loader />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={`rounded mr-4 ${className} ${styles.articleimg}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
