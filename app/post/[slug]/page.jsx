"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import articles from "../../components/article_array";
import {
  UserOutlined,
  CalendarOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import DOMPurify from "dompurify";
import Link from "next/link";
import Loader from "../../components/loading";
import Image from "next/image";

const ImageWithLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
          <Loader />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const article = articles.find((article) => article.slug === slug);
      if (article) {
        setPost(article);
      }
      setIsLoading(false);
    }
  }, [slug]);

  const shareArticle = (platform, post) => {
    const url = `${window.location.origin}/post/${post.slug}`;
    const text = `${post.title}`;
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 w-full min-h-[400px] p-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Article Not Found
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            The post you are looking for does not exist.
          </p>
        </div>
        <Link href="/" passHref>
          <div className="inline-flex h-10 items-center text-white justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
            Go Back
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 max-w-5xl mx-auto px-4">
      <main className="px-4 py-6 md:px-6 lg:py-12">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              {post.title}
            </h1>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4 bg-red">
              <div className="mt-24">
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
                <span> {post.author} </span>
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
                <time dateTime="2023-01-01">{post.date}</time>
              </div>
              <span className="flex space-x-4 mr-4">
                <TwitterOutlined
                  style={{
                    fontSize: "1rem",
                    color: "#ffff",
                    backgroundColor: "#03519d",
                    padding: "1px",
                  }}
                  onClick={() => shareArticle("twitter", post)}
                />
                <FacebookOutlined
                  style={{
                    fontSize: "1.2rem",
                    color: "#03519d",
                    // backgroundColor: "#03519d",
                  }}
                  onClick={() => shareArticle("facebook", post)}
                />
                <InstagramOutlined
                  style={{ fontSize: "1.2rem", color: "#C13584" }}
                  onClick={() => shareArticle("instagram", post)}
                />
                <LinkedinOutlined
                  style={{
                    fontSize: "1rem",
                    color: "#03519d",
                    backgroundColor: "#ffff",
                    padding: "1px",
                  }}
                  onClick={() => shareArticle("linkedin", post)}
                />
                <WhatsAppOutlined
                  style={{ fontSize: "1.2rem", color: "#25D366" }}
                  onClick={() => shareArticle("whatsapp", post)}
                />
              </span>
            </div>
          </div>
          <div className="main-article-image-container my-4 rounded-lg">
            <ImageWithLoader
              src={post.imageSrc[0]}
              alt="image"
              className="main-article-image"
            />
          </div>
          <div
            className="pb-5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content),
            }}
          />
        </article>
      </main>
    </div>
  );
};

export default PostPage;
