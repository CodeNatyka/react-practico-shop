# Curso Práctico de React.js :purple_heart:

Es un proyecto creado en el curso Práctico de React.js de Platzi. Estas son las notas de la clase e instalacion del proyecto paso a paso.

**(Recursos en figma, diseno del eshop)**

https://scene.zeplin.io/project/60afeeed20af1378ed046538

https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A719&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=0%3A719

https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=5%3A2808&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A998&amp%3Bstarting-point-node-id=5%3A2808

## Configurar Entorno de Desarrollo

```
git init
npm init
npm install react react-dom
```

## Configuración de Webpack y Babel

Webpack genera un recopilado (literalmente un manojo) de todos los diferentes tipos de archivo en uno solo. Ejemplo tenemos muchos .js los recopila en un solo archivo .js
Babel es el traductor que hace que nuestro codigo escrito en ECS6 funcione en cualquier navegador

```
npm install @babel/core @babel/preset/env @babel/preset-react
npm install webpack webpack-cli webpack-dev-server
```

**(Pluggins y Loaders)**
Los Loaders son como paquetes, que le dicen a Webpack como transformar o como manipular diferentes tipos de archivos.
Este recurso en youtube explica bastante Webpack: https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8

```
npm install babel-loader html-loader html-webpack-plugin

npm i mini-css-extract-plugin

npm install style-loader

npm install css-loader

npm install  -g sass

npm install sass-loader

npm install style-loader --save
```

## Configuración de Codigo

touch es un comando en la terminal (para poner en practica lo aprendido, me parecio mas rapido manejarlo asi), para crear los archivos.
los archivos que empiezan con . (punto) son archivos ocultos

- touch .babelrc

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

- webpack.config.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),

	],
	devServer: {
		allowedHosts: path.join(__dirname, 'dist'),
		compress: true,
		port: 3005,
	}
}
```

## Transformando HTML y CSS en componentes de React y Estilos

> Clonamos el repo donde esta el maquetado de HTML y CSS para tenerlo como ejemplo.
> Estructurar el proyecto: se crean componentes y contenedores dependiendo de la necesidad.
> Se crean los archivos de saas dependiendo de la necesidad.

> Diferenciemos componente de “contenedor” en react. Los contenedores o módulos son partes más grandes. En este caso puede ser todo el login. Sin embargo, un componente puede ser un input o un form. Los componentes deben mantenerse pequeños y responder a uno sola necesidad, si no, perdemos funcionalidad.

## React Router Dome

```
npm install react-router-dom@6
```

Agregamos la navegacion entre diferentes rutas, para ello recurrir a la documentacion de RRD6

## Atomic Design

Aplicando Atomic Design como metodología de diseño de producto, creamos todos los componentes, paginas y layouts de acuerdo al diseno del shop, y de una vez integramos el header en cada una de las paginas.

## useEffect y consumo de APIs

Para esta clase debemos instalar Axios y un componente de babel para que webpack entienda los llamados a la API con async y await

```
    npm install axios

    npm install @babel/plugin-transform-runtime

```

modificar arhico **.babelrc** para agregar esto:

```
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
```

1. Realizar un `git pull origin master` para obtener la última versión desde el repositorio en tu cuenta
   **HTTPS**

   ```
   git clone https://github.com/[tu_usuario]/gitCommands.git
   ```

   donde **[tu_usuario]** hace referencia a tu nombre de usuario en GitHub.
