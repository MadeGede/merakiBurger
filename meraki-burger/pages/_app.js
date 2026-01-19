import { AnimatePresence } from 'framer-motion'
import { LazyMotion, domAnimation } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </LazyMotion>
  )
}

export default MyApp