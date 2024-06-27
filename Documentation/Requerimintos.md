# Requerimientos funcionales 
## Clean Squad 
landing page (Modo de contacto)

## Tareas grupales 
Tareas
- Prioridad
Alta
Media
Baja
- Estado
Pendiente
Completato
Suspendida
Retrasada
- Notificaciones (email, WhatsApp)
GoogleMaps
Chat interno

## Inicio de Sesión
Usuario
- Iniciar Sesión (con email)
- Personalizar perfil
Admin
- Iniciar Sesión
- Registrar usuarios (Comprobar por medio de email)
- Eliminar usuarios
Cierre de sesión después de una hora

## Roles
Admin
- Ver tareas grupales 
- Administrar usuarios 
- Ver estadísticas
Usuario
- Perfil (Solo mostrar nombre de usuario y email para otros usuarios)
- Tareas individuales (ver y modificar)
- Ver tarea grupal (ver todas las tareas)

## Requerimientos no funcionales
### Seguridad
Solo usuarios y administradores pueden acceder al sistema.
Usuarios no tienen acceso a ciertas acciones que sí tienen los Administradores.

### Integridad de datos
Uso de algoritmos de encriptación para proteger las contraseñas de los usuarios.
### Usabilidad
El sistema está diseñado para que personas no tan expertas en tecnologías puedan entenderla.

#Componentes
## Vistas
Login
Perfiles 
Actividades (tareas)
- Todas las tareas grupales (Solo Admin)
- Tareas grupales 
Chat Grupal
- Tareas individuales 
Gráficas y estadísticas (Solo Admin)
Empleados(Solo Admin)
Landing page (Tal vez no implementarla)

## No vistas 
Envío de correos
Google maps 

# APIs
Empleados/Cliente API
Tareas API
Chat API

