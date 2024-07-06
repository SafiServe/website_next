import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "../components/Loader";
import moment from "moment";
import DOMPurify from "dompurify";
import articles from "./article_array";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Articles:", articles); // Check if articles is imported correctly
    console.log("Is articles an array?", Array.isArray(articles));
    const fetchPost = () => {
      const article = articles.find(
        (article) => article.id === parseInt(id, 10)
      );
      if (article) {
        setPost(article);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center gap-2 w-full min-h-[400px] p-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Article Not Found
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              The post you are looking for does not exist.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex h-10 items-center text-white justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Go Back
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen mt-20 max-w-5xl mx-auto px-4">
        <main className="px-4 py-6 md:px-6 lg:py-12">
          <article className="prose prose-gray mx-auto dark:prose-invert">
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-8">
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
                      // backgroundColor: "#03519d",
                    }}
                  />
                </span>
                <time dateTime="2023-01-01">{post.date}</time>
              </div>
            </div>
            <div className="main-article-image-container my-4 rounded-lg">
              <img
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
    </Layout>
  );
};

export default PostPage;
