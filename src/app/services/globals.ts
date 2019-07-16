//File with global variables used in the many services

'use strict';

/* #### Backend related urls #### */
export const base_url = 'http://mednat.ieeta.pt:8296/';


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
export const google_sign_in_url: string = base_url + 'auth/google/verify';
export const google_api_user_data_url: string = 'https://www.googleapis.com/plus/v1/people/me?access_token=';