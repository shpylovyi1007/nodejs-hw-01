import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        return JSON.parse((await fs.readFile(PATH_DB)).toString());
    } catch (e) {
        return e;
    }
};


