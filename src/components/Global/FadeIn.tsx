'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

// const viewport = { once: true, margin: '0px 0px -200px' }
const viewport = { once: true, margin: '0px 0px -160px' }

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div> & { as?: React.ElementType },
) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  const { as: Component = motion.div, ...rest } = props;

  return (
    <Component
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
          initial: 'hidden',
          whileInView: 'visible',
          viewport,
        })}
      {...rest}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean } & { as?: string }) {
  const { as: Component = motion.div, ...rest } = props;
  return (
    <FadeInStaggerContext.Provider value={true}>
      <Component
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...rest}
      />
    </FadeInStaggerContext.Provider>
  )
}