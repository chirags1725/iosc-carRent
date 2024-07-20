import React from "react";
import img from "../Images/car-work.png";

const Works = () => {
  return (
    <div
      className="works"
      style={{
        marginTop: "100px",
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

      <div style={{ position: "relative", marginTop: "80px" }}>
        <div className="points">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text">
            <div className="heading">Browse and select</div>
            <div className="content">
              Choose from our wide range of premium cars, select the pickup and
              return dates and locations that suit you best.
            </div>
          </div>
        </div>

        <div className="points">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text">
            <div className="heading">Book and confirm</div>
            <div className="content">
              Book your desired car with just a few clicks and receive an
              instant confirmation via email or SMS.
            </div>
          </div>
        </div>

        <div className="points">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM12 17.5C14.5005 17.5 16.5 15.667 16.5 14H7.5C7.5 15.667 9.4995 17.5 12 17.5Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text">
            <div className="heading">Enjoy your ride</div>
            <div className="content">
              Pick up your car at the designated location and enjoy your premium
              driving experience with our top-quality service.
            </div>
          </div>
        </div>

        <div
          style={{
            height: "120%",
            width: "55%",
            background: "#F5F5F5",
            position: "absolute",
            top: "50%",
            right: "0px",
            zIndex: "-1",
            transform: "translate(0,-50%)",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "24px",
          }}
          className="car-image"
        >
          <img src={img} alt="car-image"></img>
        </div>
      </div>
    </div>
  );
};

export default Works;
