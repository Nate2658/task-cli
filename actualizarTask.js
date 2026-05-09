import { readTasks, writeTasks } from './db.js';
import { validateStatus } from './middleware.js';

export const actualizarTareas = async (id, description, status) => {
    try {
        validateStatus(status);
        const tareas = await readTasks();
        const index = tareas.findIndex(t => t.id === id);
        if (index === -1) {
            throw new Error('No se encontró el ID de la tarea');
        }
        tareas[index] = {
            ...tareas[index],
            description: description ?? tareas[index].description,
            status: status ?? tareas[index].status,
            updatedAt: new Date().toISOString(),
        };
        await writeTasks(tareas);
        return 'Tarea actualizada con éxito';
    } catch (error) {
        return `Error al actualizar: ${error.message}`;
    }
};