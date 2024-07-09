# Politicas para creacion de Ramas



## Feature branches (Ramas de características):

### Ejemplo:

``` 
git checkout -b feature/user-authentication
git checkout -b features/documentation
```



## Bug fix branches (Ramas de corrección de errores):

### Ejemplo:

```
git checkout -b bugfix/login-page-error
git checkout -b bugfix/cart-item-removal
```

## Improvement branches (Ramas de mejoras):

### Ejemplo:

```
git checkout -b improvement/update-dependencies
git checkout -b improvement/refactor-header-component
```

## Hotfix branches (Ramas de corrección urgente):

### Ejemplo:

```
git checkout -b hotfix/critical-security-patch
git checkout -b hotfix/fix-broken-build
```

## Other types:

```
git checkout -b chore/update-readme (Tareas generales o de mantenimiento)
git checkout -b test/add-unit-tests (Añadir pruebas)
```

## Consejos generales:

- Usa guiones para separar las palabras (-).
- Usa minúsculas.
- Mantén los nombres cortos y descriptivos.
- Incluye el tipo de rama (feature, bugfix, hotfix, etc.) al comienzo para mayor claridad.