import { useContext, useState } from "react"
import { AuthContext } from "../../login/context/AuthContext"

export const SelectState = () => {

    const optionStates = ['Todos', 'Aceptado', 'Pendiente', 'Rechazado', 'Cancelado']
    const [stateSelect, setStateSelect] = useState(optionStates)

    const { filter } = useContext(AuthContext)
 
    const onSelect = ({ target }) => {
        
        const select = target.value
        filter(select)

    }

    return (

        <section>

            <select className="px-6 py-5 w-full rounded-xl" name="filterStates" onChange={onSelect}>
                {
                    stateSelect.map((states, index) => (

                        <option key={index} value={states != 'Todos' ? states : ''}>{states}</option> 

                    ))
                }
            </select>

        </section>

    )
}
