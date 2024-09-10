import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        return (await readContacts()).length;
    } catch (e) {
        return e;
    }
};

console.log(await countContacts());
