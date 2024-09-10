import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";
import { createFakeContact } from "../utils/createFakeContact";

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();

        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        await writeContacts(contacts);
    } catch (e) {
        return e;
    }
};


generateContacts(5);
