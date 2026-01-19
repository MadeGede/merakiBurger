import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const MenuCard = ({ title, description, price, imageSrc, spicy = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-meraki-brown/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-meraki-gold/20 group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-meraki-dark via-transparent to-transparent opacity-60" />
        
        {/* Spicy Badge */}
        {spicy && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            🔥 SPICY
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-4 left-4">
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
    className="text-2xl font-bold text-meraki-gold"
  >
    Rp{price.toLocaleString('id-ID')}
  </motion.div>
</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          className="text-xl font-display font-bold mb-2 text-meraki-light"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          className="text-meraki-light/80 text-sm mb-4"
        >
          {description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 bg-meraki-red/20 text-meraki-red font-semibold rounded-lg hover:bg-meraki-red hover:text-white transition-colors duration-300 border border-meraki-red/30"
        >
          Add to Order
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-meraki-red/30 to-meraki-gold/30 blur-xl"
        />
      </div>
    </motion.div>
  )
}

export default MenuCard