import { FC, useEffect } from 'react'
import { DefaultParams, useLocation } from 'wouter'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
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
  const { t } = useTranslation()

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
  }, [setLocation, dog.img])

  return (
    <section className="App-page">
      <h1>{t('dogDetail.title')}</h1>
      <Button href="/">{t('dogDetail.backToHome')}</Button>
      <DogImg dog={dog} />
    </section>
  )
}

export default DogDetail
