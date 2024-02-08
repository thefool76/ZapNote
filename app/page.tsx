import About from "@/components/About";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Sections from "@/components/Sections";


export default function Home() {
  return (
      <div>
        <Hero  />
        <Sections />
        <About />
        <ScrollToTop />
      </div>
  );
}
