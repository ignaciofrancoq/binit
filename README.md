
# BINIT - Página Institucional

Este es el proyecto de la página institucional de **BINIT**. 
Desarrollado por [**Maria Pia Zaniboni**](https://www.linkedin.com/in/maria-pia-zaniboni/)

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (Recomendado: versión LTS)
- [npm](https://npmjs.com/) (Generalmente se instala junto con Node.js)

## Instalación

Para comenzar a trabajar con este proyecto, sigue estos pasos:

### 1. Clonar el repositorio

Clona el repositorio a tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/PiaZaniboni/binit
```

### 2. Navegar al directorio del proyecto

Accede a la carpeta del proyecto clonado:

```bash
cd binit
```

### 3. Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```
### 4. Configuración del archivo .env

Este proyecto utiliza variables de entorno para conectar con el chatbot de Serenity Star. Para que funcione correctamente, necesitás crear un archivo .env en la raíz del proyecto con el siguiente contenido:

```bash
PUBLIC_CHATBOT_API_KEY=####
PUBLIC_CHATBOT_AGENT_CODE=####
```

Podes cambiarle el nombre al archivo de ejemplo env_example

## Desarrollo

Para iniciar el servidor de desarrollo y ver el proyecto en acción, usa el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a tu sitio en [http://localhost:4321/es](http://localhost:4321/es).

## Construcción (Build)

Cuando estés listo para construir el proyecto para producción, usa el siguiente comando:

```bash
npm run build
```

Este comando generará los archivos optimizados para producción en la carpeta `dist/`. Estos archivos estarán listos para ser desplegados en un servidor o plataforma de hosting.

## Desplegar

Una vez que hayas realizado el build, puedes subir los archivos generados en la carpeta `dist/` a tu servidor o servicio de hosting preferido.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye los archivos optimizados para producción.
- `npm run preview`: Muestra el sitio generado como se verá en producción (usando los archivos en `dist/`).

## URL Home
`http://localhost:4321/es/`

## Configuración de idioma

TODO, detallar como sumar idiomas:
`src/content`
`src/lib/i18n.ts`