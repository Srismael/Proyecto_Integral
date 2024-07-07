# DOCUMENTACIÓN DB

## Creación de la Base de Datos (MongoDB Compass)

#### Creación de la base de datos

* use Clean_Squad
  
#### Creación de la colección Package

* db.createCollection ("Package")

#### Creación de la colección Client

* db.createCollection ("Client")

#### Creación de la colección Shopping Record

* db.createCollection ("ShoppingRecord")
  

#### Creación de la colección Employes

* db.createCollection ("Employes")
  

#### Creación de la colección Chat

* db.createCollection ("Chat")
  

#### Creación de la colección Activities

* db.createCollection ("Activities")
  

#### Creación de la colección Schedules

* db.createCollection ("Schedules")
  

#### Creación de la colección Group Activities

* db.createCollection ("GroupActivities")


### Inserción de datos (en mongo atlas)


#### 1. Inserción datos en la colección *Package*
```
{
  _"id": 1,
  "num_activities": 5,
  "num_employs": 10,
  "cost": 1800
}
```
```
{
  _"id": 2,
  "num_activities": 10,
  "num_employs": 20,
  "cost": 3500
}
```
```
{
  _"id": 3,
  "num_activities": 20,
  "num_employs": 40,
  "cost": 6900
}
```

#### 2. Inserción de datos en la colección *Cient*
```
{
  "_id": 10,
  "name": "Jose",
  "last_name": "Pérez",
  "email": "joseperez32@gmail.com",
  "adress": "20896, México, calle madero #134",
  "phone_num": 4951323434
}
```
```
{
  "_id": 11,
  "name": "Miguel",
  "last_name": "Esparza",
  "email": "migueltrabajooficial@gmail.com",
  "adress": "20823, México, calle Zapata y Portillo #345-A",
  "phone_num": 4954567890
}
```
```
{
  "_id": 12,
  "name": "Juan",
  "last_name": "López",
  "email": "juaneduardolópez@gmail.com",
  "adress": "20476, México, calle Vasconcelos #113-C",
  "phone_num": 4951239089
}
```

#### 3. Inserción de datos en la colección *ShoppingRecord*
```
{
  "_id": 125,
  "package_id": 1,
  "client_id": 10,
  "date": "2024-06-17",
  "hour": "14:30:00",
  "paid": 1800
}
```
```
{
  "_id": 20,
  "package_id": 3,
  "client_id": 12,
  "date": "2024-04-03",
  "hour": "16:23:00",
  "paid": 6900
}
```
```
{
  "_id": 102,
  "package_id": 2,
  "client_id": 11,
  "date": "2024-01-12",
  "hour": "22:15:00",
  "paid": 3550
}
```

#### 4. Inserción de datos en la colección *Employes*
```
{
  "_id": 65,
  "name": "Juan",
  "last_name": "Gómez",
  "role": "empleado",
  "email": "juangomez110@gmail.com",
  "password": "juanÑ23"
}
```
```
{
  "_id": 88,
  "name": "Luis Daniel",
  "last_name": "Esqueda",
  "role": "empleado",
  "email": "esquedaluisdaniel23@gmail.com",
  "password": "dani2323"
}
```
```
{
  "_id": 29,
  "name": "Jose Miguel",
  "last_name": "Pineda",
  "role": "empleado",
  "email": "josemiguelp33@gmail.com",
  "password": "pineda1212"
}
```

#### 5. Inserción de datos en la colección *Schedules*
```
{

  "employ_id": 65,
  "entry_time": "06:00:00 AM",
  "departure_time": "04:00:00 PM",
  "work_days": 5
}
```
```
{

  "employ_id": 88,
  "entry_time": "08:00:00 AM",
  "departure_time": "06:00:00 PM",
  "work_days": 6
}
```
```
{

  "employ_id": 29,
  "entry_time": "06:00:00 AM",
  "departure_time": "04:00:00 PM",
  "work_days": 5
}
```

#### 6. Inserción de datos en la colección *GroupActivities*
```
{

  "employ_id": [65, 88, 29],
  "client_id": 12,
  "status": "terminada",
  "adress": "20476, México, calle Vasconcelos #113-C"
}
```
```
{

  "employ_id": [65, 88],
  "client_id": 10,
  "status": "en progreso",
  "adress": "20896, México, calle madero #134"
}
```

#### 7. Inserción de datos en la colección Chat
```
{

  "employ_id": 88,
  "data": "Habrá trabajo el día de mañana",
  "hour": "12:00:00 AM",
  "day": "Lunes"
}
```

#### 8. Inserción de datos en la colección *Activities*
```
{

  "employ_id": 29,
  "client_id": 10,
  "priority": "baja",
  "status": "por hacer",
  "generic_data": "barrer la casa y trapear el piso"
}
```
```
{

  "employ_id": 65,
  "client_id": 11,
  "priority": "media",
  "status": "terminada",
  "generic_data": "limpiar toda el área y cubrir con desinfectante"
}
```
```
{

  "employ_id": 88,
  "client_id": 12,
  "priority": "alta",
  "status": "en progreso",
  "generic_data": "limpiar el área, desinfectar y sacar todo lo cubierto por insectos"
}
```