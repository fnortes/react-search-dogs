import {
  BaseSyntheticEvent,
  FC,
  FormEvent,
  FormEventHandler,
  useEffect
} from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../../components/Button'
import Spinner from '../../../../components/Spinner'
import { useDogs } from '../../../../hooks/useDogs'
import { getBreeds } from '../../../../services/getBreeds'

interface Props {
  onSubmit: (breed: string) => void
}

const SearchForm: FC<Props> = ({ onSubmit }) => {
  const {
    loading,
    setLoading,
    error,
    setError,
    breed,
    setBreed,
    breeds,
    setBreeds
  } = useDogs()

  const { t } = useTranslation()

  useEffect(() => {
    if (breeds.length === 0) {
      setLoading(true)
      setError(null)

      getBreeds()
        .then(setBreeds)
        .catch((err: Error) => {
          setError(err.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [setBreeds, setError, setLoading, breeds.length])

  const handleChange = (event: BaseSyntheticEvent) => {
    setBreed(event.target.value)
  }

  const handleSubmit: FormEventHandler = (event: FormEvent) => {
    event.preventDefault()

    onSubmit(breed)
  }

  return loading ? (
    <Spinner loading={loading} text={t('home.loadingBreeds')} />
  ) : error !== null ? (
    <div>{error}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={breed} onChange={handleChange}>
          <option disabled value="-1">
            {t('home.selectBreed')}
          </option>
          {breeds.map((b) => (
            <option key={b.name}>{b.name}</option>
          ))}
        </select>
      </label>
      <Button>
        <span>{t('home.search')}</span>
      </Button>
    </form>
  )
}

export default SearchForm
