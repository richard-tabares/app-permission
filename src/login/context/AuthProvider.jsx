import { useReducer } from "react"
import { AuthContext } from './AuthContext'
import { getUserById } from "../helpers/getUserById"
import { AuthReducer } from './AuthReducer'
import { types } from './types'

export const AuthProvider = ({ children }) => {

    const initUser = () => {

        const user = JSON.parse(localStorage.getItem('user'))

        return {
            logged: !!user,
            user: user,
            selectState: ''
        }
    }

    const [state, dispatch] = useReducer(AuthReducer, {}, initUser)

    const login = async (user = '', password = '') => {


        const data = await getUserById(user, password)

        if (!(data.message == '204' || data.message == '400')) {


            const action = {
                types: types.login,
                payload: data
            }
            localStorage.setItem('user', JSON.stringify(...data))
            dispatch(action)
            return '200'

        } else {

            return data.message

        }

    }

    const logout = () => {


        const action = {
            types: types.logout
        }
        localStorage.removeItem('user')
        dispatch(action)


    }

    const filter = (select) => {

        const action = {
            types: types.filterState,
            payload: select
        }
        dispatch(action)

    }

    return (

        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            filter

        }}>
            {children}
        </AuthContext.Provider>

    )
}
