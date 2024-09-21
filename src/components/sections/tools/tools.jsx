import AnimatedBeam from "@/components/animated-beam/animated-beam";
import BoxReveal from "@/components/text-reveal";


export default function Tools() {
  return (
    <>
      <section className="flex">
        <div className="w-full h-fit flex flex-col gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[15px] py-[25px] md:px-[50px] md:py-[50px] ">
          <div className="w-full h-fit flex flex-col gap-[10px] ">
            <h1 dir="rtl" className="header-text ">
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                أحدث تنقنيات 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                التصميم و البرمجة 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                في خدمتك
              </BoxReveal>
            </h1>
            <h2 dir="rtl" className="subheader-text ">
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                تشكيلة عالية المستوى من لغات البرمجة 
              </BoxReveal>
              <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                و تطبيقات التصميم جاهزة لبناء تطبيقك التالي.
              </BoxReveal>
            </h2>
          </div>
          <div className="w-full flex justify-center ">
            <AnimatedBeam></AnimatedBeam>
          </div>
        </div>
      </section>
    </>
  )
}