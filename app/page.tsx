import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Solutions from "./components/home/Solutions";
import HowWeWork from "./components/home/HowWeWork";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
   <About />
   <HowWeWork />
      <Solutions />
    
      <Contact />

     
    </div>
  );
}