import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FounderProfile from '../components/FounderProfile'
import MenuCard from '../components/MenuCard'
import SectionReveal from '../components/SectionReveal'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  const menuItems = [
    {
      title: "Meraki Signature",
      description: "Patty premium 200g, keju gouda leleh, smoked beef, special sauce, roti brioche",
      price: 65000,
      imageSrc: "/images/burger/signature-burger.jpg",
      spicy: false
    },
    {
      title: "Classic Smash",
      description: "Double patty smash, keju cheddar, pickles, bawang goreng, mustard mayo",
      price: 45000,
      imageSrc: "/images/burger/classic-burger.jpg",
      spicy: false
    },
    {
      title: "Fire Dragon",
      description: "Patty pedas level 10, jalapeno, sambal matah, keju mozzarella, chipotle sauce",
      price: 55000,
      imageSrc: "/images/burger/spicy-burger.jpg",
      spicy: true
    }
  ]

  const values = [
    {
      title: "Handcrafted",
      description: "Setiap burger dibuat manual dengan perhatian pada detail, bukan produksi massal.",
      icon: "✨"
    },
    {
      title: "Local Pride",
      description: "Menggunakan bahan lokal terbaik, mendukung petani dan produsen Indonesia.",
      icon: "🇮🇩"
    },
    {
      title: "Community First",
      description: "Tumbuh bersama pelanggan yang menjadi keluarga. Feedback Anda membentuk kami.",
      icon: "❤️"
    },
    {
      title: "Passion Driven",
      description: "Dibuat dengan jiwa (meraki). Cinta pada proses adalah resep utama kami.",
      icon: "🔥"
    }
  ]

  return (
    <div className="min-h-screen bg-meraki-dark">
      <Navbar />
      <Hero />
      
      {/* Story Section */}
      <FounderProfile />
      
      {/* Menu Section */}
      <section id="menu" className="section-padding">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-meraki-red/10 text-meraki-red rounded-full text-sm font-semibold mb-4">
                UMKM MENU
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Burger dengan <span className="text-gradient">Karakter</span>
              </h2>
              <p className="text-xl text-meraki-light/80 max-w-2xl mx-auto">
                Pilihan terbatas, kualitas tak terbatas. Setiap menu adalah cerita rasa yang kami sempurnakan.
              </p>
            </div>
          </SectionReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <MenuCard {...item} />
              </SectionReveal>
            ))}
          </div>
          
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-meraki-gold text-meraki-gold font-semibold rounded-full hover:bg-meraki-gold hover:text-meraki-dark transition-all duration-300"
              >
                Lihat Full Menu
              </motion.button>
            </div>
          </SectionReveal>
        </div>
      </section>
      
      {/* Why Meraki Section */}
      <section id="why" className="section-padding bg-gradient-to-b from-meraki-brown to-meraki-dark">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-meraki-gold/10 text-meraki-gold rounded-full text-sm font-semibold mb-4">
                UMKM VALUE
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Kenapa <span className="text-gradient">Meraki</span>?
              </h2>
              <p className="text-xl text-meraki-light/80 max-w-2xl mx-auto">
                Kami bukan franchise. Kami adalah UMKM yang percaya pada kekuatan passion dan komunitas.
              </p>
            </div>
          </SectionReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <div className="bg-meraki-brown/50 backdrop-blur-sm rounded-2xl p-6 border border-meraki-gold/10 hover:border-meraki-gold/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-display font-bold mb-3 text-meraki-light">
                    {value.title}
                  </h3>
                  <p className="text-meraki-light/70">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section id="visit" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <span className="inline-block px-4 py-1 bg-meraki-red/10 text-meraki-red rounded-full text-sm font-semibold">
                  VISIT US
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Rasakan <span className="text-gradient">Pengalaman</span> Langsung
                </h2>
                <p className="text-lg text-meraki-light/80">
                  Datang ke outlet kecil kami, rasakan kehangatan UMKM lokal, dan nikmati burger yang dibuat khusus untuk Anda.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-meraki-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-meraki-light">Location</h4>
                      <p className="text-meraki-light/70">
                        Jl. Kuliner No. 123, Jakarta Selatan<br />
                        (Dekat Stasiun Pondok Labu)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-meraki-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      ⏰
                    </div>
                    <div>
                      <h4 className="font-semibold text-meraki-light">Hours</h4>
                      <p className="text-meraki-light/70">
                        Setiap Hari: 10:00 - 22:00<br />
                        Weekend: Extended sampai 23:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-meraki-light">Order & Reservation</h4>
                      <p className="text-meraki-light/70">
                        WhatsApp: 0812-3456-7890<br />
                        Instagram: @merakiburger.id
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-meraki-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 mr-4"
                  >
                    📍 Directions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-meraki-gold text-meraki-gold font-semibold rounded-full hover:bg-meraki-gold hover:text-meraki-dark transition-all duration-300"
                  >
                    📞 Call Now
                  </motion.button>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-meraki-gold/20 shadow-2xl">
                <Image
                  src="/images/location/store-front.jpg"
                  alt="Meraki Burger Store Front"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-meraki-red/10 via-transparent to-meraki-gold/10" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-6 right-6 bg-meraki-dark/90 backdrop-blur-sm px-4 py-2 rounded-full border border-meraki-gold/30"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-meraki-light">
                      OPEN NOW
                    </span>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}