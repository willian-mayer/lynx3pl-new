import Storage from "../components/Storage";
import Hall from "../components/Hall";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function SpaceRentalPage() {
  return (
    <div className="h-screen overflow-y-scroll md:overflow-y-auto snap-y md:snap-none scroll-smooth hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Storage />
        </section>

        <section className="h-screen snap-start md:flex md:justify-center md:items-center">
          <Hall />
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
