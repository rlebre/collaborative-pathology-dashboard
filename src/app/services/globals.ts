//File with global variables used in the many services

'use strict';

/* #### Backend related urls #### */
//export const base_url = 'http://demo.dicoogle.com/pathobox-api/';
export const base_url = 'http://mednat.ieeta.pt:8297/';


/* Auth urls */
export const logout_url: string = base_url + 'logout/';

/* Data/Services urls */
export const dashboard_url: string = base_url + 'dashboard/'; 
export const create_session_url: string = base_url + 'createSession/'; 
export const session_details_url: string = base_url + 'sessionDetails/';

export const create_group_url: string = base_url + 'createGroup/'; 
export const mygroups_url: string = base_url + 'mygroups/';
export const group_details_url: string = base_url + 'groupDetails/';

export const user_profile_url: string = base_url + 'userProfile/';


/* Google related urls */
export const google_sign_in_url: string = base_url + 'auth/google/verify/';
export const google_api_user_data_url: string = 'https://www.googleapis.com/plus/v1/people/me?access_token=';


//Temporary reference to some stuff

//init script for public build
//"start": "ng serve --port 8080 --host 0.0.0.0 --publicHost='mednat.ieeta.pt:8291'",
//init script for private build
//"start": "ng serve --port 8094 --host 0.0.0.0 --disableHostCheck",

//4 ficheiros a alterar:
//app.module, core.module, index e package.json