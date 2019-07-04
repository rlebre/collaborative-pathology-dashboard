import {InvUser} from './InvUser'; //<==== this one

export class Group {

    users: InvUser[];
    groupname: string;

    constructor(){
    }

    setUsers(users: InvUser[]){
        this.users = users;
    }

    setGroupName(groupname: string){
        this.groupname = groupname;
    }

}