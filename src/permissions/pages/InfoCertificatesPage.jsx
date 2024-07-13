import { useEffect, useState } from "react";
import { getCertificateById } from "../../login/helpers/getCertificateById";
import { InfoCertificates } from "../components/InfoCertificates";
import { useParams } from 'react-router-dom'

export const InfoCertificatesPage = () => {

    const { idCertificate } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            setData(await getCertificateById(idCertificate))
        }

        getData()
    }, [idCertificate])

    return (

        <section className="p-8 grid gap-6">

            <header className="grid gap-2">

                <h2 className="title">Solicitud de Carta Laboral</h2>
                <p className="subtitle">Aca puedes aceptar, Rechazar o Anular tu solicitudes</p>

            </header>

            <InfoCertificates certificate={data} />

        </section>

    )
}
