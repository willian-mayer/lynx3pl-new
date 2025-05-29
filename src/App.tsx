// src/App.tsx
import "./App.css";
import { useState } from "react";
import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import routes from "./data/routes.json";
import Strengths from "./components/Strengths";

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
        </>
      )}
    </>
  );
}

export default App;
