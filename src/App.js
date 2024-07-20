import "./App.css";
import Collection from "./Components/Collection";
import Home from "./Components/Home";
import Rent from "./Components/Rent";
import React from "react";
import Works from "./Components/Works";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import DownloadApp from "./Components/App";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Rent />
      <Collection></Collection>
      <Works></Works>
      <Services></Services>
      <Testimonials></Testimonials>
      <DownloadApp></DownloadApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
