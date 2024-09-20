import CardsBeam from "@/components/animated-beam/cards-beam";
import BoxReveal from "@/components/text-reveal";

export default function Works() {
  return (
    <>
      <section className="flex">
        <div dir="rtl" className="w-full h-fit flex flex-col md:justify-between gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[15px] py-[25px] md:px-[50px] md:py-[50px] ">
          <div className="w-fit h-fit flex flex-col gap-[25px] ">
            <div className="w-full h-fit flex flex-col gap-[10px] ">
              <h1 dir="rtl" className="header-text ">
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  نجاحنا في تحويل
                </BoxReveal>
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  خيالك
                </BoxReveal>
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  إلى واقع رقمي
                </BoxReveal>
              </h1>
              <h2 dir="rtl" className="subheader-text ">
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  إليك نبذة من مشاريعنا السابقة.
                </BoxReveal>
              </h2>
            </div>
          </div>
          <div dir="ltr" className="w-full h-fit flex justify-center ">
            <CardsBeam></CardsBeam>
          </div>
        </div>
      </section>
    </>
  )
}