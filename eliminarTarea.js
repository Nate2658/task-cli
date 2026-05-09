import { readTasks, writeTasks } from './db.js';

export const eliminarTareas = async (id) => {
    try {
        const tareas = await readTasks();
        const index = tareas.findIndex(t => t.id === id);
        if (index === -1) {
            throw new Error('No se encontró el ID de la tarea');
        }
        tareas.splice(index, 1);
        await writeTasks(tareas);
        return 'Tarea eliminada con éxito';
    } catch (error) {
        return `Error al eliminar: ${error.message}`;
    }
};