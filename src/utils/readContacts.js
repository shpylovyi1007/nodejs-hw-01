import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const readContacts = async () => {
    try {
        return JSON.parse((await fs.readFile(PATH_DB)).toString());
    }
    catch (error) {
        console.log(error);
    }
};


