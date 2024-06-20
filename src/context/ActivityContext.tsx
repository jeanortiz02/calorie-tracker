import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";



type ActiviyProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState;
    dispatch: Dispatch<ActivityActions>
}

export const ActiviyContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({children} : ActiviyProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <ActiviyContext.Provider 
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActiviyContext.Provider>
    )
}