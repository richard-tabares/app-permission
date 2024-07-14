import { types } from './types'
export const AuthReducer = (state = {}, action) => {

    switch (action.types) {
        case types.login:

            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:

            return {
                logged: false
            }
        
        case types.filterState:
            
            return {
                ...state,
                selectState:action.payload
            }
        
        case types.message:
            
            return {
                ...state,
                message:action.payload
            }
        
        case types.messageState:
            
            return {
                ...state,
                messageState:action.payload
            }
        
        case types.location:
            
            return {
                ...state,
                location:action.payload
            }

        default:
            return state

    }

}
