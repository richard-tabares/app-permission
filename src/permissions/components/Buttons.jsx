import { useEffect, useState } from "react"
import { FaCircleCheck, FaCircleExclamation, FaCircleMinus, FaCircleXmark } from 'react-icons/fa6'
import { postPermissionState } from "../../login/helpers/postPermissionState"
import { postCertificateState } from "../../login/helpers/postCertificateState"
import { useLocation, useNavigate } from 'react-router-dom'

export const Buttons = ({ stateButton, id, setMessage, setMessageState }) => {

    const path = useLocation()
    const [location] = path.pathname.split('/').filter(part => part)


    const navigate = useNavigate()

    const initialStates = [
        {
            state: 'Aceptado',
            class: 'btn-accepted',
            icon: <FaCircleCheck className="inline-block mr-2" />
        },
        {
            state: 'Pendiente',
            class: 'btn-pending',
            icon: <FaCircleExclamation className="inline-block mr-2" />
        },
        {
            state: 'Rechazado',
            class: 'btn-refused',
            icon: <FaCircleMinus className="inline-block mr-2" />
        },
        {
            state: 'Cancelado',
            class: 'btn-canceled',
            icon: <FaCircleXmark className="inline-block mr-2" />
        },
    ]

    const [buttons, setButtons] = useState(initialStates)
    const [filterButtons, setFilterButtons] = useState([buttons])
    const [data, setData] = useState([])

    useEffect(() => {
        setFilterButtons(
            buttons.filter((button) => button.class != stateButton))

    }, [stateButton])

    const onStateButton = async (buttonState) => {

        (location === 'permisos')
            ? setData(await postPermissionState(id, buttonState))
            : setData(await postCertificateState(id, buttonState))
        
        console.log(data.message) 

        if (data.message !== '204' && data.message !== '400') {

            setMessage('Actualizado exitosamente')
            setMessageState(true)
            // navigate(location, {
            //     replace: true
            // })

        } else {

            setMessage('El estado de la solicitud no hasido cambiado')
            setMessageState(true)

        }

    }

    return (

        <>

            <section className="mt-8 sm:flex sm:gap-6 grid gap-y-4">

                {
                    filterButtons.map((button, index) => (

                        <button
                            key={index} className={`${button.class} text-center`}
                            onClick={() => onStateButton(button.state)} >

                            {button.icon}{button.state}

                        </button>

                    ))

                }

            </section>

        </>
    )
}
