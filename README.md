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

- Añadir Typescript
- Utilizar Saga observable.
- Añadir JsDocs para documentación de componentes.
- Usar carga de componentes Lazy
- Añadir soporte multi-idioma

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
