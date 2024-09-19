import PhoneAnimation from "../home/phone-animation";
import BoxReveal from "../../text-reveal";

export default function Home() {
  return (
    <section className="flex">
      <nav className="flex-grow hidden lg:block bg-gray-200 ">

      </nav>
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
            <button className="md:text-[18px] w-[125px] h-[50px] md:w-[135px] lg:w-[350px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-[#8B5CF6] font-medium text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:border-gray-600 hover:shadow-[4px_4px_0px_#6643B6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
              تواصل معنا
            </button>

            <button className="md:text-[18px] w-[125px] h-[50px] md:w-[135px] lg:w-[350px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-transparent font-medium text-[#8B5CF6] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#8B5CF6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
              أعمالنا
            </button>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center md:w-fit ">
          <PhoneAnimation></PhoneAnimation>
        </div>
      </div>
    </section>
  )
}