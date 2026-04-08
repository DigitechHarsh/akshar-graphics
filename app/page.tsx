import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      {/* Dynamic Background Blob for added premium feel */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-[1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -z-[1]" />
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Akshar Graphics. Designed with precision in Surat, India.</p>
      </footer>
    </main>
  );
}
