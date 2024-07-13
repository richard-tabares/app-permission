import { useEffect, useState } from "react";
import { getPermissionById } from "../../login/helpers/getPermissionById";
import { InfoPermission } from "../components/InfoPermission";
import { useParams } from 'react-router-dom'

export const InfoPermissionPage = () => {

    const { idPermission } = useParams()
    const [data, setData] = useState([])

       useEffect(() => {
        const getData = async () => {
            setData(await getPermissionById(idPermission))
      }
    
      getData()
       }, [idPermission])
    
    return (

        <section className="p-8 grid gap-6">

            <header className="grid gap-2">

                <h2 className="title">Solicitud de Permisos Laborales</h2>
                <p className="subtitle">Aca puedes aceptar, Rechazar o Anular tu solicitudes</p>

            </header>
            
            <InfoPermission permission={data} />

        </section>

    )
}
