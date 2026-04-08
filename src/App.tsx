import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import WorkDetail from "./pages/WorkDetail";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:serviceId" element={<WorkDetail />} />
        </Routes>
      </main>
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm bg-white">
        <p>&copy; {new Date().getFullYear()} Akshar Graphics. Designed with precision in Surat, India.</p>
      </footer>
    </div>
  );
}

export default App;
