import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaCar, FaHome, FaUserMd, FaUmbrella } from 'react-icons/fa'

const categories = [
  {
    id: 'mutuelle-sante',
    name: 'Mutuelle Santé',
    icon: FaHeartbeat,
    color: 'bg-blue-500',
    description: 'Couvrez vos frais médicaux et obtenez les meilleurs remboursements',
    href: '/category/mutuelle-sante'
  },
  {
    id: 'assurance-auto',
    name: 'Assurance Auto',
    icon: FaCar,
    color: 'bg-green-500',
    description: 'Protégez votre véhicule avec l\'assurance adaptée à vos besoins',
    href: '/category/assurance-auto'
  },
  {
    id: 'assurance-habitation',
    name: 'Assurance Habitation',
    icon: FaHome,
    color: 'bg-yellow-500',
    description: 'Sécurisez votre logement et vos biens personnels',
    href: '/category/assurance-habitation'
  },
  {
    id: 'assurance-maladie',
    name: 'Assurance Maladie',
    icon: FaUserMd,
    color: 'bg-red-500',
    description: 'Complétez votre couverture de la Sécurité Sociale',
    href: '/category/assurance-maladie'
  },
  {
    id: 'assurance-vie',
    name: 'Assurance Vie',
    icon: FaUmbrella,
    color: 'bg-purple-500',
    description: 'Préparez votre avenir et celui de vos proches',
    href: '/category/assurance-vie'
  }
]

const CategorySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
            Catégories d'assurances
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Découvrez et comparez les meilleures offres dans chaque catégorie d'assurance
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            
            return (
              <motion.div 
                key={category.id}
                variants={itemVariants}
                className="card card-hover"
              >
                <Link to={category.href} className="block h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className={`w-14 h-14 ${category.color} rounded-lg text-white flex items-center justify-center mb-5`}>
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-5 flex-grow">
                      {category.description}
                    </p>
                    
                    <div className="text-primary-600 font-medium flex items-center mt-auto">
                      Comparer les offres
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CategorySection