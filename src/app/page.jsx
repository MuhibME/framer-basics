import HeroGrid from "@/components/HeroGrid";
import TextSection from "@/components/TextSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="">
    <div className="container mx-auto items-center flex justify-center mt-24">
    <TextSection>Framer Animations</TextSection>
    </div>
      <HeroGrid/>
      <TextSection all={true}>Just Keep Scrolling</TextSection>
   </main>
  );
}
