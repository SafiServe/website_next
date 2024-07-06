"use client";

import React, { useEffect, useState } from "react";
import Loader from "../components/loading";

const Component = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetch("https://chat.safiserve.com/api/faqs/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not get FAQs at this time");
        }
        return response.json();
      })
      .then((data) => {
        setFaqs(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Ensure loading state is false on error
      });
  }, []);

  if (isLoading) {
    return <Loader />; // Display loader while fetching data
  }

  return (
    <div className="bg-gray-100 pt-24 pb-10 h-50vh">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 pt-5">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <details key={faq.id} className="bg-white p-6 rounded-lg shadow">
              <summary className="text-lg font-medium text-gray-800 cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
