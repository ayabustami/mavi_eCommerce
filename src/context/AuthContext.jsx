import React, { useState } from 'react'
import { createContext } from 'react'


export const  AuthContext= createContext(null);
  
export function AuthProvider({children}){
    const [token,setToken]= useState(localStorage.getItem('token'));
    return<>
    <AuthContext.Provider value={{token,setToken}}>
        {children}
    </AuthContext.Provider>
    </>
}