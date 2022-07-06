import React, { useState } from "react";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";

// data
import { data } from "../data/data";

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  function handlePreviousBtn() {
    index > 0 ? setIndex(index - 1) : "";
  }

  function handleNextBtn() {
    index < data.length - 1 ? setIndex(index + 1) : "";
  }

  return (
    <div className="carousel">
      <button
        className="carousel--button left"
        type="button"
        aria-label="Previous button"
        onClick={() => handlePreviousBtn()}
      >
        <span className="visually-hidden">Previous</span>
        <CaretCircleLeft size={32} color="#fcf9f1" weight="fill" />
      </button>

      <button
        className="carousel--button right"
        type="button"
        aria-label="Next button"
        onClick={() => handleNextBtn()}
      >
        <span className="visually-hidden">Next</span>
        <CaretCircleRight size={32} color="#fcf9f1" weight="fill" />
      </button>

      <div className="carousel--content">
        <p className="carousel--content-title">{data[index].title}</p>
        <p className="carousel--content-description">
          {data[index].description}
        </p>
        <div className="carousel--container-images">
          <div className="carousel--content-image">
            <img
              className="carousel--image"
              src={data[index].image}
              alt="Random Image"
            />
          </div>

          <div className="carousel--content-image">
            <img
              className="carousel--image"
              src={data[index + 1].image}
              alt="Random Image"
            />
          </div>
          <div className="carousel--content-image">
            <img
              className="carousel--image"
              src={data[index].image}
              alt="Random Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
