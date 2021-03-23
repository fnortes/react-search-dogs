import * as React from 'react'
import { useTranslation } from 'react-i18next'

const ErrorPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="App-page">
      <h1>{t('errorPage.title')}</h1>
    </section>
  )
}

export default ErrorPage
