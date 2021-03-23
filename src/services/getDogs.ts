import { API_URL } from './constants'
import { Breed, Dog } from './interfaces'

export const getDogs = (breed: Breed['name']): Promise<Dog[]> => {
  return fetch(`${API_URL}/breed/${breed}/images`)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Error inesperado al intentar obtener los perros de la raza ${breed}`
        )

      return res.json()
    })
    .then((res) => {
      const { message } = res

      return message.map((m: string) => {
        const [protocol, , domain, path, breed, id] = m.split('/')
        const [name, extension] = id.split('.')

        return {
          img: m,
          protocol: `${protocol}//`,
          domain,
          path,
          breed,
          id: { name, extension }
        }
      })
    })
}