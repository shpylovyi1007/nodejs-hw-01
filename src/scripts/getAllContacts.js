import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        return await readContacts();
    } catch (e) {
        return e;
    }
};

console.log(await getAllContacts());