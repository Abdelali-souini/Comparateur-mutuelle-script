import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaTachometerAlt, FaCar, FaHeartbeat, FaUserMd, 
  FaUsers, FaChartLine, FaSignOutAlt, FaCog, FaBars
} from 'react-icons/fa'

// Admin Components
import Overview from './components/Overview'
import InsurancesList from './components/InsurancesList'
import InsuranceEdit from './components/InsuranceEdit'
import InsuranceCreate from './components/InsuranceCreate'
import CategoryList from './components/CategoryList'
import CategoryEdit from './components/CategoryEdit'
import UsersList from './components/UsersList'
import SettingsPage from './components/SettingsPage'
import AdminNotFound from './components/AdminNotFound'

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  useEffect(() => {
    // Set page title
    document.title = 'Dashboard Admin - AssuranceCompare'
    
    // Close sidebar on route change (mobile)
    setIsSidebarOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  const sidebarItems = [
    { 
      name: 'Tableau de bord', 
      icon: FaTachometerAlt, 
      path: '/admin',
      exact: true 
    },
    { 
      name: 'Assurances', 
      icon: FaCar, 
      path: '/admin/insurances' 
    },
    { 
      name: 'Catégories', 
      icon: FaHeartbeat, 
      path: '/admin/categories' 
    },
    { 
      name: 'Utilisateurs', 
      icon: FaUsers, 
      path: '/admin/users' 
    },
    { 
      name: 'Statistiques', 
      icon: FaChartLine, 
      path: '/admin/stats' 
    },
    { 
      name: 'Paramètres', 
      icon: FaCog, 
      path: '/admin/settings' 
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Top bar */}
      <div className="fixed top-16 left-0 right-0 z-30 bg-white shadow-sm h-14 flex items-center px-4">
        <button 
          className="mr-4 text-gray-500 hover:text-primary-600 focus:outline-none lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={20} />
        </button>
        
        <div className="font-medium text-gray-800">
          Administration
        </div>
        
        <div className="ml-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center text-gray-700 hover:text-primary-600"
          >
            <FaSignOutAlt className="mr-2" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
      
      {/* Sidebar */}
      <div 
        className={`fixed top-30 left-0 z-40 w-64 h-[calc(100vh-30px)] bg-white shadow-md transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-5 border-b">
            <div className="text-xl font-bold text-primary-800">
              AssuranceCompare<span className="text-accent-500">Admin</span>
            </div>
          </div>
          
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path || 
                                (!item.exact && location.pathname.startsWith(item.path))
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-5 py-3 transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <button 
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-primary-600 w-full"
            >
              <FaSignOutAlt className="w-5 h-5 mr-3" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="lg:pl-64 pt-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/insurances" element={<InsurancesList />} />
            <Route path="/insurances/new" element={<InsuranceCreate />} />
            <Route path="/insurances/:id" element={<InsuranceEdit />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/:id" element={<CategoryEdit />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<AdminNotFound />} />
          </Routes>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard