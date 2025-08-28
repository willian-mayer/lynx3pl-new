import NewWarehousing from "../components/NewWarehousing";
import WarehousingList from "../components/WarehousingList";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Form from "../components/Form";
import Footer from "../components/Footer";
export default function WarehousingPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar overflow-x-hidden ">
      <div>
        <Navbar title="Your Company" routes={routesData} />

             <section className="h-screen snap-start">
                        <NewWarehousing />

      </section>
           <section className="h-screen snap-start">
                    <WarehousingList />

      </section>
           <section className="h-screen snap-start">
                    <Gallery />

      </section>
           <section className="h-screen snap-start" id="form">
                    <Form />

      </section>
           <section className="h-screen snap-start">
                    <Footer />

      </section>
      </div>
    </div>
  );
}
