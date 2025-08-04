import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Donate from "../components/Donate"; 
import { SiHeroku } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Hero />
      <Sectors />
      <Team />
      <Testimonials />
      <Donate />
    </>
  );
}
