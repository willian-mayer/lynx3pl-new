// src/App.tsx
import "./App.css";
import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Strengths from "./components/Strengths";
import Reviews from "./components/Reviews";
import Hall from "./components/Hall";
import Partners from "./components/Partners";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import routes from "./data/routes.json";
import NewWarehousing from "./components/NewWarehousing";
import WarehousingList from "./components/WarehousingList";
import FulfillmentFirst from "./components/FulfillmentFirst";
import FulfillmentSecond from "./components/FulfillmentSecond";
import FulfillmentThird from "./components/FulfillmentThird";
import Gallery from "./components/Gallery";
import Transloading from "./components/Transloading";
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
            <section className="snap-start min-h-[calc(100vh-64px)]" id="services">
              <Services />
            </section>
            <section className="h-screen snap-start">
              <Hero />
            </section>
            <section className="snap-start min-h-[calc(100vh-64px)]">
              <Strengths />
            </section>
            <section className="snap-start min-h-[calc(100vh-64px)]" id="warehousing">
              <NewWarehousing />
            </section>
            <section className="snap-start min-h-[calc(100vh-64px)]">
              <WarehousingList />
            </section>
            <section className="h-screen snap-start">
              <Gallery />
            </section>
            <section className="h-screen snap-start" id="fulfillment">
              <FulfillmentFirst />
            </section>
            <section className="h-screen snap-start">
              <FulfillmentSecond />
            </section>
            <section className="h-screen snap-start" id="how-it-works">
              <FulfillmentThird />
            </section>
            <section className="h-screen snap-start" id="transloading">
              <Transloading />
            </section>
            <section className="h-screen snap-start" id="reviews">
              <Reviews />
            </section>
            <section className="h-screen snap-start" id="convention">
              <Hall />
            </section>
            <section className="h-screen snap-start">
              <Partners />
            </section>
            <section className="h-screen snap-start" id="form">
              <Form />
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
