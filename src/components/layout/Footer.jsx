import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const categories = [
    { name: 'Mutuelle Santé', href: '/category/mutuelle-sante' },
    { name: 'Assurance Auto', href: '/category/assurance-auto' },
    { name: 'Assurance Maladie', href: '/category/assurance-maladie' },
    { name: 'Assurance Habitation', href: '/category/assurance-habitation' },
    { name: 'Assurance Vie', href: '/category/assurance-vie' }
  ]
  
  const resources = [
    { name: 'Actualités', href: '/blog' },
    { name: 'Guide des assurances', href: '/guides' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Glossaire', href: '/glossaire' }
  ]
  
  const company = [
    { name: 'À propos de nous', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company & Description */}
          <div>
            <div className="text-2xl font-bold mb-6">
              Assurance<span className="text-accent-500">Compare</span>
            </div>
            <p className="text-gray-400 mb-6">
              Votre plateforme indépendante de comparaison d'assurances en France. 
              Trouvez l'offre qui correspond parfaitement à vos besoins et à votre budget.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Catégories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.href}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ressources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-accent-500 mt-1 mr-3" />
                <span className="text-gray-400">123 Avenue des Champs-Élysées, 75008 Paris, France</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-accent-500 mr-3" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-accent-500 mr-3" />
                <a href="mailto:contact@assurancecompare.fr" className="text-gray-400 hover:text-accent-500 transition-colors">
                  contact@assurancecompare.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} AssuranceCompare. Tous droits réservés. | Copyright Abdelali Souini
          </div>
          <div className="flex space-x-6">
            {company.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-accent-500 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer