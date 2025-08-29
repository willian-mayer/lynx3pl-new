import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import Strengths from "../components/Strengths";
import routesData from "../data/routes.json";

export default function WhyUsPage() {
  return (
    <div className="h-screen overflow-y-scroll md:overflow-y-auto snap-y md:snap-none scroll-smooth hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Strengths />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Reviews />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Partners />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Hero />
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
