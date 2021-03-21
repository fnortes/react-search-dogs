import * as React from 'react'
import { version } from '../package.json'
import { sayHi } from './module.js'
import './styles.css'

export default function App() {
  return (
    <h1>
      Hola {sayHi()} en la version {version}
    </h1>
  )
}
