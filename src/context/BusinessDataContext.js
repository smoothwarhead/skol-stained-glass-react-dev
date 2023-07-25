import { createContext, useState } from "react"

export const BusinessDataContext = createContext({});



const BusinessDataProvider = ({ children }) => {

    const [pending, setPending] = useState(false);
    const [businessProducts, setBusinessProducts] = ([]);
    


    // const [message, setMessage] = useState({
    //     body: "",
    //     type: ""
    // });

    // const closeModal = () => {
    //     setModalOpen(false);
    // }

   

  return (
    <BusinessDataContext.Provider value={{ 
        pending, 
        setPending, 
        businessProducts,
        setBusinessProducts
       
    }}
    >
        {children}
    </BusinessDataContext.Provider>
  )
}

export default BusinessDataProvider;