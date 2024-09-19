import RippleEffect from './ripple-effect'

export default function Ripple({children}) {
  return (
    <div className="absolute z-10 flex h-[500px] w-full bg-transparent flex-col items-center justify-center overflow-hidden">
      <div className="z-10 whitespace-pre-wrap size-[75px] rounded-full flex justify-center items-center">
        {children}
      </div>
      <RippleEffect/>
    </div>
  )
}
