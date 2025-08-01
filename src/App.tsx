// src/App.tsx
import "./App.css";
// import { useState } from "react";
import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Navbar from "./components/Navbar";
// import routes from "./data/routes.json";
import Strengths from "./components/Strengths";
// import Gallery from "./components/Gallery";
import WeServe from "./components/WeServe";
import Warehousing from "./components/Warehousing";
import Fulfillment from "./components/Fulfillment";
import Transloading from "./components/Transloading";
import Reviews from "./components/Reviews";
import Hall from "./components/Hall";
import Partners from "./components/Partners";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Box from "./components/Box";
// import WatchUs from "./components/WatchUs";
import Navbar from "./components/Navbar";
import routes from "./data/routes.json";
import NewWarehousing from "./components/NewWarehousing";
function App() {
  return (
    <>
      <>
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
          <section className="h-screen snap-start">
            <Entrance />
          </section>
          <div className="navbar">
            <Navbar title="Your Company" routes={routes} />
            <section className="h-screen snap-start" id="services">
              <Services />
            </section>
            <section className="h-screen snap-start">
              <Hero />
            </section>

            {/* <section className="h-screen snap-start">
              <WatchUs />
            </section> */}
            <section className="h-screen snap-start">
              <Strengths />
            </section>
            <section className="h-screen snap-start">
              <NewWarehousing />
            </section>
            {/* <section className="h-screen snap-start">
              <Gallery />
            </section> */}
            <section className="h-screen snap-start">
              <WeServe />
            </section>
            <section className="h-screen snap-start">
              <Warehousing />
            </section>
            <section className="h-screen snap-start">
              <Fulfillment />
            </section>
            <section className="h-screen snap-start">
              <Transloading />
            </section>
            <section className="h-screen snap-start" id="reviews">
              <Reviews />
            </section>
            <section className="h-screen snap-start">
              <Hall />
            </section>
            <section className="h-screen snap-start">
              <Partners />
            </section>
            <section className="h-screen snap-start" id="form">
              <Form />
            </section>
            <section className="h-screen snap-start">
              <Box />
            </section>
            <section className="h-screen snap-start">
              <Footer />
            </section>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
