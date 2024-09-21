import ContactUs from "@/components/sections/contact-us/contact-us";
import Home from "@/components/sections/home/home";
import Services from "@/components/sections/services/services";
import Tools from "@/components/sections/tools/tools";
import Works from "@/components/sections/works/works";

export default function page() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col gap-[25px] px-[10px] md:px-[25px] pt-[75px] ">
        <Home></Home>
        <Services></Services>
        <Works></Works>
        <Tools></Tools>
        <ContactUs></ContactUs>
      </main>
    </>
  )
}