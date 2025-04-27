import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CategoryEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Modifier la catégorie
      </h1>
      
      <div className="space-y-4">
        {/* Placeholder for category edit form */}
        <p className="text-gray-600">
          Formulaire d'édition pour la catégorie ID: {id}
        </p>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => navigate('/admin/categories')}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Annuler
          </button>
          <button
            onClick={() => navigate('/admin/categories')}
            className="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryEdit