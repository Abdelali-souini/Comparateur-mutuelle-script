import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom pt-32 pb-20 lg:pt-48 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Comparez les meilleures assurances en France
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Trouvez l'assurance idéale au meilleur prix. Économisez du temps et de l'argent en comparant les offres des principaux assureurs français en quelques clics.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/category/mutuelle-sante" className="btn bg-white text-primary-800 hover:bg-blue-50">
                Comparer les mutuelles santé
              </Link>
              <Link to="/category/assurance-auto" className="btn bg-accent-500 text-white hover:bg-accent-600">
                Comparer les assurances auto
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center overflow-hidden">
                    <div className="text-white font-medium text-xs">U{i}</div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-blue-100">
                  <span className="font-bold">+10,000</span> utilisateurs satisfaits
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-6 bg-primary-50">
                <h2 className="text-2xl font-bold text-primary-800 mb-1">Trouvez votre assurance</h2>
                <p className="text-gray-600">Comparez les meilleures offres en quelques secondes</p>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Catégorie d'assurance
                  </label>
                  <select className="input">
                    <option>Mutuelle santé</option>
                    <option>Assurance auto</option>
                    <option>Assurance maladie</option>
                    <option>Assurance habitation</option>
                    <option>Assurance vie</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input type="text" className="input" placeholder="Ex: 75000" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Âge
                  </label>
                  <input type="number" className="input" placeholder="Ex: 35" />
                </div>
                
                <button className="w-full btn btn-primary py-3">
                  Comparer les offres
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero