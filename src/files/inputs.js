export const createAccountInputs = [

    {
        
        name: "firstName",
        placeholder: "First Name",
        isPassword: false,
        errorMessage: "Please enter a first name",
        validate: true

        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name",
        isPassword: false,
        errorMessage: "Please enter a last name",
        validate: true


    },
    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        validate: true


    },
    {
       
        name: "password",
        placeholder: "Password",
        isPassword: true,
        errorMessage: "The password field cannot be empty.",
        validate: true


    },

];


export const signInInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        validate: true

        // pattern: "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"


    },
    {
        name: "password",
        placeholder: "Password",
        isPassword: true,
        errorMessage: "The password field cannot be empty.",
        validate: true


    },

];

export const forgotInputs = [


    {
        
        name: "email",
        placeholder: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid email address",
        validate: true
        

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