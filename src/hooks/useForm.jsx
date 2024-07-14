import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [state, setState] = useState(initialForm)

    const onInputChange = ({ target }) => {

        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onResetForm = () => {
        
        setState(initialForm)
    }
    return {
        ...state,
        state,
        onInputChange,
        onResetForm
    }
}
