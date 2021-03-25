# Buscador de perros con [Create React App](https://github.com/facebook/create-react-app)

Ejemplo de aplicación de búsqueda de perros por raza, en React con Typescript, partiendo de [Create React App](https://github.com/facebook/create-react-app) 👍

Se puede leer más sobre este constructor de arquetipos de proyectos SPA con React en [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

También se puede revisar más información de React en [React documentation](https://reactjs.org/).

## Empezando con el proyecto:

> Se recomienda la instalación de la extensión de VSC [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

- Tras clonar o decargar el código fuente, lanzar el siguiente comando desde la terminal para instalar todas las dependencias del proyecto, pudiendo utilizar `npm` o `yarn`:

```bash
yarn install
```

- Arrancar el proyecto en local, en modo desarrollo. Se puede abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador. La página se refrescará cada vez que se modifiquen los ficheros. También se podrán ver los posibles errores de código por consola.

```bash
yarn start
```

- Para ejecutar Prettier en todo el código del proyecto y sobrescribir los ficheros correctamente formateados:

```bash
yarn format
```

- Generar la versión distribuible del proyecto, para producción, que estará disponible en el directorio `/build`, tras ejectuar:

```bash
yarn build
```

- Correr los tests del proyecto en modo interactivo de auto refresco si se modifican los ficheros del proyecto:

```bash
yarn test
```

> Se puede ver más información en [running tests](https://facebook.github.io/create-react-app/docs/running-tests) .

## Proyecto en producción

Como sistema de integración continua y despliegue en entorno productivo se ha utilizado [Vercel](https://vercel.com/):

- Enlace a la App: https://react-search-dogs.vercel.app/
- Conectado con github, de forma que cuando se hagan commits sobre la rama master, se lanzará un auto-despliegue.

## Extras añadidos sobre [Create React App](https://github.com/facebook/create-react-app)

- Uso de [Prettier](https://prettier.io/), como formateador de código.
- Añadido [wouter](https://github.com/molefrog/wouter), como enrutador para React (Elegido por tener un peso menor a [react-router](https://github.com/ReactTraining/react-router) y mayor facilidad de uso)
- Añadido [react-i18next](https://react.i18next.com/), para soporte multi idioma.
- Añadido [react-helmet](https://github.com/nfl/react-helmet#readme), para optimización del SEO de la Web.
