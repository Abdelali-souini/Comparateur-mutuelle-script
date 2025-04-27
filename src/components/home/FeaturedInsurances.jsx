import { useState } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import InsuranceCard from '../ui/InsuranceCard'
import { mockedInsurances } from '../../data/mockData'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FeaturedInsurances = () => {
  const [activeCategory, setActiveCategory] = useState('mutuelle-sante')
  
  const categories = [
    { id: 'mutuelle-sante', name: 'Mutuelle Santé' },
    { id: 'assurance-auto', name: 'Assurance Auto' },
    { id: 'assurance-maladie', name: 'Assurance Maladie' },
  ]
  
  const filteredInsurances = mockedInsurances.filter(
    insurance => insurance.categorySlug === activeCategory
  )
  
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Meilleures offres du moment
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Découvrez les assurances les mieux notées par nos utilisateurs
          </motion.p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="featured-insurances-slider">
          <Slider {...settings}>
            {filteredInsurances.map(insurance => (
              <div key={insurance.id} className="px-2 pb-4">
                <InsuranceCard insurance={insurance} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsurances