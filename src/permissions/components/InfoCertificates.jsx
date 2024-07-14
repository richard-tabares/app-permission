import { useContext, useEffect, useState } from "react"
import { Buttons } from "./Buttons"
import { Message } from "./Message"
import { AuthContext } from "../../login/context/AuthContext"


export const InfoCertificates = ({certificate = []}) => {

    const [data] = certificate
    const [stateButton, setStateButton] = useState(data?.state)
    const { messageState } = useContext(AuthContext)

    useEffect(() => {

        switch (data?.state) {

            case 'Aceptado':

                setStateButton('btn-accepted')
                break;

            case 'Pendiente':

                setStateButton('btn-pending')
                break;

            case 'Rechazado':

                setStateButton('btn-refused')
                break;

            case 'Cancelado':

                setStateButton('btn-canceled')
                break;

        }


    }, [data?.state])

    return (

        <>
            {

                messageState && <Message />

            }
            <section className="grid gap-5">

                <div>

                    <h3 className="font-semibold">Fecha</h3>
                    <p>{data?.date}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Nombre</h3>
                    <p>{data?.name}</p>

                </div>


                <div>

                    <h3 className="font-semibold">Cargo</h3>
                    <p>{data?.position}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Correo</h3>
                    <p>{data?.email}</p>

                </div>

                <div>

                    <h3 className="font-semibold inline-block mr-4">Estado:</h3>
                    <span className={stateButton}>{data?.state}</span>

                </div>

            </section>

            <Buttons stateButton={stateButton} id={data?.idCertificate || data?.idPermission} />


        </>

    )
}
