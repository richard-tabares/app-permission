import { useContext, useEffect, useState } from "react"
import { FaCircleCheck, FaCircleExclamation, FaCircleMinus, FaCircleXmark } from 'react-icons/fa6'
import { postPermissionState } from "../../login/helpers/postPermissionState"
import { postCertificateState } from "../../login/helpers/postCertificateState"
import { useLocation } from 'react-router-dom'
import { AuthContext } from "../../login/context/AuthContext"
import { Pdf } from './CreatePdf'
import { pdf } from "@react-pdf/renderer"
import { getPermissionById } from "../../login/helpers/getPermissionById"
import { getUser } from "../../login/helpers/getUser"

export const Buttons = ({ stateButton, id }) => {

    const path = useLocation()
    const [location] = path.pathname.split('/').filter(part => part)

    const { setMessage, setMessageState, messageState } = useContext(AuthContext)

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

        if (data.message !== '204' && data.message !== '400') {

            generateAndUploadPdf()
            setMessage('Actualizado exitosamente')
            setMessageState(!messageState)

        } else {

            setMessage('El estado de la solicitud no hasido cambiado')
            setMessageState(!messageState)

        }

    }

    //crear y cargar pdf********************************************************************************

    const idRamdon = () => {

        const partOne = Date.now().toString(35)
        const partTwo = Math.random().toString(36).slice(2)
        return partOne + partTwo

    }

    const uploadPdf = async (blob) => {

        const formData = new FormData()
        formData.append('file', blob, `Certificado_${idRamdon()}.pdf`)
        formData.append('id', id,)

        try {

            const response = await fetch('http://localhost/data/uploadPdf.php', {

                method: 'POST',
                body: formData,

            })
            const responseServer = await response.json()
            console.log(responseServer)
            if (response.ok && responseServer['response'] === 'upload_ok') {

                console.log(responseServer)
                console.log('PDF uploaded successfully')

            } else {
                console.log(response)
                console.error(response)
                // console.error('Failed to upload PDF')
                // alert('Error al enviar la informacion, intente de nuevo')
                alert(response)

            }

        } catch (error) {

            console.error('Error:', error)
            alert('Error al enviar la informacion, intente de nuevo')

        }
    }

    const generateAndUploadPdf = async () => {

        const [dataPermssion] = await getPermissionById(id)
        const [dataBoss] = await getUser(dataPermssion.idBoss)
        console.log(dataPermssion)
        console.log(dataBoss)

        const blob = await pdf(<Pdf dataPermssion={dataPermssion} dataBoss={dataBoss} />).toBlob()
        uploadPdf(blob)

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
