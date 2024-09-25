'use client'

export default function EmailForm() {
  return (
    <>
      <form className="flex-grow ">
        <div className="flex flex-col gap-[5px] ">
          <label className="indent-[15px] text-[#000000] ">
            الاسم
          </label>
          <input type="text" className="w-[300px] h-[50px] border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " placeholder="الاسم" />
          <label className="indent-[15px] text-[#000000] ">
            البريد الإلكتروني
          </label>
          <input type="text" className="w-[300px] h-[50px] border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " placeholder="you@company.com" />
          <label className="indent-[15px] text-[#000000] ">
            الرسالة
          </label>
          <textarea type="text" className="w-[300px] h-[150px] resize-none border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " placeholder="اترك لنا رسالة..." />
          <button className="md:text-[18px] w-[300px] h-[50px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-[#8B5CF6] font-medium text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:border-gray-600 hover:shadow-[4px_4px_0px_#6643B6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            أرسل لنا رسالة
          </button>
        </div>
      </form>
    </>
  )
}