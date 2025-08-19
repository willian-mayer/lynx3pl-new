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
import Transboarding from "./components/Transboarding";
import WeServe from "./components/WeServe";
import Storage from "./components/Storage";
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
            <section
              className="snap-start min-h-[calc(100vh-64px)]"
              id="services"
            >
              <Services />
            </section>
            <section className="snap-start min-h-[calc(100vh-64px)]" id="strengths">
              <Strengths />
            </section>
            <section className="h-screen snap-start" id="reliable-fulfillment">
              <Hero />
            </section>

            <section
              className="snap-start min-h-[calc(100vh-64px)]"
              id="warehousing"
            >
              <NewWarehousing />
            </section>
            <section className="snap-start min-h-[calc(100vh-64px)]" id="values">
              <WarehousingList />
            </section>
            <section className="h-screen snap-start" id="inventory">
              <Gallery />
            </section>
            <section className="h-screen snap-start" id="fulfillment">
              <FulfillmentFirst />
            </section>
            <section className="h-screen snap-start">
              <FulfillmentSecond />
            </section>
            <section className="h-screen snap-start" id="steps">
              <FulfillmentThird />
            </section>
            <section className="h-screen snap-start" id="transloading">
              <Transloading />
            </section>
            <section className="h-screen snap-start" id="we-serve">
              <WeServe />
            </section>
            <section className="h-screen snap-start" id="door-to-door">
              <Transboarding />
            </section>

            <section className="h-screen snap-start" id="individual-office">
              <Storage />
            </section>
            <section className="h-screen snap-start" id="sales-meeting">
              <Hall />
            </section>
            <section className="h-screen snap-start" id="reviews">
              <Reviews />
            </section>
            <section className="h-screen snap-start" id="reviews">
              <Partners />
            </section>
            <section className="h-screen snap-start" id="contact-us">
              <Form />
            </section>
            <section className="h-screen snap-start" id="let-us-talk">
              <Footer />
            </section>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
