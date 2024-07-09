Objetivo:
Desarrollar una aplicación backend que gestione tareas de una lista de pendientes (to-do list) y envíe recordatorios de tareas pendientes en segundo plano. La aplicación debe usar Node.js con Express, una base de datos MySQL, y demostrar prácticas de seguridad y pruebas unitarias.

Requisitos:
API RESTful con las siguientes funcionalidades:

✅Crear una tarea 
Endpoint: POST /tasks
Datos de entrada: title, description, due_date
✅Obtener todas las tareas
Endpoint: GET /tasks
Obtener una tarea por ID
Endpoint: GET /tasks/:id
✅Actualizar una tarea
Endpoint: PUT /tasks/:id
Datos de entrada: title, description, due_date
✅Eliminar una tarea
Endpoint: DELETE /tasks/:id 


Tareas en segundo plano:

Un proceso que corra cada hora y envíe un recordatorio (por ejemplo, log a la consola) para las tareas cuya fecha de vencimiento sea dentro de las próximas 24 horas.
Base de datos relacional (MySQL):

Modelo de datos para las tareas (tasks):
id (PRIMARY KEY, AUTO_INCREMENT)
title (VARCHAR)
description (TEXT)
due_date (DATETIME)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
Seguridad:

Implementación de autenticación JWT para proteger los endpoints de la API.
Validación y saneamiento de entradas para prevenir inyección SQL y otras vulnerabilidades.
Pruebas unitarias:

Escribir pruebas unitarias para los endpoints de la API utilizando un marco de pruebas como Jest o Mocha.
Incluir pruebas para asegurar la correcta ejecución de las tareas en segundo plano.
Instrucciones:
Configuración inicial:

Crear una aplicación Node.js con Express.
Configurar la conexión a la base de datos MySQL.
Configurar el ORM (por ejemplo, Sequelize) para manejar el modelo de datos tasks.
Autenticación JWT:

Implementar el registro y login de usuarios.
Proteger los endpoints de la API usando middleware de autenticación JWT.
Endpoints CRUD:

Crear los endpoints para manejar las operaciones CRUD de las tareas.
Asegurarse de que las respuestas de la API sigan un formato consistente (por ejemplo, incluir status y data en la respuesta).
Tareas en segundo plano:

Implementar una tarea en segundo plano usando un paquete como node-cron.
La tarea debe correr cada hora y buscar tareas cuya fecha de vencimiento sea dentro de las próximas 24 horas y enviar un recordatorio (log a la consola).
Seguridad:

Validar y sanear los datos de entrada en los endpoints de la API.
Asegurarse de que las contraseñas de los usuarios estén cifradas antes de guardarlas en la base de datos.
Pruebas unitarias:

Escribir pruebas para cada endpoint de la API.
Escribir pruebas para la tarea en segundo plano.
Entrega:
Subir el código a un repositorio en GitHub.
Incluir un archivo README.md con instrucciones sobre cómo configurar y correr la aplicación, así como las pruebas unitarias.
Asegurarse de que el código sea claro, bien comentado y siga buenas prácticas de desarrollo.
Evaluación:
Funcionalidad completa de los endpoints CRUD.
Implementación correcta de la autenticación JWT.
Correcta ejecución de las tareas en segundo plano.
Pruebas unitarias que cubran los endpoints y las tareas en segundo plano.
Buenas prácticas de seguridad y desarrollo.
