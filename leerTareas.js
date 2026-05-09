import { readTasks } from './db.js';
import { validateStatus } from './middleware.js';

export const leerTareas = async () => {
    return await readTasks();
};

export const leerTareasEstado = async (status) => {
    validateStatus(status);
    const tareas = await readTasks();
    return tareas.filter(t => t.status === status);
};

export const leerTareasId = async (id) => {
    const tareas = await readTasks();
    return tareas.find(t => t.id === id) || null;
};