import { createContext, useReducer } from "react";
import { Workout } from "../types/types";

type WorkoutContextStateType = {
    workouts: Workout[] | []
}

type WorkoutContextType = {
    state: WorkoutContextStateType,
    dispatch: React.Dispatch<any>
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null)

export const workoutReducer = (state: WorkoutContextStateType, action: any) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state
    }
}

const WorkoutContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: []
    });

    return (
        <WorkoutContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvider;

