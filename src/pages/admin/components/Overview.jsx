import { FaUsers, FaCar, FaHeartbeat, FaChartLine, FaEye } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Overview = () => {
  const stats = [
    {
      id: 1,
      name: 'Utilisateurs',
      value: '12,486',
      change: '+12%',
      increasing: true,
      icon: FaUsers,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Assurances',
      value: '178',
      change: '+3%',
      increasing: true,
      icon: FaCar,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Catégories',
      value: '8',
      change: '0%',
      increasing: null,
      icon: FaHeartbeat,
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      name: 'Comparaisons',
      value: '8,674',
      change: '+24%',
      increasing: true,
      icon: FaChartLine,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Visites',
      value: '32,568',
      change: '+18%',
      increasing: true,
      icon: FaEye,
      color: 'bg-red-500'
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600">
          Bienvenue dans votre espace administrateur AssuranceCompare.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: stat.id * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg text-white flex items-center justify-center mr-4`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {stat.name}
                    </h3>
                    <p 
                      className={`text-sm ${
                        stat.increasing 
                          ? 'text-green-600' 
                          : stat.increasing === false 
                            ? 'text-red-600' 
                            : 'text-gray-600'
                      }`}
                    >
                      {stat.change} ce mois-ci
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activty */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Activité récente
            </h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4 flex-shrink-0">
                    U{item}
                  </div>
                  <div>
                    <p className="text-gray-800">
                      <span className="font-medium">Utilisateur #{(10000 + item)}</span> a comparé 3 assurances auto
                    </p>
                    <p className="text-sm text-gray-500">
                      Il y a {item * 2} heures
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Popular Insurances */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Assurances populaires
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[
                { name: 'AssurAuto Premium', category: 'Assurance Auto', views: '2,486', trend: '+12%' },
                { name: 'MutuelleSanté Plus', category: 'Mutuelle Santé', views: '1,895', trend: '+23%' },
                { name: 'AssurMaladie Confort', category: 'Assurance Maladie', views: '1,284', trend: '+8%' },
                { name: 'MaVie Assurance', category: 'Assurance Vie', views: '943', trend: '+5%' },
                { name: 'HabitatProtect', category: 'Assurance Habitation', views: '876', trend: '+15%' }
              ].map((insurance, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {insurance.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {insurance.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      {insurance.views} vues
                    </p>
                    <p className="text-sm text-green-600">
                      {insurance.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overview