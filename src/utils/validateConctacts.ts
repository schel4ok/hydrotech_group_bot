import { UserContactsInput } from '../interfaces';

export function validateContacts(inputText: string): false | UserContactsInput {
    const parts = inputText.split(',');
    console.log('Parts:', ...parts);
    if (parts.length !== 3)
        return false;

    const userContacts: UserContactsInput = {
        name: parts[0].trim(),
        company: parts[1].trim(),
        phone: parts[2].trim()
    };
    console.log(userContacts.name, userContacts.company, userContacts.phone, /^\+[1-9]{1}[0-9]{3,14}$/.test(userContacts.phone))
    if (
        !userContacts.name
        || !userContacts.company
        || !userContacts.phone
        || !(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userContacts.phone))
    )
        return false;

    return userContacts;
}