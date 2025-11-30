import { Hero } from "@/components/pages/Hero";
import { About } from "@/components/pages/About";
import { Contact } from "@/components/pages/Contact";
import { Partners } from "@/components/pages/Partners";
import { Streamers } from "@/components/pages/Streamers";
export default function Home() {
  return (
    <article>
      <Hero />
      <About />
      <Streamers />
      <Partners />
      <Contact />
    </article>
  );
}
