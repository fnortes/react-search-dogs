import { FC, lazy, Suspense, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Spinner from '../../components/Spinner'
import { useDogs } from '../../hooks/useDogs'
import { getDogs } from '../../services/getDogs'
import { Breed, Dog } from '../../services/interfaces'
import SearchForm from './components/Form'

const LazyDogList = lazy(() => import('./components/DogList'))

const Home: FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([])
  const { loading, setLoading, error, setError } = useDogs()

  const { t } = useTranslation()

  const handleSubmit = useCallback(
    (breed: Breed['name']) => {
      setLoading(true)
      setError(null)

      getDogs(breed)
        .then(setDogs)
        .catch((err: Error) => {
          setError(err.message)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [setError, setLoading]
  )

  return (
    <section className="App-page">
      <h1>{t('home.title')}</h1>
      <SearchForm onSubmit={handleSubmit} />
      {loading ? (
        <Spinner loading={loading} text={t('home.loadingDogs')} />
      ) : error !== null ? (
        <div>{error}</div>
      ) : (
        <Suspense fallback={<span>{t('common.loading')}</span>}>
          {dogs.length > 0 && <LazyDogList dogs={dogs} />}
        </Suspense>
      )}
    </section>
  )
}

export default Home
