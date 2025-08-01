import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header className="">
      <div className="">
        <Navbar />
        <Home />
      </div>
    </header>
    <main>
      <Services/>
    </main>
  </StrictMode>
);
