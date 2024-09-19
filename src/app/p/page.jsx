import AnimatedBeam from "@/components/animated-beam/animated-beam";
import Ripple from "@/components/ripple/ripple";

export default function page() {
  return (
    <>
      <main className="flex justify-center px-[10px] bg-black">
        <section className="px-[12px] rounded-[20px] mt-[25px] w-full bg-blue-100">
          <div className="w-[full] h-[300px] bg-slate-400">that's it</div>
          <AnimatedBeam/>
          <div className="w-[full] h-[300px] bg-slate-400">that's it</div>
        </section>
      </main>
      
    </>
  )
}