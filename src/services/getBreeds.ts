import { API_URL } from './constants'
import { Breed } from './interfaces'

const messageToBreeds = (message: string[]): Breed[] => {
  const breeds: Breed[] = []

  Object.keys(message).forEach((key: string) => {
    breeds.push({ name: key, origins: message[key] })
  })

  return breeds
}

export const getBreeds = (): Promise<Breed[]> => {
  return fetch(`${API_URL}/breeds/list/all`)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          'Error inesperado al intentar obtener las razas de perros'
        )

      return res.json()
    })
    .then((res) => {
      const { message } = res

      return messageToBreeds(message)
    })
}
