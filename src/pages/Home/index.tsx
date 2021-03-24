import { FC, lazy, Suspense, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Spinner from '../../components/Spinner'
import { useDogs } from '../../hooks/useDogs'
import { getDogs } from '../../services/getDogs'
import { Breed, Dog } from '../../services/interfaces'
import SearchForm from './components/Form'

/**
 * Se carga el componente del listado de perros de forma lazy, sólo cuando
 * se haga la primera consulta y se obtengan correctamente los resultados.
 */
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
      <Helmet>
        <title>
          {t('home.title')} | {t('common.title')}
        </title>
      </Helmet>
      <h2>{t('home.title')}</h2>
      <SearchForm onSubmit={handleSubmit} />
      {loading ? (
        <Spinner loading={loading} text={t('home.loadingDogs')} />
      ) : error !== null ? (
        <div>{error}</div>
      ) : null}
      {dogs.length > 0 && (
        <Suspense fallback={<span>{t('common.loading')}</span>}>
          <LazyDogList dogs={dogs} />
        </Suspense>
      )}
    </section>
  )
}

export default Home
