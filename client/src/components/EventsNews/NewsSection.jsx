import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsSection.css"; // Optional: For styling the news section

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "(solar OR renewable energy OR Solar) AND India",
            apiKey: "8e37bcc6a807441bbffbd8c86b8894ae",
            freshness: "Day", // You can adjust this to "Week" or "Month" if you want a broader range
            mkt: "en-IN", // Market set to India (en-IN for English, India)
            sortBy: "Date",
          },
        });
        // Limit the number of articles to 15
        setArticles(response.data.articles.slice(0, 16));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err); // Log the detailed error
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="news-section">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col h-auto border-x-2 border-y-2 border-gray-400 rounded-sm"
          >
            <img
              className="w-full h-64 object-cover"
              src={article.urlToImage}
              alt={article.title}
            />
            <div className="p-4 flex flex-col justify-between leading-normal">
              <div className="mb-0">
                <p className="text-gray-600">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {article.title}
                </div>
                <p className="text-gray-700 text-base">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

//8e37bcc6a807441bbffbd8c86b8894ae
