import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Choisissez votre catégorie',
    description: 'Sélectionnez le type d\'assurance qui vous intéresse parmi nos nombreuses catégories.'
  },
  {
    number: '02',
    title: 'Renseignez vos besoins',
    description: 'Indiquez vos critères et besoins spécifiques pour une comparaison sur mesure.'
  },
  {
    number: '03',
    title: 'Comparez les offres',
    description: 'Visualisez et analysez facilement les différentes offres selon vos critères.'
  },
  {
    number: '04',
    title: 'Souscrivez en ligne',
    description: 'Une fois votre choix fait, souscrivez directement en ligne en toute simplicité.'
  }
]

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section className="section bg-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Comment ça fonctionne ?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Trouvez votre assurance idéale en 4 étapes simples
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-primary-700 mb-4 opacity-30">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-700 transform -translate-x-8 opacity-30" />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <button className="btn bg-white text-primary-800 hover:bg-blue-50">
            Commencer maintenant
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks