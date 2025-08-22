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
    <div className="h-screen overflow-y-scroll  hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />
        <section className="h-screen snap-start">
          <Hero />
        </section>
        <section className="h-screen snap-start">
          <FulfillmentFirst />
        </section>
        <section className="h-screen snap-start">
          <FulfillmentSecond />
        </section>
        <section className="h-screen snap-start">
          <WeServe />
        </section>
        <section className="h-screen snap-start">
          <Transboarding />
        </section>
        <section className="h-screen snap-start">
          <Gallery />
        </section>
        <section className="h-screen snap-start">
          <FulfillmentThird />
        </section>
        <section className="h-screen snap-start">
          <Form />
        </section>
        <section className="h-screen snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}
