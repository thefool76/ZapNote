import About from "@/components/About";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Sections from "@/components/Sections";
import Service from "@/components/Service";


export default function Home() {
  return (
      <div>
        <Hero  />
        <Sections />
        <About />
        <Service />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </div>
  );
}
