// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  /**
   * Este mock es para los tests. Permite poder renderizar cualquier
   * componente aunque utilice el hook useTranslation, devolviendo
   * siempre la propia key de traducción.
   */
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  }
}))
