import AnimatedBeam from "@/components/animated-beam/animated-beam";
import GridNav from "@/components/grid-nav";
import Ripple from "@/components/ripple/ripple";
import Home from "@/components/sections/home/home";

export default function page() {
  return (
    <>
      <main className="flex justify-center px-[10px] bg-black">
        <section className="px-[12px] rounded-[20px] mt-[25px] w-full bg-blue-100">
          
          <div className="flex gap-[25px]">
            <GridNav/>  
            <div className="min-w-[784px] h-[477px] flex flex-col gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[0px] py-[25px] "/>
          </div>
          
        </section>
      </main>
      
    </>
  )
}