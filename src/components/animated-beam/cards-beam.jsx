"use client";

import CustomBeamEffect from "@/components/animated-beam/custom-beam-effect";
import { forwardRef, useRef } from "react";

export default function CardsBeam() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden "
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-col gap-[15px] ">
          <div className="flex flex-row justify-between">
            <Frame ref={div1Ref}></Frame>
            <PlaceHolder></PlaceHolder>
          </div>
          <div className="flex flex-row justify-between">
            <PlaceHolder></PlaceHolder>
            <Frame ref={div2Ref}></Frame>
          </div>
          <div className="flex flex-row justify-between">
            <Frame ref={div3Ref}></Frame>
            <PlaceHolder></PlaceHolder>
          </div>
          <div className="flex flex-row justify-between">
            <PlaceHolder></PlaceHolder>
            <Frame ref={div4Ref}></Frame>
          </div>
        </div>
      </div>

      <CustomBeamEffect
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={-25}
        startXOffset={75}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-150}
      />
      <CustomBeamEffect
        duration={3}
        delay={0.5}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        curvature={-25}
        startXOffset={-75}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-150}
        reverse={true}
      />
      <CustomBeamEffect
        duration={3}
        delay={1}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={-25}
        startXOffset={75}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-150}
        reverse={false}
      />
    </div>
  );
}

const Frame = forwardRef(function Frame({ children }, ref) {
  return (
    <div
      ref={ref}
      className="z-10 w-[150px] h-[300px] rounded-[10px] bg-slate-400 opacity-35 "
    >
      {children}
    </div>
  );
});

function PlaceHolder () {
  return(
    <div>

    </div>
  )
}
