# Ejemplos de Commits Bien Realizados

Este documento proporciona ejemplos de commits bien realizados siguiendo buenas prácticas. Los mensajes de commit están estructurados para ser claros, concisos y útiles para cualquier desarrollador que trabaje en el Proyecto Integral.

## Ejemplo de Commit de Nueva Funcionalidad
```plaintext
feat: agregar función de autenticación de usuarios

- Añadido formulario de inicio de sesión y registro.
- Implementado middleware para verificar tokens JWT.
- Creado el endpoint para la autenticación de usuarios.
- Actualizados los modelos de usuario para incluir hash de contraseña.
```
## Commit de Corrección de Errores

```plaintext
fix: corregir error en el cálculo de totales de la factura

- Ajustado el cálculo de impuestos en la función de generación de facturas.
- Corregido el error en la conversión de monedas.
- Añadidos tests para verificar los totales de facturas con y sin impuestos.
```
## Commit de Mejora de Rendimiento

```plaintext
perf: optimizar la carga de imágenes en la galería

- Implementada la carga diferida (lazy loading) de imágenes.
- Reducido el tamaño de las imágenes mediante la compresión.
- Eliminado código redundante en la galería de imágenes.
```
## Commit de Refactorización de Código

```plaintext
refactor: reorganizar la estructura del proyecto

- Movidos los componentes comunes a una carpeta `shared`.
- Separados los servicios en diferentes módulos.
- Renombrados algunos archivos para mejorar la claridad.
```
## Commit de Actualización de Dependencias

```plaintext
chore: actualizar dependencias a sus versiones más recientes

- Actualizados paquetes npm a sus versiones más recientes.
- Revisadas y actualizadas configuraciones de webpack.
- Solucionados conflictos menores en el código debido a las actualizaciones.
```
## Commit de Documentación

```plaintext
docs: añadir guía de contribución al proyecto

- Creada la sección "Cómo contribuir" en el README.
- Añadidas pautas para escribir mensajes de commit.
- Instrucciones detalladas sobre cómo configurar el entorno de desarrollo.
```

## Al contribuir varias personas dentro del commit

```plaintext
(Mensaje del commit)

Este commit fue Realizado por Nombre1 y Nombre2
```

# Buenas Prácticas al Escribir Mensajes de Commit
## Al seguir buenas prácticas al escribir mensajes de commit, puedes mejorar la claridad y la consistencia en tu historial de cambios. Aquí algunas recomendaciones:

Usa verbos en imperativo: Esto hace que los mensajes sean más claros y consistentes.
Sé descriptivo pero conciso: Proporciona suficiente información para entender los cambios sin ser excesivamente detallado.
Estructura en encabezado y cuerpo: Usa el encabezado para una breve descripción y el cuerpo para detalles adicionales.
Categoriza los commits: Usa prefijos como:

- feat (funcionalidad): para nuevas características o funcionalidades.
- fix (corrección): para correcciones de errores.
- docs (documentación): para cambios en la documentación.
- style (estilos): para cambios que no afectan el significado del código (espacios en blanco, formato, etc.).
- refactor (refactorización): para cambios en el código que no corrigen errores ni añaden funcionalidades.
- perf (rendimiento): para mejoras de rendimiento.
- test (pruebas): para la adición o modificación de pruebas.
- chore (tareas varias): para otras tareas que no modifican código de producción (actualizaciones de dependencias, configuraciones, etc.).
