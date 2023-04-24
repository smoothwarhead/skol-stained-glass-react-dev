import { createContext, useState } from 'react';


export const NavContext = createContext({});

export const NavProvider = ({ children }) => {

    const [slideAccount, setSlideAccount] = useState(false);
    const [slideCart, setSlideCart] = useState(false);
    const [slideSearch, setSlideSearch] = useState(false);
    const [slideForgot, setSlideForgot] = useState(false);
    const [returnSignIn, setReturnSignIn] = useState(false);

    
    


    return (
        <NavContext.Provider value={{ 
            slideAccount, 
            setSlideAccount,
            slideCart, 
            setSlideCart,
            slideSearch, 
            setSlideSearch,
            slideForgot, 
            setSlideForgot,
            returnSignIn, 
            setReturnSignIn

          }}
        >
            {children}
        </NavContext.Provider>
    )

}

export default NavContext;