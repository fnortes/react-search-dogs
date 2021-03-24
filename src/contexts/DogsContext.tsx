import React, { FC, ReactNode, useState } from 'react'
import { Breed } from 'services/interfaces'

interface ContextProps {
  breed: string
  setBreed: React.Dispatch<React.SetStateAction<string>>
  breeds: Breed[]
  setBreeds: React.Dispatch<React.SetStateAction<Breed[]>>
}

const Context = React.createContext({} as ContextProps)

interface Props {
  children: ReactNode
}

export const DogsContextProvider: FC<Props> = ({ children }) => {
  const [breed, setBreed] = useState<string>('-1')
  const [breeds, setBreeds] = useState<Breed[]>([])

  return (
    <Context.Provider
      value={{
        breed,
        setBreed,
        breeds,
        setBreeds
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
