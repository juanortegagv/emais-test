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
    OPTIMIZATION = `
      const ExpensiveComponent: React.FC<{ data: any }> = ({ data }) => {
        const processData = (data: any) => {
          return data.map((item: any) => ({ ...item, processed: true }));
        };
  
        const processedData = processData(data);
  
        return (
          <div>
            {processedData.map((item: any, index: number) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
        );
      };
    `,
    DEBUGGING = `
     const Counter: React.FC = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1);
      };

      const decrement = () => {
        setCount(count - 1);
      };

      useEffect(() => {
        document.title = \`Count: \${count}\`;
      }, [increment, decrement]);

      return (
        <div>
          <button onClick={increment}>Increment</button>
          <span>{count}</span>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    };
    `,
    TESTING = `
      interface ButtonCounterProps {
        label: string;
      }

      const ButtonCounter: React.FC<ButtonCounterProps> = ({ label }) => {
        const [count, setCount] = useState(0);

      return (
        <div>
          <button onClick={() => setCount(count + 1)}>
            {label}
          </button>
          <p>Count: {count}</p>
        </div>
      );
    };

    export default ButtonCounter;
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
    OPTIMIZATION = `
      import React, { useMemo } from 'react';
    
      const ExpensiveComponent: React.FC<{ data: any[] }> = ({ data }) => {
        const processedData = useMemo(() => {
          return data.map((item: any) => ({ ...item, processed: true }));
        }, [data]);
    
        return (
          <div>
            {processedData.map((item: any, index: number) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
        );
      };
    
      export default ExpensiveComponent;
    `,
    DEBUGGING = `
     const Counter: React.FC = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

      const decrement = () => {
        setCount(prevCount => prevCount - 1);
      };

      useEffect(() => {
        document.title = \`Count: \${count}\`;
      }, [count]);

      return (
        <div>
          <button onClick={increment}>Increment</button>
          <span>{count}</span>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    };
    `,
    TESTING = `
      import React from 'react';
      import { render, fireEvent, screen } from '@testing-library/react';
      import ButtonCounter from './ButtonCounter';

      test('ButtonCounter increments count', () => {
        render(<ButtonCounter label="Click me" />);
        const button = screen.getByText(/Click me/i);
        const countText = screen.getByText(/Count: 0/i);

      fireEvent.click(button);
      expect(countText).toHaveTextContent('Count: 1');

      fireEvent.click(button);
      expect(countText).toHaveTextContent('Count: 2');
    });
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
    OPTIMIZATION = `
      ##Optimización
  
      **Problema:**
      El componente ExpensiveComponent presenta problemas de rendimiento porque la función processData se ejecuta en cada render. Esto puede ser costoso en términos de rendimiento si data es grande o si el componente se renderiza con frecuencia.
   
      **Solución:**
      - **Memorización con useMemo**: Al usar useMemo, nos aseguramos de que processData solo se ejecute cuando data cambie, mejorando así el rendimiento del componente al evitar cálculos innecesarios.
    `,
    DEBUGGING = `
      ##Proceso de Debugging

      1. **Inspección Inicial**: Se inspeccionó el componente y se identificó que el useEffect estaba dependiendo de las funciones increment y decrement.
      2. **Identificación del Problema**: Se reconoció que el useEffect debería depender del estado count en lugar de las funciones, ya que queremos que el efecto se ejecute cuando count cambia.
      3. **Uso de Herramientas de Debugging**: Se utilizó el inspector de React Developer Tools para verificar que el useEffect no se estaba ejecutando como se esperaba.
      4. **Prueba de la Solución**: Se modificó el useEffect para que dependa de count y se verificó que el título del documento se actualiza correctamente con cada cambio en el contador.
    `,
    TESTING = `
      ### Ejecución de los Tests

      1. **Ubicación del test**: El test se encuentra dentro del componente ButtonCounter, en el archivo components

      2. **Arrancar Test**: El test se puede probrar a través de una consola con el comando npm run test

`,
  }
  