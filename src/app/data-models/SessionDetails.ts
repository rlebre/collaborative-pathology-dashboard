import {InvUser} from './InvUser'; //<==== this one
import { CaseStudy } from './CaseStudy';

export class SessionDetails{
    public hash: number;
    public name: string;
    public allowHotJoin: Boolean;
    public memberLimit: number;
    public startDate: Date;
    public endDate: Date;
    public participatingUsers: InvUser[];
    public groups: string[];
    public tags: string[];
    public caseStudy: CaseStudy;
    public email_message: string;

    constructor(){}
}