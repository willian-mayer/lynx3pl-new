// src/pages/FulfillmentPage.tsx
import Hero from "../components/Hero";
import FulfillmentFirst from "../components/FulfillmentFirst";
import FulfillmentSecond from "../components/FulfillmentSecond";
import FulfillmentThird from "../components/FulfillmentThird";
import WeServe from "../components/WeServe";
import Transboarding from "../components/Transboarding";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function FulfillmentPage() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory md:snap-none scroll-container">
      <Navbar title="Your Company" routes={routesData} />

      <section className="h-screen snap-start flex justify-center items-center section">
        <Hero />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <FulfillmentFirst />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <FulfillmentSecond />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <WeServe />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <Transboarding />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <Gallery />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <FulfillmentThird />
      </section>

      <section
        className="h-screen snap-start flex justify-center items-center section"
        id="form"
      >
        <Form />
      </section>

      <section className="h-screen snap-start section">
        <Footer />
      </section>
    </div>
  );
}
