import { Advantages } from "@/components/advantages";
import { ContactUs } from "@/components/contact-us";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { WhoAreWe } from "@/components/who-are-we";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <Features />
      <Advantages />
      <ContactUs />
    </>
  );
}
