export const createAccountInputs = [

    {
        
        name: "firstName",
        placeholder: "First Name",
        isPassword: false,
        errorMessage: "Please enter a first name"

        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name",
        isPassword: false,
        errorMessage: "Please enter a last name"


    },
    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
       
        name: "password",
        placeholder: "Password",
        isPassword: true,
        errorMessage: "The password field cannot be empty."

    },

];


export const signInInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        // pattern: "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"


    },
    {
        name: "password",
        placeholder: "Password",
        isPassword: true,
        errorMessage: "The password field cannot be empty."

    },

];

export const forgotInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        

    }

];


export const adminSignInInputs = [


    {
        
        name: "userName",
        placeholder: "User name",
        isPassword: false,
        errorMessage: "Please enter a user name",
        

    },

    {
        name: "password",
        placeholder: "Password",
        isPassword: true,
        errorMessage: "The password field cannot be empty."
    }


    
];


export const addStaffInputs = [

    {
        
        label: "First Name",
        name: "firstName",
        placeholder: "First Name",
        isPassword: false,
        errorMessage: "Please enter a first name.",

        
    },
    {
        label: "Last Name",
        name: "lastName",
        placeholder: "Last Name",
        isPassword: false,
        errorMessage: "Please enter a last name."


    },
    {
        label: "Email",
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address.",
        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
        label: "Role",
        name: "role",
        placeholder: "Role",
        isPassword: false,
        errorMessage: "Please enter a role for this staff"

    },
    {
        label: "Phone Number",
        name: "phoneNumber",
        placeholder: "Phone Number",
        isPassword: false,
        errorMessage: "Please enter a phone number."

    },


    
];