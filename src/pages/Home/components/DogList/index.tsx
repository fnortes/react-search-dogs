import { FC } from 'react'
import DogImg from '../../../../components/Dog'
import { Dog } from '../../../../services/interfaces'
import './styles.css'

interface Props {
  dogs: Dog[]
}

const DogList: FC<Props> = ({ dogs }) => {
  return (
    <ul className="App-dog-list">
      {dogs.map((dog) => (
        <li key={dog.id.name}>
          <DogImg dog={dog} withLink />
        </li>
      ))}
    </ul>
  )
}

export default DogList
