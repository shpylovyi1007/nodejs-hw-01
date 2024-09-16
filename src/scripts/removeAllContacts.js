import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
    } catch (e) {
        return e;
    }
};

removeAllContacts();