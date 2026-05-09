export const VALID_STATUSES = ['completada', 'pendiente', 'proceso'];

export const validateStatus = (status) => {
    if (status === null || status === undefined) return;
    if (!VALID_STATUSES.includes(status)) {
        throw new Error(`Estado no admitido. Usar: ${VALID_STATUSES.join(', ')}`);
    }
};