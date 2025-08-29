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
    <div className="h-screen overflow-y-scroll md:overflow-y-auto snap-y md:snap-none scroll-smooth hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Hero />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <FulfillmentFirst />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <FulfillmentSecond />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <WeServe />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Transboarding />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Gallery />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <FulfillmentThird />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="form">
          <Form />
        </section>

        <section className="h-screen snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}
