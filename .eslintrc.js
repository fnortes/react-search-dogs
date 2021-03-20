const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: '17.0.1'
    }
  },
  ignorePatterns: ['**/bundle/*.js'],
  rules: {
    // 'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF
  }
}
