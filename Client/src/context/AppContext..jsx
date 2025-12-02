import { createContext, useState } from "react";

export const AppContent=createContext();

export const AppContextProvider=(props)=>{
    const backendurl=import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin,setIsLoggedin]=useState(false)
    const [userdata,setUserData]=useState(false)
    const value={
        backendurl,
        isLoggedin,setIsLoggedin,
        userdata,setUserData
        
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}

        </AppContent.Provider>
    )
}

