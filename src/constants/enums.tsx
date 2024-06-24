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
}
