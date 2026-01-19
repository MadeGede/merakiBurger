import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FounderProfile = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, rotate: -2 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="story" className="section-padding bg-gradient-to-b from-meraki-dark to-meraki-brown">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Image */}
          <motion.div
            variants={imageVariants}
            className="relative aspect-square rounded-3xl overflow-hidden border-4 border-meraki-gold/20 shadow-2xl"
          >
            <Image
              src="/images/founder/founder-profile.jpg"
              alt="Founder Meraki Burger"
              fill
              className="object-cover"
              quality={100}
            />
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-meraki-red/10 via-transparent to-meraki-gold/10" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-meraki-gold/10 rounded-full border border-meraki-gold/30 backdrop-blur-sm"
            />
          </motion.div>

          {/* Founder Story */}
          <motion.div variants={textVariants} className="space-y-6">
            <div>
              <span className="inline-block px-4 py-1 bg-meraki-gold/10 text-meraki-gold rounded-full text-sm font-semibold mb-4">
                UMKM STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Soul Behind the <span className="text-gradient">Burger</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-meraki-light/90">
                "Meraki bukan sekadar burger. Ini adalah cerita tentang passion yang dimasak dengan jiwa, dimulai dari dapur kecil di rumah hingga menjadi bagian dari komunitas kuliner lokal."
              </p>
              
              <p className="text-meraki-light/80">
                Sebagai UMKM, kami percaya bahwa makanan terbaik lahir dari cinta dan perhatian pada detail. Setiap patty digiling manual, setiap roti dipanggang segar, dan setiap sajian disusun dengan hati.
              </p>
              
              <p className="text-meraki-light/80">
                Kami tumbuh organik bersama pelanggan setia yang menjadi keluarga. Dari pesanan via WhatsApp pertama hingga outlet kecil kami sekarang, setiap langkah adalah bukti bahwa passion yang tulus bisa menciptakan sesuatu yang spesial.
              </p>
            </div>

            <div className="pt-4 border-t border-meraki-gold/20">
              <h3 className="text-2xl font-display font-bold text-meraki-gold mb-2">
                Made Gede
              </h3>
              <p className="text-meraki-light/70">
                Founder Meraki Burger
              </p>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? '100%' : 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-0.5 bg-gradient-to-r from-meraki-red to-meraki-gold mt-4"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-transparent border-2 border-meraki-gold text-meraki-gold font-semibold rounded-full hover:bg-meraki-gold hover:text-meraki-dark transition-all duration-300"
            >
              Meet Our Team →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderProfile