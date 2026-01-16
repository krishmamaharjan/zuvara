import Image from "next/image";
import Hero from "../components/sections/Home/Hero";
import Features from "../components/sections/Home/Features";
import Product from "../components/sections/Home/Product";
import BestSellers from "../components/sections/Home/BestSellers";
import Faq from "../components/sections/Home/Faq";
import CTA from "../components/sections/Home/CTA";
import { Testimonial } from "../components/sections/Home/Testimonial";
import Articles from "../components/sections/Home/Articles";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Product />
      <BestSellers />
      <Testimonial />
      <Faq />
      <CTA />
      <Articles />

    </div>
  );
}
