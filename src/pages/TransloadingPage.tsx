import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Transloading from "../components/Transloading";
import routesData from "../data/routes.json";

export default function TransloadingPage() {
  return (
    <div className="h-screen overflow-y-scroll md:overflow-y-auto snap-y md:snap-none scroll-smooth hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Transloading />
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
