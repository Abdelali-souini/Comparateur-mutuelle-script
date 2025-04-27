import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'

// Pages
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ComparisonPage from './pages/ComparisonPage'
import AdminDashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/Login'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Mock function for authentication
  const handleLogin = (credentials) => {
    // In a real app, this would verify against backend
    if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/compare/:categorySlug" element={<ComparisonPage />} />
            <Route 
              path="/admin/login" 
              element={<AdminLogin onLogin={handleLogin} isLoggedIn={isLoggedIn} />} 
            />
            <Route 
              path="/admin/*" 
              element={
                isLoggedIn ? <AdminDashboard onLogout={handleLogout} /> : <AdminLogin onLogin={handleLogin} />
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App