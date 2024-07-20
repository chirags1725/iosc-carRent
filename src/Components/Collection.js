import React, { useState } from "react";
import carCollection from "../Data/car_collection.json";
import CollectionBox from "./CollectionBox";

const Collection = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  // Array of divs or items you want to render
  const divs = [
    "Popular Car",
    "Luxury Car",
    "Vintage Car",
    "Family Car",
    "Off-Road Car",
  ];

  const handleClick = (index) => {
    setClickedIndex(index); // Update clickedIndex state to current index
  };

  return (
    <div className="container-collection">
      <div
        className="collection"
        style={{
          width: "85%",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="heading">
          <h2>Our Impressive Collection of Cars</h2>
          <h4>
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </h4>
        </div>

        <div className="buttons">
          {divs.map((div, index) => (
            <div
              key={index}
              className={`clickable-div ${
                clickedIndex === index ? "clicked" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {div}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: "20px",
            marginTop: "28px",
            rowGap: "28px",
          }}
        >
          {carCollection &&
            carCollection.map((e, index) => {
              return (
                <div key={index}>
                  <CollectionBox data={e}></CollectionBox>
                </div>
              );
            })}
        </div>
        <div
          style={{
            padding: "16px 40px 16px 40px",
            borderRadius: "64px",
            background: "black",
            color: "white",
            width: "fit-content",
            left: "50%",
            position: "relative",
            transform: "translateX(-50%)",
            marginTop: "40px",
          }}
        >
          See all Cars &#8594;
        </div>
      </div>
    </div>
  );
};

export default Collection;
