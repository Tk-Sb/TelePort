import PhoneAnimation from "../home/phone-animation";
import BoxReveal from "../../text-reveal";
import GridNav from "@/components/grid-nav";
import ScrollToButton from "./button";

export default function Home() {
  

  return (
    <section id="home" className="flex gap-[25px] ">
      <GridNav></GridNav>
      <div dir="rtl" className="w-full h-fit lg:max-w-[784px] flex flex-wrap md:justify-between gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[15px] py-[25px] md:px-[50px] md:py-[50px] ">
        <div className="w-fit h-fit flex flex-col gap-[25px] ">
          <div className="w-full h-fit flex flex-col gap-[10px] ">
            <h1 dir="rtl" className="header-text ">
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                انقل اسمك 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                إلى 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                المستوى التالي 
              </BoxReveal>
            </h1>
            <h2 dir="rtl" className="subheader-text ">
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                دليلك في العالم الرقمي سريع التغير 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                نساعدك لإثبات حضورك في عالم الإنترنت.
              </BoxReveal>
            </h2>
          </div>
          <div dir="rtl" className="w-full h-fit flex lg:flex-col gap-[15px] md:gap-[20px] lg:gap-[15px] ">
            <ScrollToButton></ScrollToButton>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center md:w-fit ">
          <PhoneAnimation></PhoneAnimation>
        </div>
      </div>
    </section>
  )
}