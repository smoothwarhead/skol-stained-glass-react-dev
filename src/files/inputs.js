export const createAccountInputs = [

    {
        
        name: "firstName",
        placeholder: "First Name",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a first name"

        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a last name"


    },
    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address",
        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
       
        name: "password",
        placeholder: "Password",
        isPassword: true,
        validate: true,
        errorMessage: "The password field cannot be empty."

    },

];


export const signInInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address",
        
    },
    {
        name: "password",
        placeholder: "Password",
        isPassword: true,
        validate: true,
        errorMessage: "The password field cannot be empty."

    },

];

export const forgotInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address",
        

    }

];


export const twoFaInputs = [


    {
        
        name: "code",
        placeholder: "Code",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter the code sent to your email address",
        

    },

  
    
];

export const adminSignInInputs = [


    {
        
        name: "userName",
        placeholder: "User name",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a user name",
        

    },

    {
        name: "password",
        placeholder: "Password",
        isPassword: true,
        validate: true,
        errorMessage: "The password field cannot be empty."
    }


    
];


export const addStaffInputs = [

    {
        
        label: "First Name",
        name: "firstName",
        placeholder: "First Name",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a first name.",

        
    },
    {
        label: "Last Name",
        name: "lastName",
        placeholder: "Last Name",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a last name."


    },
    {
        label: "Email",
        name: "email",
        placeholder: "Email",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address.",
        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
        label: "Role",
        name: "role",
        placeholder: "Role",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a role for this staff"

    },
    {
        label: "Phone Number",
        name: "phoneNumber",
        placeholder: "Phone Number",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a phone number."

    },


    
];

export const addAddressInputs = [

    {
        
        label: "Address Line 1",
        name: "addressLine1",
        placeholder: "Address Line 1",
        isPassword: false,
        isNum: false,
        validate: true,
        errorMessage: "This info is required and may only contain letters, number and #",

        
    },
    {
        label: "Address Line 2 (Optional)",
        name: "addressLine2",
        placeholder: "Address Line 2",
        isPassword: false,
        isNum: false,
        validate: false,
        errorMessage: "",

       
    },
    {
        label: "Zip Code",
        name: "postalCode",
        placeholder: "Zip Code",
        isPassword: false,
        isNum: true,
        validate: true,
        errorMessage: "Please enter your 5-digit zip code",
       

    },
    {
        label: "City",
        name: "city",
        placeholder: "City",
        isPassword: false,
        isNum: false,
        validate: true,
        errorMessage: "Please enter your city",
       

    },
   
    


    
];


export const changePwdInputs = [

    {

        
        label: "Current Password",
        name: "currentPassword",
        placeholder: "Current Password",
        isPassword: true,
        isNum: false,
        validate: true,
        errorMessage: "Please enter your current password.",

        
    },
    {

        
        label: "New Password",
        name: "newPassword",
        placeholder: "New Password",
        isPassword: true,
        isNum: false,
        validate: true,
        errorMessage: "The password field cannot be empty.",

        
    },
    {

        
        label: "Confirm New Password",
        name: "confirmNewPassword",
        placeholder: "Confirm New Password",
        isPassword: true,
        isNum: false,
        validate: true,
        errorMessage: "The password does not match the new password",

        
    }
   
    


    
];


export const productInputs = [

    {
        
        label: "Product name (required)",
        name: "productName",
        isNum: false,
        errorMessage: "Product name is required.",
        hint: null
        
    },
    {
        
        label: "Quantity (required)",
        name: "quantity",
        isNum: true,
        errorMessage: "Quantity is required.",
        hint: "This should be a number. Example 4"
    },
    {
        
        label: "Price (required)",
        name: "unitPrice",
        isNum: false,
        errorMessage: "Price is required.",
        hint: "This should be a decimal number. Example 4.00 or 23.45"
        
    },
//     {
        
//         label: "Product Slug (required)",
//         name: "slug",
//         isNum: false,
//         errorMessage: "Product Slug is required.",
//         hint: "This is set after the product name is entered."
//     },
//     {
        
//         label: "Product Dimensions (Required)",
//         name: "dimension",
//         isPassword: false,
//         isNum: false,
//         validate: true,
//         errorMessage: "Product dimension is required.",
        
//     },
  
    


    
];





export const states = [

   {
        name: "Alabama",
        abbrev: "AL"
   }, 
   {
        name: "Alaska",
        abbrev: "AK"
   }, 
   {
        name: "Arizona",
        abbrev: "AZ"
   }, 
   {
        name: "California",
        abbrev: "CA"
   }, 
   {
        name: "Colorado",
        abbrev: "CO"
   }, 
   {
        name: "Connecticut",
        abbrev: "CT"
   }, 
   {
        name: "Delaware",
        abbrev: "DE"
   }, 
   {
        name: "District of Columbia",
        abbrev: "DC"
   }, 
   {
        name: "Georgia",
        abbrev: "GA"
   }, 
   {
        name: "Hawaii",
        abbrev: "HI"
   }, 
   {
        name: "Idaho",
        abbrev: "ID"
   }, 
   {
        name: "Illinois",
        abbrev: "IL"
   }, 
   {
        name: "Indiana",
        abbrev: "IN"
   }, 
   {
        name: "Iowa",
        abbrev: "IA"
   }, 
   {
        name: "Kansas",
        abbrev: "KS"
   }, 
   {
        name: "Louisiana",
        abbrev: "LA"
   }, 
   {
        name: "Maine",
        abbrev: "ME"
   }, 
   {
        name: "Maryland",
        abbrev: "MD"
   }, 
   {
        name: "Massachusetts",
        abbrev: "MA"
   }, 
   {
        name: "Michigan",
        abbrev: "MI"
   }, 
   {
        name: "Minnesota",
        abbrev: "MN"
   }, 
   {
        name: "Mississippi",
        abbrev: "MS"
    }, 
   {
        name: "Missouri",
        abbrev: "MO"
   }, 
   {
        name: "Montana",
        abbrev: "MT"
   }, 
   {
        name: "Nebraska",
        abbrev: "NE"
   }, 
   {
        name: "Nevada",
        abbrev: "NV"
   }, 
   {
        name: "New Hampshire",
        abbrev: "NH"
   }, 
   {
        name: "New Jersey",
        abbrev: "NJ"
   }, 
   {
        name: "New Mexico",
        abbrev: "NM"
   }, 
   {
        name: "New York",
        abbrev: "NY"
   }, 
   {
        name: "North Carolina",
        abbrev: "NC"
   }, 
   {
        name: "North Dakota",
        abbrev: "ND"
   }, 
   {
        name: "Oklahoma",
        abbrev: "Ok"
   }, 
   {
        name: "Oregon",
        abbrev: "OR"
   }, 
   {
        name: "Pennsylvania",
        abbrev: "PA"
   }, 
   {
        name: "Puerto Rico",
        abbrev: "PR"
   }, 
   {
        name: "Rhode Island",
        abbrev: "RI"
   }, 
   {
        name: "South Carolina",
        abbrev: "South Dakota"
   }, 
   {
        name: "Tennessee",
        abbrev: "TN"
   }, 
   {
        name: "Texas",
        abbrev: "TX"
   }, 
   {
        name: "Utah",
        abbrev: "UT"
   }, 
   {
        name: "Vermont",
        abbrev: "VT"
   }, 
   {
        name: "Virginia",
        abbrev: "VA"
   }, 
   {
        name: "West Virginia",
        abbrev: "WV"
   }, 
   {
        name: "Wisconsin",
        abbrev: "WI"
   }, 
   {
        name: "Wyoming",
        abbrev: "WY"
   }, 
 
    
];