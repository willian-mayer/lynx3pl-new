// src/App.tsx
import "./App.css";
import { useState } from "react";
import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import routes from "./data/routes.json";
import Strengths from "./components/Strengths";
import Gallery from "./components/Gallery";
import WeServe from "./components/WeServe";
import Warehousing from "./components/Warehousing";
import Fulfillment from "./components/Fulfillment";
import Transloading from "./components/Transloading";
import Reviews from "./components/Reviews";
import Hall from "./components/Hall";
import Partners from "./components/Partners";

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  return (
    <>
      {showEntrance && <Entrance onFinish={() => setShowEntrance(false)} />}

      {!showEntrance && (
        <>
          {/* Navbar fijo global */}
          <Navbar title="Lynx3PL" routes={routes} />

          {/* Secciones de contenido */}
          <section>
            <Hero />
          </section>
          <section>
            <Services />
          </section>
          <section>
            <Strengths />
          </section>
          <section>
            <Gallery />
          </section>
          <section>
            <WeServe />
          </section>
          <section>
            <Warehousing />
          </section>
          <section>
            <Fulfillment />
          </section>
          <section>
            <Transloading />
          </section>
          <section>
            <Reviews /> 
          </section>
          <section>
            <Hall />
          </section>
          <section>
            <Partners />
          </section>
        </>
      )}
    </>
  );
}

export default App;
