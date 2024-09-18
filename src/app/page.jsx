import Home from "@/components/sections/home/home";
import Services from "@/components/sections/services/services";

export default function page() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col gap-[25px] px-[10px] pt-[75px] ">
        <Home></Home>
        <Services></Services>
      </main>
    </>
  )
}