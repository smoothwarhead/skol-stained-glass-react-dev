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
        validate: true,
        errorMessage: "Please enter a valid email address",
        validate: true


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
        validate: true,
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
        validate: true,
        errorMessage: "Please enter a valid email address",
        validate: true
        

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



export const contactInputs = [

    

    {
        
        name: "email",
        placeholder: "Email*",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        validate: true

        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
       
        name: "phoneNumber",
        placeholder: "Phone Number*",
        isPassword: false,
        errorMessage: "The phone number is required.",
        validate: true


    },

];

export const shippingContactInputs = [

    
    {
        
        name: "firstName",
        placeholder: "First Name*",
        isPassword: false,
        errorMessage: "Please enter a first name",
        validate: true

        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name*",
        isPassword: false,
        errorMessage: "Please enter a last name",
        validate: true


    },

    {
       
        name: "deliveryInstructions",
        placeholder: "Delivery Instructions (optional)",
        isPassword: false,
        errorMessage: "",
        validate: false


    },

    {
        
        name: "address",
        placeholder: "Address*",
        isPassword: false,
        errorMessage: "Please enter your address",
        validate: true

        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
       
        name: "apartment",
        placeholder: "Apartment, Suite, Etc (Optional)",
        isPassword: false,
        errorMessage: "",
        validate: false


    },
    {
       
        name: "city",
        placeholder: "City*",
        isPassword: false,
        errorMessage: "Please enter a city",
        validate: true


    },
    {
       
        name: "zipCode",
        placeholder: "Zip Code*",
        isPassword: false,
        errorMessage: "Please enter a zip code",
        validate: true


    }
   

];

export const billingAddressInputs = [

    
    {
        
        name: "firstName",
        placeholder: "First Name*",
        isPassword: false,
        errorMessage: "Please enter a first name",
        validate: true

        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name*",
        isPassword: false,
        errorMessage: "Please enter a last name",
        validate: true


    },
 

    {
        
        name: "address",
        placeholder: "Address*",
        isPassword: false,
        errorMessage: "Please enter your address",
        validate: false

        // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


    },
    {
       
        name: "apartment",
        placeholder: "Apartment, Suite, Etc (Optional)",
        isPassword: false,
        errorMessage: "",
        validate: false


    },
    {
       
        name: "city",
        placeholder: "City*",
        isPassword: false,
        errorMessage: "Please enter a city",
        validate: true


    },
    {
       
        name: "zipCode",
        placeholder: "Zip Code*",
        isPassword: false,
        errorMessage: "Please enter a zip code",
        validate: true


    },
    {
       
        name: "phoneNumber",
        placeholder: "Phone (optional)",
        isPassword: false,
        errorMessage: "",
        validate: true


    }
   

];


export const cardDetailsInputs = [

    {
        
        name: "cardNumber",
        placeholder: "Card Number",
        isPassword: false,
        isCard: true,
        errorMessage: "",
        validate: false

    },
    {
       
        name: "cardName",
        placeholder: "Name on Card",
        isPassword: false,
        errorMessage: "",
        validate: false


    },
    {
       
        name: "expirationDate",
        placeholder: "Expiration Date (MM/YY)",
        isPassword: false,
        errorMessage: "",
        validate: true


    },
    {
       
        name: "code",
        placeholder: "Security Code*",
        isPassword: false,
        errorMessage: "",
        validate: true


    }
   

];



export const states = [
    {
        id: 1,
        name: "Alabama",
        code: "AL"

    },
    {
        id: 2,
        name: "Alaska",
        code: "AK"

    },
    {
        id: 3,
        name: "Arizona",
        code: "AZ"

    },
    {
        id: 4,
        name: "Arkansas",
        code: "AR"

    },
    {
        id: 5,
        name: "California",
        code: "CA"

    },
    {
        id: 6,
        name: "Colorado",
        code: "CO"

    },
    {
        id: 7,
        name: "Connecticut",
        code: "CT"

    },
    {
        id: 8,
        name: "Delaware",
        code: "DE"

    },
    {
        id: 9,
        name: "District of Columbia",
        code: "DC"

    },
    {
        id: 10,
        name: "Florida",
        code: "FL"

    },
    {
        id: 11,
        name: "Georgia",
        code: "GA"

    },
    {
        id: 12,
        name: "Hawaii",
        code: "HI"

    },
    {
        id: 13,
        name: "Idaho",
        code: "ID"

    },
    {
        id: 14,
        name: "Illinois",
        code: "IL"

    },
    {
        id: 15,
        name: "Indiana",
        code: "IN"

    },
    {
        id: 16,
        name: "Iowa",
        code: "IA"

    },
    {
        id: 17,
        name: "Kansas",
        code: "KS"

    },
    {
        id: 18,
        name: "Kentucky",
        code: "KY"

    },
    {
        id: 19,
        name: "Louisiana",
        code: "LA"

    },
    {
        id: 20,
        name: "Maine",
        code: "ME"

    },
    {
        id: 21,
        name: "Maryland",
        code: "MD"

    },
    {
        id: 22,
        name: "Massachusetts",
        code: "MA"

    },
    {
        id: 23,
        name: "Michigan",
        code: "MI"

    },
    {
        id: 24,
        name: "Minnesota",
        code: "MN"

    },
    {
        id: 25,
        name: "Mississippi",
        code: "MS"

    },
    {
        id: 26,
        name: "Missouri",
        code: "MO"

    },
    {
        id: 27,
        name: "Montana",
        code: "MT"

    },
    {
        id: 28,
        name: "Nebraska",
        code: "NE"

    },
    {
        id: 29,
        name: "Nevada",
        code: "NV"

    },
    {
        id: 30,
        name: "New Hampshire",
        code: "NH"

    },
    {
        id: 31,
        name: "New Jersey",
        code: "NJ"

    },
    {
        id: 32,
        name: "New Mexico",
        code: "NM"

    },
    {
        id: 33,
        name: "New York",
        code: "NY"

    },
    {
        id: 34,
        name: "North Carolina",
        code: "NC"

    },
    {
        id: 35,
        name: "North Dakota",
        code: "ND"

    },
    {
        id: 36,
        name: "Ohio",
        code: "OH"

    },
    {
        id: 37,
        name: "Oklahoma",
        code: "OK"

    },
    {
        id: 38,
        name: "Oregon",
        code: "OR"

    },
    {
        id: 39,
        name: "Pennysylvania",
        code: "PA"

    },
    {
        id: 40,
        name: "Rhode Island",
        code: "RI"

    },
    {
        id: 41,
        name: "South Carolina",
        code: "SC"

    },
    {
        id: 42,
        name: "South Dakota",
        code: "SD"

    },
    {
        id: 43,
        name: "Tennessee",
        code: "TN"

    },
    {
        id: 44,
        name: "Texas",
        code: "TX"

    },
    {
        id: 45,
        name: "Utah",
        code: "UT"

    },
    {
        id: 46,
        name: "Vermont",
        code: "VT"

    },
    {
        id: 47,
        name: "Virginia",
        code: "VA"

    },
    {
        id: 48,
        name: "Washington",
        code: "WA"

    },
    {
        id: 49,
        name: "West Virginia",
        code: "WV"

    },
    {
        id: 50,
        name: "Wisconsin",
        code: "WI"

    },
    {
        id: 51,
        name: "Wyoming",
        code: "WY"

    },
   
]