import Axios from 'axios';


const BASE_URL = "https://localhost:7001";
const EXAMPLE_URL = "https://localhost:7079";


export default Axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }, 
    withCredentials: true
});

export const axiosPrivate =  Axios.create({
    baseURL: EXAMPLE_URL
});
