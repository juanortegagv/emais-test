export const tests = [
  { id: "CORRECTION", name: "Corrección de Código" },
  { id: "REFACTOR", name: "Refactorización de Código" },
  { id: "DECISIONS", name: "Decisiones de Desarrollo" },
  { id: "OPTIMIZATION", name: "Análisis y Optimización" },
  { id: "DEBUGGING", name: "Debugging" },
  { id: "TESTING", name: "Testing" },
];

export enum ProblemCodes {
  CORRECTION = `
    interface User {
      id: number;
      name: string;
      email: string;
    }
    
    const fetchUserData = async (userId: string): Promise<User> => {
      const response = await fetch('/api/users/\${userId}');
      const userData = await response.json();
      return userData;
    };
    
    const logUserName = (user: User) => {
      console.log(user.Name);
    };
    
    fetchUserData(123).then(logUserName);
  `,
  REFACTOR = `
    const UserProfile: React.FC<{ user: any }> = ({ user }) => {
      return (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <p>{user.address.street}</p>
          <p>{user.address.zipcode}</p>
        </div>
      );
    };
  `,
  DECISIONS = `
    Estás empezando un nuevo proyecto que requiere una aplicación React con un manejo intensivo del estado
    global, autenticación de usuarios, y comunicación frecuente con una API REST. ¿Qué librerías elegirías para
    manejar el estado y la autenticación? ¿Por qué? ¿Cómo estructurarías la aplicación?
  `,
}

export enum SolutionCodes {
  CORRECTION = `
    interface User {
      id: number;
      name: string;
      email: string;
    }
    
    const fetchUserData = async (userId: number): Promise<User> => { 
      const response = await fetch(\`/api/users/\${userId}\`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData: User = await response.json();
      return userData;
    };
    
    const logUserName = (user: User) => {
      console.log(user.name);
    };
    
    fetchUserData(123).then(logUserName).catch(error => console.error(error));
    `,
  REFACTOR = `
    interface Address {
      city: string;
      street: string;
      zipcode: string;
    }

    interface User {
      name: string;
      email: string;
      address: Address;
    }

    const UserProfile: React.FC<{ user: User }> = ({ user }) => {
      const { name, email, address } = user;
      const addressFields = Object.entries(address);

      return (
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
          {addressFields.map(([key, value]) => (
            <p key={key}>{\`\${key}: \${value}\`}</p>
          ))}
        </div>
      );
    };

    export default UserProfile;
    `,
  DECISIONS = `
  
    #### Estructura del Proyecto
  
  
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
  
  
    #### Librerías Elegidas
  
    - **Redux Toolkit**: Para el manejo del estado global.
    - **React-Redux**: Para la integración de Redux con React.
    - **React Query**: Para la gestión de datos asincrónicos y caching.
    - **React Router**: Para la navegación.
    - **Axios**: Para las solicitudes HTTP.
    - **JWT Decode**: Para el manejo de tokens de autenticación.
    `,
}

export enum Explanations {
  CORRECTION = `
    ### Corrección de Código
    
    **Problema:**
    El código tiene algunos errores y posibles mejoras. En concreto:
    - Uso incorrecto de template literals.
    - Posible error en la obtención de datos de la API.
    - Error en el acceso a propiedades del objeto.
    
    **Corrección:**
    - **Template literals:** Se usa correctamente \${userId} dentro de las comillas invertidas.
    - **Error handling:** Se añade una comprobación de si la respuesta de la API fue exitosa.
    - **Propiedad del objeto:** Se corrige el acceso user.Name a user.name.
    - **Promises:** Se añade un catch para manejar posibles errores en la llamada a la API.
    `,
  REFACTOR = `
    ### Refactorización de Código
  
    **Problema:**
    El componente \`UserProfile\` no utiliza tipos adecuados y tiene código repetitivo para mostrar los campos de la dirección.
  
    **Solución:**
    - **Tipificación adecuada:** Se define una interfaz \`User\` con un sub-objeto \`Address\`.
    - **Desestructuración:** Se desestructuran las propiedades \`name\`, \`email\` y \`address\` del objeto \`user\` para simplificar el acceso a estos datos.
    - **Iteración sobre los campos de dirección:** Se usa \`Object.entries\` para iterar sobre los campos de la dirección, lo que hace el código más limpio y menos repetitivo.
  `,
  DECISIONS = `
    ### Decisiones de Desarrollo

    **Librerías Elegidas:**

    - **Redux Toolkit**: Elegida por su simplicidad y eficiencia en la gestión del estado global. Proporciona buenas prácticas por defecto y facilita la configuración de Redux.
    - **React Query**: Seleccionada para la gestión de datos asincrónicos y el manejo de caching, optimizando la comunicación con la API REST.
    - **React Router**: Utilizada para manejar la navegación en la aplicación.
    - **Axios**: Elegida para las solicitudes HTTP debido a su simplicidad y características avanzadas como la configuración de interceptores.
    - **JWT Decode**: Utilizada para manejar la decodificación de tokens JWT para la autenticación de usuarios.

    **Estructura del Proyecto:**

    La estructura del proyecto está diseñada para ser modular y escalable:

    - **components**: Contiene componentes reutilizables, organizados por función.
    - **features**: Cada característica o módulo tiene su propio slice de Redux y API para mantener la modularidad.
    - **services**: Centraliza la configuración y uso de las APIs.
    - **store**: Contiene la configuración de Redux store.
    - **hooks**: Custom hooks para lógica específica que puede ser reutilizada.
    - **pages**: Contiene los componentes de página que representan diferentes rutas.
    - **styles**: Estilos globales y específicos de la aplicación.
    - **utils**: Funciones utilitarias que pueden ser reutilizadas en toda la aplicación.
  `,
}
