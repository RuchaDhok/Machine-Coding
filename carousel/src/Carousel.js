import { useState } from "react";
import { IMAGE_LIST } from "./utils/constant";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const imageList = IMAGE_LIST;

  function handleNext() {
    if (index === imageList.length - 1) setIndex(0);
    else {
      setIndex(index + 1);
    }
  }
  function handlePrevious() {
    if (index === 0) {
      setIndex(imageList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <div className="main-container">
        <h1>Carousel</h1>
        <div className="sub-container">
          <button className="button" onClick={handlePrevious}>
            Prev
          </button>
          <img className="image" src={imageList[index]} alt="images" />
          <button className="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
