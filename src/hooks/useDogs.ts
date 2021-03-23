import React, { useContext, useState } from 'react'
import DogsContext from '../contexts/DogsContext'
import { Breed } from '../services/interfaces'

export interface DogsHook {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  error: string | null
  setError: React.Dispatch<React.SetStateAction<string | null>>
  breed: string
  setBreed: React.Dispatch<React.SetStateAction<string>>
  breeds: Breed[]
  setBreeds: React.Dispatch<React.SetStateAction<Breed[]>>
}

export const useDogs = (): DogsHook => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { breed, setBreed, breeds, setBreeds } = useContext(DogsContext)

  return {
    loading,
    setLoading,
    error,
    setError,
    breed,
    setBreed,
    breeds,
    setBreeds
  }
}
