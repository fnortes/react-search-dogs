import React, { FC, useEffect } from 'react'
import { DefaultParams, useLocation } from 'wouter'
import DogImg from '../../components/Dog'
import checkImage from '../../services/checkImage'
import { Dog } from '../../services/interfaces'

interface Params extends DefaultParams {
  breed: string
  id: string
  ext: string
}

interface Props {
  params: Params
}

const DogDetail: FC<Props> = ({ params }) => {
  const [, setLocation] = useLocation()

  const dog: Dog = {
    img: `https://images.dog.ceo/breeds/${params.breed}/${params.id}.${params.ext}`,
    protocol: 'https://',
    domain: 'images.dog.ceo',
    breed: params.breed,
    path: 'breeds',
    id: {
      name: params.id,
      extension: params.ext
    }
  }

  useEffect(() => {
    checkImage(dog.img).then((res) => {
      if (!res) setLocation('/404')
    })
  }, [])

  return (
    <section className="App-page">
      <DogImg dog={dog} />
    </section>
  )
}

export default DogDetail
