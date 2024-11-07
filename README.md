# Portafolio Personal

Este es el código fuente de mi portafolio personal, desarrollado con React, Tailwind CSS, y animado con Framer Motion. La aplicación permite a los usuarios navegar por mis proyectos, obtener más información sobre mí y ponerse en contacto a través de un formulario que utiliza EmailJS.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Características

- **Diseño Responsivo**: Adaptado para dispositivos móviles y de escritorio.
- **Animaciones**: Efectos sutiles y animaciones interactivas gracias a Framer Motion.
- **Formulario de Contacto**: Permite enviar mensajes directamente a través de EmailJS.
- **Estilizado con Tailwind CSS**: Proporciona un diseño limpio y moderno con clases utilitarias.

## Tecnologías

- **React** (v18): Biblioteca de JavaScript para la creación de interfaces de usuario.
- **Framer Motion** (v11): Herramienta de animación para crear transiciones y efectos visuales.
- **Tailwind CSS** (v3): Framework CSS de utilidades para un desarrollo rápido de estilos.
- **EmailJS**: API para enviar correos electrónicos directamente desde el navegador.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/portfolio.git
   cd portfolio

2. Instala las dependencias: Asegúrate de tener pnpm instalado y luego ejecuta:

 ```bash
pnpm install
Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto con tus credenciales de EmailJS:
```
3. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto con tus credenciales de EmailJS:
 ```bash
VITE_SERVICE_ID=tu_service_id
VITE_TEMPLATE_ID=tu_template_id
VITE_PUBLIC_KEY=tu_public_key
```
4. Ejecuta el proyecto en modo desarrollo:

 ```bash
pnpm dev
 ```
Esto abrirá la aplicación en http://localhost:3000.

## Scripts Disponibles

- **`pnpm dev`**: Inicia el servidor de desarrollo de Vite.
- **`pnpm build`**: Compila el proyecto para producción.
- **`pnpm lint`**: Ejecuta ESLint para verificar el código.
- **`pnpm preview`**: Inicia un servidor de vista previa de producción.

## Estructura del Proyecto

- **`src/`**: Contiene los archivos fuente principales.
  - **`components/`**: Componentes reutilizables de la interfaz.
  - **`pages/`**: Páginas principales de la aplicación.
  - **`assets/`**: Archivos estáticos, como imágenes y fuentes.
  - **`styles/`**: Archivos de estilo de Tailwind.
- **`public/`**: Archivos públicos que se sirven en la raíz del proyecto.

