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
            <section className="h-screen snap-start">
              <Strengths />
            </section>
            <section className="h-screen snap-start">
              <NewWarehousing />
            </section>
            <section className="h-screen snap-start">
              <WarehousingList />
            </section>
            <section className="h-screen snap-start">
              <Gallery />
            </section>
            <section className="h-screen snap-start">
              <FulfillmentFirst />
            </section>
            <section className="h-screen snap-start">
              <FulfillmentSecond />
            </section>
            <section className="h-screen snap-start">
              <FulfillmentThird />
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
              <Footer />
            </section>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
