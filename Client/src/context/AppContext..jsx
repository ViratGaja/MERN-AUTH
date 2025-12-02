import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userdata, setUserData] = useState(false);
    
    const getUserData = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.get(backendurl + '/api/user/data');
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch user data");
        }
    };
    
    const value = {
        backendurl,
        isLoggedin,
        setIsLoggedin,
        userdata,
        setUserData,
        getUserData
    };
    
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
};