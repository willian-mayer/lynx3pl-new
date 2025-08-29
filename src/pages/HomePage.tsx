// src/pages/HomePage.tsx
import Entrance from "../components/Entrance";
import Hero from "../components/Hero";
import Strengths from "../components/Strengths";
import Reviews from "../components/Reviews";
import Hall from "../components/Hall";
import Partners from "../components/Partners";
import Form from "../components/Form";
import Footer from "../components/Footer";
import NewWarehousing from "../components/NewWarehousing";
import WarehousingList from "../components/WarehousingList";
import FulfillmentFirst from "../components/FulfillmentFirst";
import FulfillmentSecond from "../components/FulfillmentSecond";
import FulfillmentThird from "../components/FulfillmentThird";
import Gallery from "../components/Gallery";
import Transloading from "../components/Transloading";
import Transboarding from "../components/Transboarding";
import WeServe from "../components/WeServe";
import Storage from "../components/Storage";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll md:overflow-y-auto snap-y md:snap-none scroll-smooth hide-scrollbar overflow-x-hidden">
      {/* Entrance */}
      <section className="h-screen snap-start md:flex md:justify-center md:items-center">
        <Entrance />
      </section>

      <div>
        <Navbar title="Your Company snap-start" routes={routesData} />

        <section className="h-screen snap-start md:min-h-[calc(100vh-64px)] md:flex md:justify-center md:items-center">
          <Services />
        </section>

        <section
          className="snap-start min-h-[calc(100vh-64px)] md:flex md:justify-center md:items-center"
          id="why-us"
        >
          <Strengths />
        </section>

        <section
          className="h-screen snap-start md:flex md:justify-center md:items-center"
          id="reliable-fulfillment"
        >
          <Hero />
        </section>

        <section
          className="snap-start min-h-[calc(100vh-64px)] md:flex md:justify-center md:items-center"
          id="warehousing"
        >
          <NewWarehousing />
        </section>

        <section
          className="snap-start min-h-[calc(100vh-64px)] md:flex md:justify-center md:items-center"
          id="values"
        >
          <WarehousingList />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="inventory">
          <Gallery />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <FulfillmentFirst />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <FulfillmentSecond />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="steps">
          <FulfillmentThird />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="transloading">
          <Transloading />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="we-serve">
          <WeServe />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="door-to-door">
          <Transboarding />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="individual">
          <Storage />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="events">
          <Hall />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="reviews">
          <Reviews />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="partners">
          <Partners />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center" id="form">
          <Form />
        </section>

        <section className="h-screen snap-start" id="let-us-talk">
          <Footer />
        </section>
      </div>
    </div>
  );
}
