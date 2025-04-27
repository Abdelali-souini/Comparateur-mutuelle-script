import { useState } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    position: "Cliente Mutuelle Santé",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    text: "Grâce à AssuranceCompare, j'ai économisé plus de 300€ par an sur ma mutuelle santé tout en améliorant mes garanties. Le comparatif était clair et la souscription rapide. Je recommande vivement !"
  },
  {
    id: 2,
    name: "Thomas Martin",
    position: "Client Assurance Auto",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    text: "J'avais besoin d'une assurance auto après mon déménagement. Le site m'a permis de comparer facilement toutes les offres disponibles et j'ai trouvé une excellente formule tous risques à un prix très compétitif."
  },
  {
    id: 3,
    name: "Sophie Leroy",
    position: "Cliente Assurance Habitation",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    text: "Interface simple, options de filtrage efficaces et résultats pertinents. J'ai pu souscrire à une assurance habitation parfaitement adaptée à mes besoins en moins de 15 minutes. Service impeccable !"
  },
  {
    id: 4,
    name: "Jean Petit",
    position: "Client Assurance Vie",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    text: "Le service client est exceptionnel. Suite à quelques questions sur les assurances vie, un conseiller m'a rappelé rapidement et m'a guidé vers la meilleure solution pour préparer ma retraite."
  }
]

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveSlide(next)
  }

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Ce que nos clients disent
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Des milliers d'utilisateurs satisfaits ont trouvé leur assurance idéale
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4">
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 md:p-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: activeSlide === index ? 1 : 0,
                    scale: activeSlide === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-20 h-20 mx-auto md:mx-0 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-center md:justify-start mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-4 -left-2 text-gray-200 opacity-50 text-4xl" />
                        <p className="text-gray-700 italic mb-6 relative">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials