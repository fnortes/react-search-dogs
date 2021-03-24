import { render } from '@testing-library/react'
import DogList from '../../../../../pages/Home/components/DogList'

test('Home work as expected', async () => {
  const dogs = [
    {
      img: 'http://www.test.com/image.jpg',
      protocol: 'http://',
      domain: 'www.test.com',
      path: '',
      breed: '',
      id: {
        name: 'image',
        extension: 'jpg'
      }
    }
  ]

  const { findByTestId } = render(<DogList dogs={dogs} />)

  const list = await findByTestId('list')
  expect(list.querySelector('li').childElementCount).toEqual(1)
})
