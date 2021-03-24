import { render } from '@testing-library/react'
import App from '../../../App'

test('Home work as expected', async () => {
  const { findByText, findByRole } = render(<App />)

  const title = await findByText(/home.title/i)
  const loading = await findByText(/home.loadingBreeds/i)
  const searchButton = await findByRole('button')

  expect(title).toBeVisible()
  expect(loading).toBeVisible()
  expect(searchButton).toBeVisible()
})
