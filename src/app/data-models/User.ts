export type User = {
    accountType: String, 
    password: String, 
    email: String, 
    wasChecked: Boolean, 
    personal_information: 
        {
            firstname: String, 
            lastname: String, 
            birthdate: String, 
            gender: String
        },

    photo_url: String,
    sessionsJoined:[String], 
    sessionsOwned: [String], 
    groups:[
        {
            groupname: String, 
            users:[{email: String, canEdit: Boolean}]
        }
    ]
}