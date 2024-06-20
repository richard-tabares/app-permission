import { useState } from "react"
import { ButtonStates } from './ButtonStates'

//esta funcion debe recibor el estado del permiso para poder filtrar los botones de estado
export const Buttons = () => {

    const initialStates = [
        {
            state: 'Aceptado',
            class: 'btn-accepted',
            icon: 'FaCircleCheck'
        },
        {
            state: 'Pendiente',
            class: 'btn-pending',
            icon: 'FaCircleExclamation'
        },
        {
            state: 'Rechazado',
            class: 'btn-refused',
            icon: 'FaCircleMinus'
        },
        {
            state: 'Cancelado',
            class: 'btn-canceled',
            icon: 'FaCircleXmark'
        },
    ]
    const [buttons, setButtons] = useState(initialStates)

    return (
        <section className="mt-8 sm:flex sm:gap-6 grid gap-y-4">

            <ButtonStates buttons={buttons} />

        </section>
    )
}
