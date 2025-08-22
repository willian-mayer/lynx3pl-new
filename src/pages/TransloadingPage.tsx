import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Transloading from "../components/Transloading";
import routesData from "../data/routes.json";

export default function TransloadingPage() {
  return (
    <div className="h-screen overflow-y-scroll  hide-scrollbar overflow-x-hidden">
      <div>
        <Navbar title="Your Company" routes={routesData} />
        <section className="h-screen snap-start">
          <Transloading />;
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
