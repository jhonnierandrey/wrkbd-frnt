import { createContext, useReducer } from "react";

type AuthContextStateType = {
    user: ""
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

    console.log(`AuthContext state: ${state}`)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
