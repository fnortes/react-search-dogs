# Buscador de perros con [Create React App](https://github.com/facebook/create-react-app)

Ejemplo de aplicaci贸n de b煤squeda de perros por raza, en React con Typescript, partiendo de [Create React App](https://github.com/facebook/create-react-app) 馃憤

Se puede leer m谩s sobre este constructor de arquetipos de proyectos SPA con React en [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Tambi茅n se puede revisar m谩s informaci贸n de React en [React documentation](https://reactjs.org/).

## Empezando con el proyecto:

> Se recomienda la instalaci贸n de la extensi贸n de VSC [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

- Tras clonar o decargar el c贸digo fuente, lanzar el siguiente comando desde la terminal para instalar todas las dependencias del proyecto, pudiendo utilizar `npm` o `yarn`:

```bash
yarn install
```

- Arrancar el proyecto en local, en modo desarrollo. Se puede abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador. La p谩gina se refrescar谩 cada vez que se modifiquen los ficheros. Tambi茅n se podr谩n ver los posibles errores de c贸digo por consola.

```bash
yarn start
```

- Para ejecutar Prettier en todo el c贸digo del proyecto y sobrescribir los ficheros correctamente formateados:

```bash
yarn format
```

- Generar la versi贸n distribuible del proyecto, para producci贸n, que estar谩 disponible en el directorio `/build`, tras ejectuar:

```bash
yarn build
```

- Correr los tests del proyecto en modo interactivo de auto refresco si se modifican los ficheros del proyecto:

```bash
yarn test
```

> Se puede ver m谩s informaci贸n en [running tests](https://facebook.github.io/create-react-app/docs/running-tests) .

## Proyecto en producci贸n

Como sistema de integraci贸n continua y despliegue en entorno productivo se ha utilizado [Vercel](https://vercel.com/):

- Enlace a la App: https://react-search-dogs.vercel.app/
- Conectado con github, de forma que cuando se hagan commits sobre la rama master, se lanzar谩 un auto-despliegue.

## Extras a帽adidos sobre [Create React App](https://github.com/facebook/create-react-app)

- Uso de [Prettier](https://prettier.io/), como formateador de c贸digo.
- A帽adido [wouter](https://github.com/molefrog/wouter), como enrutador para React (Elegido por tener un peso menor a [react-router](https://github.com/ReactTraining/react-router) y mayor facilidad de uso)
- A帽adido [react-i18next](https://react.i18next.com/), para soporte multi idioma.
- A帽adido [react-helmet](https://github.com/nfl/react-helmet#readme), para optimizaci贸n del SEO de la Web.
