'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

export function FadeIn({
  as = 'div',
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { as?: keyof typeof motion }) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)
  const AsComponent = motion[as];

  return (
    <AsComponent
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
      {...props}
    />
  )
}


export function FadeInStagger({
  faster = false,
  as = 'div',
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean, as?: keyof typeof motion }) {
  const AsComponent = motion[as];
  return (
    <FadeInStaggerContext.Provider value={true}>
      <AsComponent
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
