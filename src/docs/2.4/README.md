# Análisis y Optimización

## Descripción

El componente `ExpensiveComponent` presenta problemas de rendimiento porque la función `processData` se ejecuta en cada render. Esto puede ser costoso en términos de rendimiento si `data` es grande o si el componente se renderiza con frecuencia.

## Cambios Realizados

- **Uso de `useMemo`**: La función `processData` ahora se memoriza usando `useMemo`, lo que asegura que solo se ejecute cuando `data` cambie.

## Decisiones de Desarrollo

### Problemas de Rendimiento Identificados

- La función `processData` se ejecuta en cada render, lo que puede ser costoso si el tamaño de `data` es grande.

### Solución Implementada

- **Memorización con `useMemo`**: Al usar `useMemo`, nos aseguramos de que `processData` solo se ejecute cuando `data` cambie, mejorando así el rendimiento del componente al evitar cálculos innecesarios.

