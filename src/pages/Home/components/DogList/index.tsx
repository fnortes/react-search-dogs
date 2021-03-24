import { FC, memo } from 'react'
import DogImg from 'components/Dog'
import { Dog } from 'services/interfaces'
import './styles.css'

interface Props {
  dogs: Dog[]
}

const DogList: FC<Props> = ({ dogs }) => {
  return (
    <ul data-testid="list" className="App-dog-list">
      {dogs.map((dog) => (
        <li key={dog.id.name}>
          <DogImg dog={dog} withLink />
        </li>
      ))}
    </ul>
  )
}

/**
 * Sólo cuando cambien los datos de los dogs, queremos reenderizar el componente.
 * Si tras hacer una primera busqueda por una raza, se vuelve a lanzar la misma
 * búsqueda de nuevo, este componente no vuelve a renderizarse, en caso de que
 * el servicio de perros devuelva los mismos resultados.
 */
export default memo(DogList, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.dogs) === JSON.stringify(nextProps.dogs)
})
