import { Advantages } from "@/components/advantages";
import { ContactUs } from "@/components/contact-us";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhoAreWe } from "@/components/who-are-we";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <Services />
      <Advantages />
      <ContactUs />
    </>
  );
}
