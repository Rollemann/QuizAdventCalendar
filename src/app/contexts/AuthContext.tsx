'use client'
import {useContext, createContext, useState} from 'react'

const AuthContext = createContext(); 


export function AuthContextProvider({children}) {
  return (
    <AuthContext>
        {children}
    </AuthContext>
  );
}

export function UserAuth(){
    return useContext(AuthContext);
}