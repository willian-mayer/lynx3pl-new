// src/App.tsx
import "./App.css";
import { useState } from "react";
import Entrance from "./components/Entrance";
import Hero from "./components/Hero";

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  return (
    <>
      {showEntrance && <Entrance onFinish={() => setShowEntrance(false)} />}
      {!showEntrance && (
        <section>
          <Hero />
        </section>
      )}
    </>
  );
}

export default App;
