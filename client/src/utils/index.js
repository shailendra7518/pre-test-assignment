import { jwtDecode } from "jwt-decode";

export const getToken = () => localStorage.getItem('token');
// export const getUserDetail =()=>jwtDecode(getToken())