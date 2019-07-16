export class UserLoggedIn{
    constructor(
        public email?: string,
        public firstname?: string,
        public lastname?: string, 
        public photo_url?: string,
        public acc_type?: AccType,
        ) { }


    setEmail(email: string){
        this.email = email;
    }

    setFirstName(name: string){
        this.firstname = name;
    }

    setLastName(name: string){
        this.lastname = name;
    }

    setPicture(url: string){
        this.photo_url = url;
    }
}

export enum AccType{
    GOOGLE = 'google',
    LOCAL = 'local'
}