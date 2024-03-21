import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    fetchImages();
    window.addEventListener("scroll", fetchData);
    return () => window.removeEventListener("scroll", fetchData);
  }, []);

  function fetchData() {
    if (
      Math.ceil(window.scrollY + window.innerHeight) >=
      document.body.scrollHeight
    ) {
      fetchImages();
    }
  }

  const fetchImages = async () => {
    setShimmer(true);
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
    );
    const data = await response.json();
    setShimmer(false);
    setImages((prev) => [...prev, ...data.photos]);
  };

  // if (images.length === 0 || undefined) {
  //   return <Shimmer />;
  // }

  return (
    <div className="main-container">
      <h1 className="header">Infinite Scroll</h1>
      <div className="body">
        {images?.map((image, index) => (
          <img
            src={image.url}
            alt="fetch-url"
            className="images"
            key={index}
          ></img>
        ))}
        {shimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default InfiniteScroll;
