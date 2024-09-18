import FeatureCards from "@/components/feature-cards/feature-cards";
import BoxReveal from "@/components/text-reveal";

export default function Services() {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[15px] py-[25px] ">
        <div className="w-full h-fit flex flex-col gap-[10px] ">
          <h1 dir="rtl" className="header-text ">
            <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
              أفضل الحلول
            </BoxReveal>
            <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
              التقنية
            </BoxReveal>
            <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
              بين يديك
            </BoxReveal>
          </h1>
          <h2 dir="rtl" className="subheader-text ">
            <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
              نقدم لك الجودة و السرعة و الأمان و الخصوصية
            </BoxReveal>
            <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
              باستخدام أحدث أدوات التصميم و البرمجة.
            </BoxReveal>
          </h2>
        </div>
        <div className="w-full flex justify-center ">
          <FeatureCards></FeatureCards>
        </div>
      </div>
    </>
  )
}