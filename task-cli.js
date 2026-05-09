#!/usr/bin/env node
import { crearTareas } from './crearTareas.js';
import { actualizarTareas } from './actualizarTask.js';
import { eliminarTareas } from './eliminarTarea.js';
import { leerTareas, leerTareasEstado } from './leerTareas.js';

const STATUS_MAP = {
    done: 'completada',
    todo: 'pendiente',
    'in-progress': 'proceso',
};

const [, , comando, ...args] = process.argv;

const ejecutar = async () => {
    switch (comando) {
        case 'add': {
            console.log(await crearTareas(args[0], 'pendiente'));
            break;
        }
        case 'update': {
            console.log(await actualizarTareas(args[0], args[1]));
            break;
        }
        case 'delete': {
            console.log(await eliminarTareas(args[0]));
            break;
        }
        case 'mark-in-progress': {
            console.log(await actualizarTareas(args[0], null, 'proceso'));
            break;
        }
        case 'mark-done': {
            console.log(await actualizarTareas(args[0], null, 'completada'));
            break;
        }
        case 'list': {
            const status = args[0];
            if (status) {
                const filtro = STATUS_MAP[status] || status;
                console.table(await leerTareasEstado(filtro));
            } else {
                console.table(await leerTareas());
            }
            break;
        }
        default:
            console.log('Uso: task-cli [add|update|delete|list|mark-in-progress|mark-done]');
    }
};

ejecutar();