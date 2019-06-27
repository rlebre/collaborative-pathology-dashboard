import {InvUser} from './InvUser'; //<==== this one

export class Group {
    constructor( public groupname: string, public users: InvUser[]){}
}