import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[80vh] flex items-center justify-center bg-gray-50"
    >
      <div className="container-custom max-w-3xl text-center py-12">
        <h1 className="text-6xl font-bold text-primary-800 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </motion.div>
  )
}

export default NotFoundPage