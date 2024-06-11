import { Activity } from '../types'


export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } } 
    


export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}


export const initialState : ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
        state : ActivityState = initialState,
        action: ActivityActions
    ) => {
        
        if( action.type === 'save-activity') {

            let updatedActivity : Activity[] = []

            if ( state.activeId ) {
                updatedActivity = state.activities.map( activity => activity.id === state.activeId 
                    ? action.payload.newActivity
                    : activity // Mantiene la referencia del objeto
                    )

                }
            else {
                updatedActivity = [...state.activities, action.payload.newActivity]
            }

            return {
                 ...state,
                 activities: updatedActivity,
                 activiveId: ''
            }
        }

        if ( action.type === 'set-activeId') {

            return {
                ...state,
                activeId: action.payload.id
            }
        }

        if ( action.type === 'delete-activity') {

            return {
                ...state,
                activities: state.activities.filter( activity => activity.id !== action.payload.id )
            }
        }

    return state;

}