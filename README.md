# Task Tracker CLI

Aplicación de línea de comandos para gestionar tareas personales.

## Requisitos

- Node.js v14 o superior

## Instalación

```bash
npm install -g .
```

O ejecuta directamente con:

```bash
node task-cli.js <comando>
```

## Uso

### Agregar una tarea

```bash
task-cli add "Descripción de la tarea"
```

### Actualizar una tarea

```bash
task-cli update <id> "Nueva descripción"
```

### Eliminar una tarea

```bash
task-cli delete <id>
```

### Marcar tarea en progreso

```bash
task-cli mark-in-progress <id>
```

### Marcar tarea como completada

```bash
task-cli mark-done <id>
```

### Listar todas las tareas

```bash
task-cli list
```

### Filtrar tareas por estado

```bash
task-cli list done       # Completadas
task-cli list todo       # Pendientes
task-cli list in-progress # En proceso
```

## Estados de tarea

| Estado      | Descripción                |
|-------------|----------------------------|
| `pendiente` | Tarea creada, por hacer    |
| `proceso`   | Tarea en desarrollo         |
| `completada`| Tarea finalizada            |

## Notas

- Los datos se guardan en `task.json` en el directorio donde se ejecuta el comando.
- Los IDs de tarea son identificadores únicos generados automáticamente.
## url proyecto

 [project URL](https://github.com/Nate2658/task-cli)