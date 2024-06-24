# Refactorización de Código

## Descripción

El componente `UserProfile` renderiza los datos de un usuario. La versión original no utilizaba tipos adecuados y tenía código repetitivo para mostrar los campos de la dirección.

## Cambios Realizados

- **Tipificación adecuada**: Se añadió una interfaz `User` con un sub-objeto `Address` para asegurar que los datos pasados al componente son del tipo esperado.
- **Desestructuración**: Se desestructuraron las propiedades `name`, `email` y `address` del objeto `user` para simplificar el acceso a estos datos.
- **Iteración sobre los campos de dirección**: Se usó `Object.entries` para iterar sobre los campos de la dirección, lo que hace el código más limpio y menos repetitivo.

## Decisiones de Desarrollo

- La desestructuración de objetos mejora la legibilidad del código.
- El uso de `Object.entries` para iterar sobre los campos de la dirección permite una mayor flexibilidad en caso de que se añadan más campos en el futuro.
