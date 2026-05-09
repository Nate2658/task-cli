import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const FILE_NAME = 'task.json';
export const FILE_PATH = path.join(__dirname, FILE_NAME);

const initFile = async () => {
    try {
        await fs.access(FILE_PATH);
    } catch {
        await fs.writeFile(FILE_PATH, '[]');
    }
};

initFile();

export const readTasks = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
};

export const writeTasks = async (tasks) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
};