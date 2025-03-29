import { Hero } from "@/components/homepage/hero";
import Main from "@/components/common/page";
import { Quote } from "@/components/common/quote";
import ContactInfo from "@/components/common/contact-info";

export default function Home() {
  return (
    <Main>
      <Hero />

      <Quote />

      <ContactInfo />
    </Main>
  );
}

