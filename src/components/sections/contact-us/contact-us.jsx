import BoxReveal from "@/components/text-reveal";
import GridNav from "@/components/grid-nav";
import DockDemo from "@/components/dock/dock";
import EmailForm from "./email-from";

export default function ContactUs() {
  return (
    <>
      <section id="contacts" className="flex gap-[25px] ">
        <GridNav></GridNav>
        <div dir="rtl" className="w-full h-fit lg:max-w-[784px] flex flex-col md:flex-row md:justify-between gap-[25px] bg-[#FBFBFB] rounded-[20px] px-[15px] py-[25px] md:px-[50px] md:py-[50px] ">
          <div className="flex flex-col gap-[25px] ">
            <div className="w-fit h-fit flex flex-col gap-[25px] ">
              <div className="w-full h-fit flex flex-col gap-[10px] ">
                <h1 dir="rtl" className="header-text ">
                  <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                    تواصل معنا
                  </BoxReveal>
                </h1>
                <h2 dir="rtl" className="subheader-text ">
                  <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                    فريق التواصل جاهز للإجابة عن أسئلتك
                  </BoxReveal>
                  <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                    على مدار الساعة.
                  </BoxReveal>
                </h2>
              </div>
            </div>
          
            <div className="w-full h-fit flex flex-col ">
              <h2 dir="rtl" className="subheader-text ">
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  اتصل بنا
                </BoxReveal>
              </h2>
            
              <div className="w-fit h-fit flex flex-row-reverse items-end gap-[5px] mr-[150px] ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1371_116)">
                    <path d="M18.6797 4.6875C20.2699 5.11427 21.7198 5.95178 22.884 7.11599C24.0482 8.2802 24.8857 9.73014 25.3125 11.3203" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.707 8.30859C18.6634 8.56259 19.5357 9.0649 20.2354 9.76462C20.9351 10.4643 21.4374 11.3366 21.6914 12.293" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.8398 14.6252C11.8046 16.6174 13.4155 18.2242 15.4102 19.1838C15.5573 19.2535 15.72 19.2836 15.8824 19.2713C16.0447 19.259 16.201 19.2046 16.3359 19.1135L19.2656 17.1565C19.3951 17.0687 19.5446 17.0151 19.7004 17.0008C19.8561 16.9864 20.013 17.0118 20.1563 17.0744L25.6406 19.4299C25.8281 19.5079 25.9847 19.6454 26.0863 19.8211C26.1879 19.9969 26.229 20.2012 26.2031 20.4026C26.0293 21.7593 25.3671 23.0062 24.3404 23.91C23.3137 24.8137 21.9928 25.3124 20.625 25.3127C16.3981 25.3127 12.3443 23.6336 9.35549 20.6447C6.36663 17.6559 4.6875 13.6021 4.6875 9.37522C4.68781 8.00741 5.1865 6.68657 6.09026 5.65986C6.99403 4.63315 8.24093 3.97092 9.59766 3.7971C9.79903 3.77123 10.0033 3.81228 10.1791 3.91392C10.3548 4.01556 10.4923 4.17216 10.5703 4.3596L12.9258 9.85569C12.987 9.99672 13.0127 10.1507 13.0004 10.3039C12.9881 10.4572 12.9384 10.6051 12.8555 10.7346L10.8984 13.7112C10.8113 13.8458 10.7602 14.0005 10.7499 14.1605C10.7397 14.3206 10.7706 14.4806 10.8398 14.6252Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1371_116">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-[#7E7E7E] ">
                  963981848972+
                </h2>
              </div>
              <h2 dir="rtl" className="subheader-text mt-[25px] ">
                <BoxReveal boxColor={"#F2CD88"} duration={0.5}>
                  صفحاتنا على مواقع التواصل الاجتماعي
                </BoxReveal>
              </h2>
              <div className="w-fit h-fit flex ">
                <DockDemo></DockDemo>
              </div>
            </div>
          </div>

          <div className="h-[2px] md:w-[2px] md:h-auto bg-[#7E7E7E] "></div>

          <EmailForm></EmailForm>
        </div>
      </section>
    </>
  )
}