//File with global variables used in the many services

'use strict';

export const base_url = 'http://mednat.ieeta.pt:8296/';

export const dashboard_url: string = base_url + 'dashboard/'; 
export const create_sessoin_url: string = base_url + 'createSession/'; 
export const create_group_url: string = base_url + 'createGroup/'; 
export const mygroups_url: string = base_url + 'mygroups/';

export const google_sign_in_url: string = base_url + 'auth/google/verify';
export const google_api_user_data_url: string = 'https://www.googleapis.com/plus/v1/people/me?access_token=';