import React, { FC, useCallback, useState } from 'react'
import Spinner from '../../components/Spinner'
import { useDogs } from '../../hooks/useDogs'
import { getDogs } from '../../services/getDogs'
import { Breed, Dog } from '../../services/interfaces'
import DogList from './components/DogList'
import SearchForm from './components/Form'

const Home: FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([])
  const { loading, setLoading, error, setError } = useDogs()

  const handleSubmit = useCallback((breed: Breed['name']) => {
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
  }, [setError, setLoading])

  return (
    <section className="App-page">
      <SearchForm onSubmit={handleSubmit} />
      {loading ? (
        <Spinner loading={loading} text="Cargando los perros ..." />
      ) : error !== null ? (
        <div>{error}</div>
      ) : (
        <DogList dogs={dogs} />
      )}
    </section>
  )
}

export default Home