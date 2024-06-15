# Ejemplos de Commits Bien Realizados

Este documento proporciona ejemplos de commits bien realizados siguiendo buenas prácticas. Los mensajes de commit están estructurados para ser claros, concisos y útiles para cualquier desarrollador que trabaje en el Proyecto Integral.

## Ejemplo de Commit de Nueva Funcionalidad

```plaintext
feat: agregar función de autenticación de usuarios

- Añadido formulario de inicio de sesión y registro.
- Implementado middleware para verificar tokens JWT.
- Creado el endpoint para la autenticación de usuarios.
- Actualizados los modelos de usuario para incluir hash de contraseña.```

```plaintext
fix: corregir error en el cálculo de totales de la factura

- Ajustado el cálculo de impuestos en la función de generación de facturas.
- Corregido el error en la conversión de monedas.
- Añadidos tests para verificar los totales de facturas con y sin impuestos.```

```plaintext
perf: optimizar la carga de imágenes en la galería

- Implementada la carga diferida (lazy loading) de imágenes.
- Reducido el tamaño de las imágenes mediante la compresión.
- Eliminado código redundante en la galería de imágenes.```

```plaintext
refactor: reorganizar la estructura del proyecto

- Movidos los componentes comunes a una carpeta `shared`.
- Separados los servicios en diferentes módulos.
- Renombrados algunos archivos para mejorar la claridad.```

```plaintext
chore: actualizar dependencias a sus versiones más recientes

- Actualizados paquetes npm a sus versiones más recientes.
- Revisadas y actualizadas configuraciones de webpack.
- Solucionados conflictos menores en el código debido a las actualizaciones.```

```plaintext
docs: añadir guía de contribución al proyecto

- Creada la sección "Cómo contribuir" en el README.
- Añadidas pautas para escribir mensajes de commit.
- Instrucciones detalladas sobre cómo configurar el entorno de desarrollo.```
