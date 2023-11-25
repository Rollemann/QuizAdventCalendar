'use client'
import { useContext, createContext, useEffect, useState } from 'react'
import { signOut, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth'
import { auth } from '../firebase';

type AuthContextProviderProps = { children: React.ReactNode };

export type UserT = User | null;

type AuthContext = {
    user: UserT,
    emailSignIn: (email: string, password: string) => void,
    logOut: () => void
};

const AuthContext = createContext<AuthContext | null>(null);


export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserT>(null);

    const emailSignIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe()
        }
    }, [user])


    return (
        <AuthContext.Provider value={{ user, emailSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }
    return context;
}