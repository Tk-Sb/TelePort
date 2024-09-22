'use client'

export default function GridNav() {

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-w-[437px] hidden lg:flex flex-col justify-center items-center gap-[10px] flex-wrap flex-grow bg-[#8B5CF6] rounded-[20px] p-[10px]">
      <div className="flex flex-grow w-full gap-[10px] h-[55%]"> {/*!!!*/}
        <div 
          className="group shadow-xl shadow-[#fcf8f835] flex flex-col justify-between  flex-grow w-[30%] transform-gpu duration-300 hover:-translate-y-1 hover:bg-[#2b2836f0] bg-[#2B2836] rounded-[10px] p-[15px] cursor-pointer "
          onClick={() => scrollToSection("tools")}
        >
          <p dir="rtl" className="text-[#FFFFFF80]">
            صندوق أدواتنا 
          </p>
          <div dir="rtl" className="transition-all duration-300 group-hover:-translate-y-3 flex justify-between items-center">
            <p  className="text-white text-[36px]">
              أدواتنا 
            </p>
            <div className="size-[50px] flex items-end ">
              <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9402 6.5067C12.3033 6.01287 11.4828 5.7746 10.6581 5.844C9.83352 5.91341 9.0719 6.28483 8.53984 6.87705L0.727813 15.6285C0.257659 16.1523 0 16.8139 0 17.4973C0 18.1807 0.257659 18.8422 0.727813 19.3661L8.53984 28.1175C8.80192 28.4139 9.12417 28.6591 9.48806 28.8388C9.85196 29.0186 10.2503 29.1294 10.6603 29.165C11.0702 29.2005 11.4837 29.1601 11.8768 29.046C12.2699 28.9319 12.6351 28.7464 12.9511 28.5001C13.2672 28.2538 13.528 27.9516 13.7186 27.6109C13.9092 27.2702 14.0257 26.8977 14.0615 26.5148C14.0974 26.132 14.0518 25.7462 13.9274 25.3798C13.803 25.0135 13.6023 24.6736 13.3367 24.3799L7.19104 17.4974L13.3369 10.6147C13.8676 10.0208 14.124 9.25439 14.0496 8.48405C13.9752 7.7137 13.5762 7.00246 12.9402 6.5067Z" fill="#95939B"/>
                <path d="M28.7351 0.0514097C27.9234 -0.0920643 27.0837 0.0675041 26.3967 0.495814C25.7097 0.924124 25.2301 1.58698 25.061 2.3419L18.8114 31.5133C18.7303 31.8889 18.7295 32.2758 18.8091 32.6518C18.8886 33.0277 19.0469 33.3853 19.2749 33.704C19.5029 34.0226 19.796 34.2961 20.1375 34.5088C20.479 34.7214 20.8621 34.8689 21.2649 34.943C21.4677 34.982 21.6742 35.0011 21.8813 35C22.603 34.9989 23.302 34.7645 23.8595 34.3366C24.4169 33.9087 24.7984 33.3137 24.9389 32.6529L31.1886 3.48135C31.2697 3.10568 31.2705 2.71875 31.1909 2.34279C31.1114 1.96682 30.9531 1.60923 30.7251 1.29053C30.4972 0.971827 30.204 0.698304 29.8625 0.48566C29.521 0.273017 29.1379 0.125443 28.7351 0.0514097Z" fill="#95939B"/>
                <path d="M49.2725 15.6285L41.4605 6.87709C41.1984 6.58066 40.8761 6.33552 40.5122 6.15575C40.1483 5.97599 39.75 5.86514 39.34 5.82958C38.9301 5.79403 38.5167 5.83447 38.1235 5.94858C37.7304 6.06269 37.3653 6.24822 37.0492 6.4945C36.7331 6.74078 36.4723 7.04295 36.2817 7.38365C36.0912 7.72435 35.9746 8.09685 35.9388 8.47974C35.9029 8.86263 35.9485 9.24835 36.0729 9.61474C36.1973 9.98112 36.398 10.3209 36.6636 10.6147L42.8093 17.4974L36.6634 24.38C36.3979 24.6738 36.1971 25.0136 36.0728 25.38C35.9484 25.7464 35.9028 26.1321 35.9386 26.515C35.9744 26.8979 36.091 27.2704 36.2816 27.6111C36.4721 27.9518 36.7329 28.2539 37.049 28.5002C37.3651 28.7465 37.7302 28.932 38.1234 29.0461C38.5165 29.1602 38.9299 29.2007 39.3399 29.1651C39.7498 29.1296 40.1482 29.0187 40.5121 28.839C40.876 28.6592 41.1982 28.414 41.4603 28.1176L49.2725 19.3661C49.7426 18.8423 50.0003 18.1807 50.0003 17.4973C50.0003 16.8139 49.7426 16.1523 49.2725 15.6285Z" fill="#95939B"/>
              </svg>
            </div>
          </div>
        </div>
        <div 
          className="group shadow-xl shadow-[#fcf8f835] flex flex-col justify-between  flex-grow w-[50%] transform-gpu duration-300 hover:-translate-y-1 hover:bg-[#2b2836f0] bg-[#2B2836] rounded-[10px] p-[15px] cursor-pointer "
          onClick={() => scrollToSection("services")}
        >
          <p dir="rtl" className="text-[#FFFFFF80]">
            لماذا يجب عليك اختيار <span className="text-[#F2CD88]">TP</span>
            <br/>
            لتصميم الموقع الذي يمثل شركتك
          </p>
          <div dir="rtl" className="transition-all duration-300 group-hover:-translate-y-3 flex justify-between items-center">
            <p  className="text-white text-[36px]">
              خدماتنا 
            </p>
            <div className="size-[50px]">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4482 25.0025C21.4482 27.1877 23.2079 28.9599 25.3754 28.9599C26.8984 28.9599 28.2035 28.0778 28.8551 26.8016L28.866 26.8115L36.0351 13.778L23.4495 21.555L23.4614 21.567C22.2662 22.2465 21.4482 23.5217 21.4482 25.0025Z" fill="#95939B"/>
                <path d="M41.1971 6.1456C37.1729 2.60133 31.9733 0.338263 26.032 0V6.01389C30.9831 6.3312 33.9002 7.91574 36.8293 10.3884L41.1971 6.1456Z" fill="#95939B"/>
                <path d="M44.0003 23.1276H49.9614C49.5613 17.1406 47.2373 12.2214 43.629 8.19016L39.4116 12.4139C41.9525 15.3476 43.624 19.1363 44.0003 23.1276Z" fill="#95939B"/>
                <path d="M44.028 26.1211C43.3972 36.0993 35.1933 44.0131 25.1723 44.0131C14.7404 44.0131 5.9413 35.4876 5.9413 24.9766C5.9413 14.9704 14.1492 6.78322 23.0612 6.0149V0.00100708C10.1883 0.778313 0 11.6925 0 25.0025C0 38.8154 11.3083 50 25.0158 50C38.3164 50 49.3653 39.0928 50 26.1211H44.028Z" fill="#95939B"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow w-full gap-[10px] h-[30%]"> {/*!!!*/}
        <div 
          className="group shadow-xl shadow-[#fcf8f835] flex flex-col justify-between flex-grow w-[50%] transform-gpu duration-300 hover:translate-y-1 hover:bg-[#2b2836f0] bg-[#2B2836] rounded-[10px] p-[15px] cursor-pointer "
          onClick={() => scrollToSection("contacts")}
          >
          <p dir="rtl" className="text-[#FFFFFF80]">
            أجوبة لكل أسئلتك
          </p>
          <div dir="rtl" className="transition-all duration-300 group-hover:-translate-y-3 flex justify-between items-center">
            <p  className="text-white text-[36px]">
              تواصل معنا
            </p>
            <div className="size-[50px]">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1876 26.3477L34.7462 41.7969C34.9491 41.9765 35.1953 42.1003 35.4605 42.156C35.7257 42.2118 36.0008 42.1976 36.2589 42.1148C36.517 42.0321 36.7491 41.8837 36.9325 41.6841C37.1158 41.4845 37.2441 41.2407 37.3048 40.9766L44.6485 8.90625C44.7101 8.63006 44.6955 8.34233 44.6063 8.07378C44.5172 7.80523 44.3567 7.56593 44.1422 7.38145C43.9276 7.19696 43.6669 7.07421 43.3881 7.02629C43.1092 6.97837 42.8225 7.00709 42.5587 7.10937L6.50399 21.2695C5.05868 21.8359 5.25399 23.9453 6.77743 24.2578L17.1876 26.3477Z" stroke="#95939B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.1875 26.3477L43.7695 7.14844" stroke="#95939B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25.957 34.0625L19.8633 40.1563C19.6459 40.377 19.3678 40.5281 19.0643 40.5905C18.7608 40.6528 18.4456 40.6235 18.1588 40.5062C17.872 40.389 17.6265 40.1891 17.4536 39.9321C17.2806 39.675 17.188 39.3723 17.1875 39.0625V26.3477" stroke="#95939B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div 
          className="group shadow-xl shadow-[#fcf8f835] flex flex-col justify-between  flex-grow w-[30%] transform-gpu duration-300 hover:translate-y-1 hover:bg-[#2b2836f0] bg-[#2B2836] rounded-[10px] p-[15px] cursor-pointer "
          onClick={() => scrollToSection("works")}
          >
          <p dir="rtl" className="text-[#FFFFFF80]">
            ألقِ نظرة إلى أعمالنا
          </p>
          <div dir="rtl" className="transition-all duration-300 group-hover:-translate-y-3 flex justify-between items-center">
            <p  className="text-white text-[36px]">
              أعمالنا 
            </p>
            <div className="size-[50px] ">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.4444 11.1111L26.9444 6.11111C25 2.22222 21.3889 0 16.9444 0H11.1111C5 0 0 5 0 11.1111V13.8889V38.8889C0 45 5 50 11.1111 50H38.8889C45 50 50 45 50 38.8889V22.2222C50 16.1111 45 11.1111 38.8889 11.1111H29.4444ZM11.1111 5.55556H16.9444C19.1667 5.55556 20.8333 6.66667 21.9444 8.61111L23.3333 11.1111H5.55556C5.55556 8.05556 8.05556 5.55556 11.1111 5.55556ZM44.4444 22.2222V38.8889C44.4444 41.9444 41.9444 44.4444 38.8889 44.4444H11.1111C8.05556 44.4444 5.55556 41.9444 5.55556 38.8889V16.6667H27.7778H38.8889C41.9444 16.6667 44.4444 19.1667 44.4444 22.2222Z" fill="#95939B"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
