import crypto from 'crypto';
import { readTasks, writeTasks } from './db.js';
import { validateStatus } from './middleware.js';

export const crearTareas = async (description, status) => {
    try {
        validateStatus(status);
        const tareas = await readTasks();
        const nuevaTarea = {
            id: crypto.randomBytes(3).toString('hex'),
            description,
            status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        tareas.push(nuevaTarea);
        await writeTasks(tareas);
        return 'Tarea creada exitosamente';
    } catch (error) {
        return `Error al crear tarea: ${error.message}`;
    }
};