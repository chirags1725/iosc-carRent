import React from "react";

const Services = () => {
  return (
    <div
      className="container-collection"
      style={{ background: "rgba(15, 15, 15, 1)", color: "white" }}
    >
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
          <h2>Our Services & Benefits</h2>
          <h4 style={{ fontWeight: "500" }}>
            To make renting easy and hassle-free, we provide a variety of
            services and advantages. We have you covered with a variety of
            vehicles and flexible rental terms.
          </h4>
        </div>

        <div className="services">
          <div className="services-block">
            <span>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="4" width="48" height="48" rx="24" fill="white" />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="8"
                />
                <path
                  d="M22.5 29L23.2845 30.5689C23.5499 31.0999 23.6827 31.3654 23.86 31.5954C24.0174 31.7996 24.2004 31.9826 24.4046 32.14C24.6346 32.3173 24.9001 32.4501 25.4311 32.7155L27 33.5L25.4311 34.2845C24.9001 34.5499 24.6346 34.6827 24.4046 34.86C24.2004 35.0174 24.0174 35.2004 23.86 35.4046C23.6827 35.6346 23.5499 35.9001 23.2845 36.4311L22.5 38L21.7155 36.4311C21.4501 35.9001 21.3173 35.6346 21.14 35.4046C20.9826 35.2004 20.7996 35.0174 20.5954 34.86C20.3654 34.6827 20.0999 34.5499 19.5689 34.2845L18 33.5L19.5689 32.7155C20.0999 32.4501 20.3654 32.3173 20.5954 32.14C20.7996 31.9826 20.9826 31.7996 21.14 31.5954C21.3173 31.3654 21.4501 31.0999 21.7155 30.5689L22.5 29Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31 18L32.1786 21.0644C32.4606 21.7976 32.6016 22.1643 32.8209 22.4726C33.0153 22.746 33.254 22.9847 33.5274 23.1791C33.8357 23.3984 34.2024 23.5394 34.9356 23.8214L38 25L34.9356 26.1786C34.2024 26.4606 33.8357 26.6016 33.5274 26.8209C33.254 27.0153 33.0153 27.254 32.8209 27.5274C32.6016 27.8357 32.4606 28.2024 32.1786 28.9356L31 32L29.8214 28.9356C29.5394 28.2024 29.3984 27.8357 29.1791 27.5274C28.9847 27.254 28.746 27.0153 28.4726 26.8209C28.1643 26.6016 27.7976 26.4606 27.0644 26.1786L24 25L27.0644 23.8214C27.7976 23.5394 28.1643 23.3984 28.4726 23.1791C28.746 22.9847 28.9847 22.746 29.1791 22.4726C29.3984 22.1643 29.5394 21.7976 29.8214 21.0644L31 18Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="heading">Quality Choice</div>
            <div className="content">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </div>
          </div>

          <div className="services-block">
            <span>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="4" width="48" height="48" rx="24" fill="white" />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="8"
                />
                <path
                  d="M29.5295 24.3519C28.9571 24.7599 28.2566 25 27.5 25C25.567 25 24 23.433 24 21.5C24 19.567 25.567 18 27.5 18C28.753 18 29.8522 18.6584 30.4705 19.6481M22 36.0872H24.6103C24.9506 36.0872 25.2889 36.1277 25.6188 36.2086L28.3769 36.8789C28.9753 37.0247 29.5988 37.0388 30.2035 36.9214L33.253 36.3281C34.0585 36.1712 34.7996 35.7854 35.3803 35.2205L37.5379 33.1217C38.154 32.5234 38.154 31.5524 37.5379 30.9531C36.9832 30.4134 36.1047 30.3527 35.4771 30.8103L32.9626 32.6449C32.6025 32.9081 32.1643 33.0498 31.7137 33.0498H29.2855L30.8311 33.0498C31.7022 33.0498 32.4079 32.3633 32.4079 31.5159V31.2091C32.4079 30.5055 31.9156 29.892 31.2141 29.7219L28.8286 29.1417C28.4404 29.0476 28.0428 29 27.6431 29C26.6783 29 24.9319 29.7988 24.9319 29.7988L22 31.0249M36 22.5C36 24.433 34.433 26 32.5 26C30.567 26 29 24.433 29 22.5C29 20.567 30.567 19 32.5 19C34.433 19 36 20.567 36 22.5ZM18 30.6L18 36.4C18 36.9601 18 37.2401 18.109 37.454C18.2049 37.6422 18.3578 37.7951 18.546 37.891C18.7599 38 19.0399 38 19.6 38H20.4C20.9601 38 21.2401 38 21.454 37.891C21.6422 37.7951 21.7951 37.6422 21.891 37.454C22 37.2401 22 36.9601 22 36.4V30.6C22 30.0399 22 29.7599 21.891 29.546C21.7951 29.3578 21.6422 29.2049 21.454 29.109C21.2401 29 20.9601 29 20.4 29L19.6 29C19.0399 29 18.7599 29 18.546 29.109C18.3578 29.2049 18.2049 29.3578 18.109 29.546C18 29.7599 18 30.0399 18 30.6Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="heading">Affordable Prices</div>
            <div className="content">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </div>
          </div>

          <div className="services-block">
            <span>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="4" width="48" height="48" rx="24" fill="white" />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="8"
                />
                <path
                  d="M25 28L27 30L31.5 25.5M23.3338 19.8187C24.1376 19.7545 24.9007 19.4385 25.5145 18.9154C26.9467 17.6949 29.0533 17.6949 30.4855 18.9154C31.0993 19.4385 31.8624 19.7545 32.6662 19.8187C34.5421 19.9684 36.0316 21.4579 36.1813 23.3338C36.2455 24.1376 36.5615 24.9007 37.0846 25.5145C38.3051 26.9467 38.3051 29.0533 37.0846 30.4855C36.5615 31.0993 36.2455 31.8624 36.1813 32.6662C36.0316 34.5421 34.5421 36.0316 32.6662 36.1813C31.8624 36.2455 31.0993 36.5615 30.4855 37.0846C29.0533 38.3051 26.9467 38.3051 25.5145 37.0846C24.9007 36.5615 24.1376 36.2455 23.3338 36.1813C21.4579 36.0316 19.9684 34.5421 19.8187 32.6662C19.7545 31.8624 19.4385 31.0993 18.9154 30.4855C17.6949 29.0533 17.6949 26.9467 18.9154 25.5145C19.4385 24.9007 19.7545 24.1376 19.8187 23.3338C19.9684 21.4579 21.4579 19.9684 23.3338 19.8187Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="heading">Convenient Online Booking</div>
            <div className="content">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
