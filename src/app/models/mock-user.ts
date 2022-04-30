import { IUser } from './user'

export const STUDENT: IUser[] = [
    {
        id: 1,
        name: 'Pippo',
        surname: 'Pluto',
        email: 'pippo@pluto.com',
        address: 'via Mario Rossi n°11',
        note: 'lorem ipsum',
        dateOfBirth: new Date(29, 4, 2022)
    }
]