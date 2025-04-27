import React from 'react'
import { useParams } from 'react-router-dom'

const InsuranceEdit = () => {
  const { id } = useParams()

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Modifier l'assurance
      </h1>
      
      <div className="text-gray-600">
        Formulaire d'édition pour l'assurance ID: {id}
      </div>
    </div>
  )
}

export default InsuranceEdit