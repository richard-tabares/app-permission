import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../login/context/AuthContext"

export const SelectState = () => {

    const optionStates = ['Todos', 'Aceptado', 'Pendiente', 'Rechazado', 'Cancelado']
    const [select, setSelect] = useState('Todos')

    const { filter } = useContext(AuthContext)

    useEffect(() => {

        (localStorage.getItem('selectOption', select)) && setSelect(localStorage.getItem('selectOption'))
      
    }, [select])
    


    const onSelect = ({ target }) => {

        const value = target.value
        setSelect(value)
        localStorage.setItem('selectOption', value)
                
        filter(value)

    }

    return (

        <section>

            <select className="px-6 py-5 w-full rounded-xl" name="filterStates" onChange={onSelect} value={select}>
                {
                    optionStates.map((states, index) => (

                        <option key={index} value={states != 'Todos' ? states : ''} >{states}</option>

                    ))
                }
            </select>

        </section>

    )
}
