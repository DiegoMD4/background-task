module.exports = {
    env: {
      browser: false,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended' // Asegura que Prettier se ejecute como última regla
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      // Permitir el uso de punto y coma
      'semi': ['error', 'always'],
      // Forzar el uso de comillas simples para cadenas de texto
      'quotes': ['error', 'single'],
      // Prettier debe estar siempre al final para que no haya conflictos
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'semi': true
      }],
      // Reglas adicionales que puedes personalizar
      'no-unused-vars': ['warn'],
      'no-console': 'off'
    }
  };
  