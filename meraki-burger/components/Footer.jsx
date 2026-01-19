import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-meraki-brown border-t border-meraki-gold/10">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/ui/logo.svg"
                  alt="Meraki Burger Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-display font-bold">MERAKI</span>
            </div>
            <p className="text-sm text-meraki-light/70">
              Burger artisan UMKM dengan jiwa. Dibuat dengan passion, disajikan dengan cinta.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Our Story', 'Menu', 'Why Us', 'Location'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-meraki-light/70 hover:text-meraki-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg">Visit Us</h3>
            <div className="space-y-2 text-sm text-meraki-light/70">
              <p>Jl. Kuliner No. 123</p>
              <p>Jakarta Selatan, Indonesia</p>
              <p>Open: 10:00 - 22:00</p>
              <p>Everyday</p>
            </div>
          </motion.div>

          {/* Social & Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg">Order Now</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-meraki-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                📱 WhatsApp Order
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-300"
              >
                📸 Instagram
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-meraki-gold/10 text-center"
        >
          <p className="text-sm text-meraki-light/50">
            © {currentYear} Meraki Burger. UMKM Lokal dengan Passion. All rights reserved.
          </p>
          <p className="text-xs text-meraki-light/40 mt-2">
            Dibuat dengan ❤️ untuk komunitas kuliner Indonesia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer