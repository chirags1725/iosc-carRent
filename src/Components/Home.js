import React from "react";
import { LuMenu } from "react-icons/lu";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";

const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    (date.getMonth() + 1).toString().length > 1
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1);
  const date_today =
    date.getDate().toString().length > 1
      ? date.getDate()
      : "0" + date.getDate();
  const current_date = year + "-" + month + "-" + date_today;

  return (
    <div>
      <div className="home">
        <div className="navbar">
          <div className="menu">||</div>
          <div className="logo">
            LUX
            <LuMenu />
            DRIV
            <LuMenu />
          </div>
          <div className="login">Login / Register</div>
        </div>
        <h2>Discover the world on wheels with our car rental service</h2>
      </div>

      <div className="home-box">
        <div>
          <div className="text">Pick-up Location</div>
          <input
            type="text"
            placeholder="Search a location"
            style={{
              paddingLeft: "30px",
              backgroundImage: `url('data:image/svg+xml;base64,${btoa(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.42 6.4 12.96 6.72 13.35a1 1 0 0 0 1.56 0c.32-.39 6.72-9.03 6.72-13.35 0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>'
              )}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "8px center",
              backgroundSize: "14px 14px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="text">Pick-up Date</div>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-gb"
          >
            <DatePicker
              defaultValue={dayjs(current_date)}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              disablePast
            ></DatePicker>
          </LocalizationProvider>
        </div>
        <div>
          <div className="text">Drop-off Location</div>
          <input
            type="text"
            placeholder="Search a location"
            style={{
              paddingLeft: "30px",
              backgroundImage: `url('data:image/svg+xml;base64,${btoa(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.42 6.4 12.96 6.72 13.35a1 1 0 0 0 1.56 0c.32-.39 6.72-9.03 6.72-13.35 0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>'
              )}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "8px center",
              backgroundSize: "14px 14px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="text">Drop-off Date</div>
          <div>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en-gb"
            >
              <DatePicker
                defaultValue={dayjs(current_date)}
                slotProps={{
                  textField: {
                    helperText: "MM/DD/YYYY",
                  },
                }}
                disablePast
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
        <div className="button">Find a vehicle &#8594;</div>
      </div>
    </div>
  );
};

export default Home;
