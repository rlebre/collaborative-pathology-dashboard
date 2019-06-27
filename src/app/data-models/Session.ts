import {InvUser} from './InvUser'; //<==== this one

export class Session{
    public urls: [String];
    public baseUrl: String;
    public name: String;
    public hash: String; 
    public allowHotJoin: Boolean;
    public memberLimit: Number;
    public startDate: Date; 
    public endDate: Date;
    public actions: [any];
    public ownedBy: String;
    participatingUsers: InvUser[];
    constructor(){}
}