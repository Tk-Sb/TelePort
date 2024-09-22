"use client";

import React, { forwardRef, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = forwardRef(function Dock
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        });
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className="h-[58px] my-[25px] p-2 flex gap-2 rounded-[15px] border border-purple-400 bg-[#E9F2FA] supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md items-end"
        >
        {renderChildren()}
      </motion.div>
    );
  },
);

function DockIcon ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square cursor-pointer bg-white items-center justify-center rounded-full"
      {...props}
      
    >
      {children}
    </motion.div>
  );
};

export { Dock, DockIcon };
