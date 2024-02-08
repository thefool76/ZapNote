import About from "@/components/About";
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
        <ScrollToTop />
      </div>
  );
}
