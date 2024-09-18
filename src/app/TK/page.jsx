import FeatureCards from "@/components/feature-cards/feature-cards";

export default function page() {
  return (
    <>
      <div className="flex justify-center px-[10px] bg-blue-200">
        <div className="w-full flex justify-center bg-blue-100">
          <FeatureCards></FeatureCards>
        </div>
      </div>
    </>
  )
}