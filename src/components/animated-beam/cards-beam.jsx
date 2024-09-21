"use client";

import CustomBeamEffect from "@/components/animated-beam/custom-beam-effect";
import { forwardRef, useRef } from "react";
import HoverCard from "../hoverCard-3d";

import Image from 'next/image';
import Iphone15Pro from "../iphone-15-pro";

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
            <HoverCard className={'h-[305px] w-[150px] rounded-[30px] bg-slate-400 md:w-[250px] md:h-[500px]'}>
            <Frame ref={div1Ref}>
              <Iphone15Pro
                  className="w-full h-fit rounded-[30px]"
                      src="/images/image.png"
              />
            </Frame>
            </HoverCard>
            <PlaceHolder></PlaceHolder>
          </div>
          <div className="flex flex-row justify-between">
            <PlaceHolder></PlaceHolder>
            <HoverCard className={'h-[305px] w-[150px] rounded-[30px] bg-slate-400 md:w-[250px] md:h-[500px]'}>
            <Frame ref={div2Ref}>
              <Iphone15Pro
                  className="w-full h-fit rounded-[30px]"
                      src="/images/image.png"
              />
            </Frame>
            </HoverCard>
          </div>
          <div className="flex flex-row justify-between">
          <HoverCard className={'h-[305px] w-[150px] rounded-[30px] bg-slate-400 md:w-[250px] md:h-[500px]'}>
            <Frame ref={div3Ref}>
              <Iphone15Pro
                  className="w-full h-fit rounded-[30px]"
                      src="/images/image.png"
              />
            </Frame>
            </HoverCard>
            <PlaceHolder></PlaceHolder>
          </div>
          <div className="flex flex-row justify-between">
            <PlaceHolder></PlaceHolder>
            <HoverCard className={'h-[305px] w-[150px] rounded-[30px] bg-slate-400 md:w-[250px] md:h-[500px]'}>
            <Frame ref={div4Ref}>
              <Iphone15Pro
                  className="w-full h-fit rounded-[30px]"
                      src="/images/image.png"
              />
            </Frame>
            </HoverCard>
          </div>
        </div>
      </div>

      <CustomBeamEffect
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={-25}
        startXOffset={65}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-140}
      />
      <CustomBeamEffect
        duration={3}
        delay={0.5}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        curvature={-25}
        startXOffset={-65}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-140}
        reverse={true}
      />
      <CustomBeamEffect
        duration={3}
        delay={1}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={-25}
        startXOffset={65}
        startYOffset={75}
        endXOffset={0}
        endYOffset={-140}
        reverse={false}
      />
    </div>
  );
}

const Frame = forwardRef(function Frame({ children }, ref) {
  return (
    <div
      ref={ref}
      className="z-10 flex justify-center items-center w-[150px] h-[300px] md:w-[250px] md:h-[500px] rounded-[10px]"
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
