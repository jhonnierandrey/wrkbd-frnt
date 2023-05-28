import { createContext, useReducer, useEffect } from "react";

type AuthContextStateType = {
    user: {
        email: string,
        token: string,
    }
}

type AuthContextType = {
    state: AuthContextStateType,
    dispatch: React.Dispatch<any>
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthContextStateType, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || "") : undefined;
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, [])

    console.log(`AuthContext state: ${state}`)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
