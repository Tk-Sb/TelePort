'use client'

export default function ScrollToButton() {
  
  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <button 
        className="md:text-[18px] w-[125px] h-[50px] md:w-[135px] lg:w-[350px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-[#8B5CF6] font-medium text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:border-gray-600 hover:shadow-[4px_4px_0px_#6643B6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        onClick={ () => scrollToSection("contacts") }
        >
        تواصل معنا
      </button>

      <button 
      className="md:text-[18px] w-[125px] h-[50px] md:w-[135px] lg:w-[350px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-transparent font-medium text-[#8B5CF6] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#8B5CF6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
      onClick={ () => scrollToSection("works") }
      >
        أعمالنا
      </button>
    </>
  )
}