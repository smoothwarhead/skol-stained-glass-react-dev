import { AiFillHome } from 'react-icons/ai'
import { FaStore, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'

export const sideNav = [

    {
        name: "Dashboard",
        icon : <AiFillHome />,
        to: "/access-auth/business/admin"
    }, 
    {
        name: "Products",
        icon : <FaStore />,
        to: "/access-auth/business/admin/products"
    }, 
    {
        name: "Orders",
        icon : <FaShoppingCart />,
        to: "/access-auth/business/admin/orders"
    }, 
    {
        name: "Transactions",
        icon : <BsCreditCardFill />,
        to: "/access-auth/business/admin/transactions"
    }, 
    {
        name: "Staffs",
        icon : <FaUsers />,
        to: "/access-auth/business/admin/staffs"
    }, 


]