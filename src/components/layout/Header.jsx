import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ isLoggedIn, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Mutuelle Santé', href: '/category/mutuelle-sante' },
    { name: 'Assurance Auto', href: '/category/assurance-auto' },
    { name: 'Assurance Maladie', href: '/category/assurance-maladie' },
    { name: 'Toutes les Assurances', href: '/category/all' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary-800 font-bold text-2xl"
          >
            Assurance<span className="text-accent-500">Compare</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`
                font-medium transition-colors duration-200
                ${location.pathname === item.href 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-500'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-primary-500 transition-colors duration-200">
            <FaSearch />
          </button>
          
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                <FaUserCircle className="text-xl" />
                <span>Admin</span>
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <button 
                    onClick={onLogout} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/admin/login" className="btn btn-primary">
              Espace Admin
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div 
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 bg-white shadow-inner">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  font-medium px-3 py-2 rounded-md transition-colors duration-200
                  ${location.pathname === item.href 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link 
                  to="/admin" 
                  className="px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-md"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={onLogout} 
                  className="px-3 py-2 font-medium text-left text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-md"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link to="/admin/login" className="btn btn-primary">
                Espace Admin
              </Link>
            )}
          </nav>
        </div>
      </motion.div>
    </header>
  )
}

export default Header