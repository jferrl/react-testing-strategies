export const flushPromises = async (): Promise<NodeJS.Immediate> => {
    return new Promise(setImmediate);
};
