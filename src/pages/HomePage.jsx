import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import Hero from '../components/home/Hero'
import CategorySection from '../components/home/CategorySection'
import HowItWorks from '../components/home/HowItWorks'
import FeaturedInsurances from '../components/home/FeaturedInsurances'
import Testimonials from '../components/home/Testimonials'

const HomePage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'AssuranceCompare - Comparateur d\'assurances en France'
    
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <CategorySection />
      <HowItWorks />
      <FeaturedInsurances />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="section bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à économiser sur vos assurances ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez les milliers de Français qui ont déjà trouvé l'assurance idéale au meilleur prix grâce à notre comparateur.
          </p>
          <button className="btn bg-white text-primary-800 hover:bg-blue-50">
            Comparer maintenant
          </button>
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage