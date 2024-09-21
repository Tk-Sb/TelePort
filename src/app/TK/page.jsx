import AnimatedBeam from "@/components/animated-beam/animated-beam";
import CardsBeam from "@/components/animated-beam/cards-beam";

export default function page() {
  return (
    <>
      <main className="p-[10px] md:p-[25px] ">
        <section className="p-[15px] md:p-[50px] bg-white ">
          <AnimatedBeam></AnimatedBeam>
        </section>
      </main>
    </>
  )
}