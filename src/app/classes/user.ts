import { IUser } from '../interface/iuser';

export class User implements IUser {

    id!: number;
    name!: string;
    username!: string;
    email!: string;
    phone!: string;
    website!: string;

   constructor() {}

}
