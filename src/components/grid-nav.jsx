

export default function GridNav() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-[10px] flex-wrap flex-grow bg-[#8B5CF6] rounded-[20px] h-[477px] w- p-[10px]">
      <div className="flex flex-col justify-between h-[268px] flex-grow w-[30%] bg-[#2B2836] rounded-[10px] p-[15px]">
        <p dir="rtl" className="text-[#FFFFFF80]">
          صندوق أدواتنا 
        </p>
        <div dir="rtl" className="flex justify-between">
          <p  className="text-white text-[36px]">
            أدواتنا 
          </p>
          <div className="size-[50px] bg-slate-400">
            {/* put ur svg here and remove the className */}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[268px] flex-grow w-[50%] bg-[#2B2836] rounded-[10px] p-[15px]">
        <p dir="rtl" className="text-[#FFFFFF80]">
          لماذا يجب عليك اختيار <span className="text-[#F2CD88]">TP</span>
          <br/>
          لتصميم الموقع الذي يمثل شركتك
        </p>
        <div dir="rtl" className="flex justify-between">
          <p  className="text-white text-[36px]">
            خدماتنا 
          </p>
          <div className="size-[50px] bg-slate-400">
            {/* put ur svg here and remove the className */}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[179px] flex-grow w-[50%] bg-[#2B2836] rounded-[10px] p-[15px]">
        <p dir="rtl" className="text-[#FFFFFF80]">
          أجوبة لكل أسئلتك
        </p>
        <div dir="rtl" className="flex justify-between">
          <p  className="text-white text-[36px]">
            تواصل معنا
          </p>
          <div className="size-[50px] bg-slate-400">
            {/* put ur svg here and remove the className */}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[179px] flex-grow w-[30%] bg-[#2B2836] rounded-[10px] p-[15px]">
        <p dir="rtl" className="text-[#FFFFFF80]">
          ألقِ نظرة إلى أعمالنا
        </p>
        <div dir="rtl" className="flex justify-between">
          <p  className="text-white text-[36px]">
            أعمالنا 
          </p>
          <div className="size-[50px] bg-slate-400">
            {/* put ur svg here and remove the className */}
          </div>
        </div>
      </div>
    </div>
  )
}
