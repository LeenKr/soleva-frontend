import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";   // ✅ import Hero
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />   {/* ✅ Hero route/section */}
        <About />  {/* ✅ About route/section */}
        <Services />  
        <Contact /> {/* ✅ Contact route/section */}
      </main>
      <Footer />
       <Analytics />
    </div>
  );
}
