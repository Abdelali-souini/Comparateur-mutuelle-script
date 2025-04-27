import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AdminNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center py-12"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Page non trouvée
      </h1>
      <p className="text-gray-600 mb-8">
        La page que vous recherchez n'existe pas dans l'interface d'administration.
      </p>
      <Link to="/admin" className="btn btn-primary">
        Retour au tableau de bord
      </Link>
    </motion.div>
  )
}

export default AdminNotFound