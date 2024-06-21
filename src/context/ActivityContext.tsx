import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";
import { categories } from "../data/categories";
import { Activity } from "../types";



type ActiviyProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState;
    dispatch: Dispatch<ActivityActions>;
    caloriesConsumed: number;
    caloriesBurned: number;
    netCalores: number;
    isEmptyActivity: boolean;
    categoryName: (category: Activity["category"]) => string[]
}

export const ActiviyContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({children} : ActiviyProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState);

    // contadores 
    const caloriesConsumed = useMemo ( ()=> state.activities.reduce( (total, activity) => activity.category === 1 
        ? total + activity.calories

        : total, 0 ), [state.activities])
    const caloriesBurned = useMemo ( ()=> state.activities.reduce( (total, activity) => activity.category === 2 
        ? total + activity.calories
        : total, 0 ), [state.activities])

    const netCalores = useMemo ( ()=> caloriesConsumed - caloriesBurned ,[state.activities])

    const categoryName = useMemo( () => 
        (category : Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '' ) 
        , [])

    const isEmptyActivity = useMemo( () => state.activities.length === 0 , [state.activities])

    return (
        <ActiviyContext.Provider 
            value={{
                state,
                dispatch,
                caloriesConsumed,
                caloriesBurned,
                netCalores,
                isEmptyActivity,
                categoryName,
            }}
        >
            {children}
        </ActiviyContext.Provider>
    )
}