import { Outlet  } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import SessionManager from "./files/SessionManager";

const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { setUser, loggedIn, setLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        const verifyRefresh = async ( ) => {
            try {
                // const currentUser = localStorage.getItem("currentUser");
                // const isAuth = localStorage.getItem("isAuth");


                const currentUser = SessionManager.getUser();
                const isAuth = SessionManager.getAuth();

                setUser(currentUser);
                setLoggedIn(isAuth);

            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false);
            }
        }

        !loggedIn ? verifyRefresh() : setIsLoading(false);

    }, [loggedIn, setLoggedIn, setUser])


  return (
    <>
        {isLoading
            ? <p>Loading ... </p>
            : <Outlet />
        }
    </>
  )
}

export default PersistLogin;