# Debugging

## Descripción

El componente `Counter` tiene un bug que es bastante complicado de encontrar. El `useEffect` tiene dependencias incorrectas, lo que causa que no se actualice correctamente cuando el estado `count` cambia.

## Proceso de Debugging

1. **Inspección Inicial**: Se inspeccionó el componente y se identificó que el `useEffect` estaba dependiendo de las funciones `increment` y `decrement`.
2. **Identificación del Problema**: Se reconoció que el `useEffect` debería depender del estado `count` en lugar de las funciones, ya que queremos que el efecto se ejecute cuando `count` cambia.
3. **Uso de Herramientas de Debugging**: Se utilizó el inspector de React Developer Tools para verificar que el `useEffect` no se estaba ejecutando como se esperaba.
4. **Prueba de la Solución**: Se modificó el `useEffect` para que dependa de `count` y se verificó que el título del documento se actualiza correctamente con cada cambio en el contador.

### Problema Identificado

El `useEffect` depende de las funciones `increment` y `decrement`, lo cual es incorrecto. Las dependencias del `useEffect` deben ser valores que, cuando cambian, disparan el efecto. En este caso, debería depender del estado `count`.
