# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# react-search-dogs

Ejemplo de aplicación de búsqueda de perros por raza, en React.

Desarrollado 100% desde cero 👍

## Empezando con el proyecto:

> Se recomienda la instalación de las extensiones de VSC [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

- Tras clonar o decargar el código fuente, lanzar el siguiente comando desde la terminal para instalar todas las dependencias del proyecto:

```bash
npm i
```

- Arrancar el proyecto en local, en modo desarrollo:

```bash
npm run start
```

- Ejecutar ESLint y Prettier para limpiar el código:

```bash
npm run lint
```

- Generar la versión distribuible del proyecto, en modo producción, que estará disponible en el directorio `/public`, tras ejectuar:

```bash
npm run build
```

- Tras ejecutar el comando anterior, si se quiere levantar un servidor en local para probar la versión de producción, ejecutar:

```bash
npm run serve
```

## Notas de cosas a añadir:

- Utilizar Saga observable.
- Usar Memo
- Añadir tests unitarios

## Elegido [esbuild](https://esbuild.github.io/) como Bundler para el proyecto:

Como dicen en su propia web, [esbuild](https://esbuild.github.io/) "is an extremely fast JavaScript bundler":

![An extremely fast JavaScript bundler](https://user-images.githubusercontent.com/10447789/111673217-0ab41280-881b-11eb-90da-edebb6c477b0.jpg)

Ciertamente, haciendo pruebas en local llega a ser hasta 100 veces más rápido que webpack.

Esbuild no tiene hasing

## Elegido [servor](https://github.com/lukejacksonn/servor) como servidor de ficheros:

Entre sus características:

🗂 Sirve contenido estático como scripts, estilos o imágenes.

♻️ Recarga el navegador cuando los se añaden, eliminan o modifcian ficheros del proyecto.

🗃 Abre una pestaña del navegador y el editor de código para un inicio rápido.

## Uso de [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/):

- ESLint para encontrar y corregir problemas en el código Javascript.
- Prettier como formateador de código.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) para que ESLint y Prettier no entren en conflicto y ESLint ceda el formateo de código a Prettier.
- [lint-staged](https://github.com/okonet/lint-staged#readme), paquete que permite usar EsLint y Prettier para validar los commits, mediante [husky](https://github.com/typicode/husky).
