export class UserDetails{
    constructor(
        public email: string,
        public firstname: string,
        public lastname: string, 
        public picture: string, 
        public canEdit: boolean,
        ) { }
}