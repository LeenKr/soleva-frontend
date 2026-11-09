import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
export default function App() {
  const [selection, setSelection] = useState(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services
          onSelect={(type) => setSelection({ type, timestamp: Date.now() })}
        />
        <Contact selection={selection} />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
