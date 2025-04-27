import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLock, FaEnvelope } from 'react-icons/fa'

const Login = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Set page title
    document.title = 'Connexion Admin - AssuranceCompare'
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    // Simulating API call with timeout
    setTimeout(() => {
      const success = onLogin(credentials)
      
      if (success) {
        navigate('/admin')
      } else {
        setError('Email ou mot de passe incorrect')
        setIsLoading(false)
      }
    }, 1000)
  }

  // If already logged in, redirect to admin dashboard
  if (isLoggedIn) {
    return <Navigate to="/admin" replace />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 pt-32 pb-12"
    >
      <div className="container-custom max-w-md">
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Espace Administrateur
              </h1>
              <p className="text-gray-600">
                Connectez-vous pour gérer vos assurances
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-error-600 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    className="input pl-10"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    className="input pl-10"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mt-1 text-right">
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-500">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full py-3"
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Pour la démonstration, utilisez :</p>
              <p className="font-medium">Email: admin@example.com / Mot de passe: password</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Login