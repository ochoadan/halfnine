"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

// const viewport = { once: true, margin: '0px 0px -200px' }
const viewport = { once: true, margin: "0px 0px -80px" };

type MotionElementType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type FadeInProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
  as?: MotionElementType;
  speed?: "slow" | "fast";
};

export function FadeIn({ as = "div", speed, ...props }: FadeInProps) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);
  const MotionComponent = (motion as any)[as as string] || motion.div;

  return (
    <MotionComponent
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: speed === "slow" ? 1 : speed === "fast" ? 0.5 : 0.8,
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
