import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import Strengths from "../components/Strengths";
import routesData from "../data/routes.json"

export default function WhyUsPage() {
  return (
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />
        <section className="h-screen snap-start">  <Strengths />
</section>
        <section className="h-screen snap-start">  <Reviews />
</section>
        <section className="h-screen snap-start">  <Partners />
</section>
        <section className="h-screen snap-start">  <Hero />
</section>
        <section className="h-screen snap-start">  <Form />
</section>
        <section className="h-screen snap-start">  <Footer />
</section>
    </div>
    </div>
);
}
