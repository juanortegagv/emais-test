# Decisiones de Desarrollo

## Descripción

Este proyecto requiere una aplicación React con un manejo intensivo del estado global, autenticación de usuarios y comunicación frecuente con una API REST.

## Librerías Elegidas

- **Redux Toolkit**: Para el manejo del estado global.
- **React-Redux**: Para la integración de Redux con React.
- **React Query**: Para la gestión de datos asincrónicos y caching.
- **React Router**: Para la navegación.
- **Axios**: Para las solicitudes HTTP.
- **JWT Decode**: Para el manejo de tokens de autenticación.

## Estructura del Proyecto

\`\`\`
src/
├── components/
│   ├── Auth/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   ├── Home.tsx
├── features/
│   ├── auth/
│   │   ├── authSlice.ts
│   │   ├── authAPI.ts
│   ├── user/
│   │   ├── userSlice.ts
│   │   ├── userAPI.ts
├── services/
│   ├── api.ts
├── store/
│   ├── store.ts
├── hooks/
│   ├── useAuth.ts
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
├── styles/
│   ├── global.css
├── utils/
│   ├── helpers.ts
├── App.tsx
├── index.tsx
\`\`\`

## Explicación de la Estructura

- **components**: Componentes reutilizables, organizados por función.
- **features**: Cada característica tiene su propio slice de Redux y API para mantener la modularidad.
- **services**: Centraliza la configuración y uso de las APIs.
- **store**: Configuración de Redux store.
- **hooks**: Custom hooks para lógica específica.
- **pages**: Componentes de página que representan diferentes rutas.
- **styles**: Estilos globales y específicos.
- **utils**: Funciones utilitarias que pueden ser reutilizadas en la aplicación.

## Decisiones de Desarrollo

### Redux Toolkit

Elegida por su simplicidad y eficiencia en la gestión del estado global. Proporciona buenas prácticas por defecto y facilita la configuración de Redux.

### React Query

Seleccionada para la gestión de datos asincrónicos y el manejo de caching, optimizando la comunicación con la API REST.

### React Router

Utilizada para manejar la navegación en la aplicación.

### Axios

Elegida para las solicitudes HTTP debido a su simplicidad y características avanzadas como la configuración de interceptores.

### JWT Decode

Utilizada para manejar la decodificación de tokens JWT para la autenticación de usuarios.
