import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar, FaCheck } from 'react-icons/fa'

const InsuranceCard = ({ insurance, showDetails = false }) => {
  const {
    id,
    name,
    logo,
    rating,
    price,
    category,
    features = [],
    description,
    categorySlug
  } = insurance

  // Animation variants for the card
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="card"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-16 w-32 flex items-center">
            <img 
              src={logo} 
              alt={`Logo ${name}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex items-center">
            {Array(5).fill(0).map((_, index) => (
              <FaStar 
                key={index}
                className={`w-5 h-5 ${
                  index < Math.floor(rating) 
                    ? 'text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        
        {!showDetails ? (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        ) : (
          <>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-700 mb-2">Caractéristiques principales :</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">À partir de</span>
            <div className="text-2xl font-bold text-primary-600">{price}€<span className="text-sm font-normal text-gray-500">/mois</span></div>
          </div>
          
          {!showDetails ? (
            <Link
              to={`/category/${categorySlug}/${id}`}
              className="btn btn-primary"
            >
              Voir l'offre
            </Link>
          ) : (
            <Link
              to={`/compare/${categorySlug}?selected=${id}`}
              className="btn btn-accent"
            >
              Comparer
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default InsuranceCard