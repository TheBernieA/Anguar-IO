import { IUser } from './user'

export const STUDENT: IUser[] = [
    {
        id: 1,
        name: 'first',
        surname: 'second',
        email: 'mail@mail.com',
        address: 'no via n°0',
        note: 'lorem ipsum',
        dateOfBirth: new Date(29, 4, 2022)
    },
    {
        id: 2,
        name: 'another user',
        surname: 'another user',
        email: 'mail@mail.com',
        address: 'no via n°0',
        note: 'lorem ipsum',
        dateOfBirth: new Date(29, 4, 2022)
    }
]