import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { useUpdatePermissions } from "../hooks/useUpdatePermissions";
import { AuthContext } from "../../login/context/AuthContext";

export const PermissionCard = ({ data = [] }) => {

    const [newData, setNewData] = useState([])
    const {location} = useContext(AuthContext)

    useEffect(() => {

        setNewData(useUpdatePermissions(data))

    }, [data])

    return (
        <>
            {
                newData.map(item => (

                    <Link
                        className="bg-white p-6 rounded-xl"
                        to={`/${location}/info/${item.idPermission || item.idCertificate}`}
                        key={item.idPermission || item.idCertificate}>

                        <div className="grid gap-2">

                            <header className="font-bold">Nombre: {item.name}</header>
                            <p>{item.idUser}</p>
                            <p>{item.email}</p>
                            <p>{item.date}</p>

                        </div>

                        <button className={`${item.btnState.class} mt-4`}>

                            {item.btnState.icon} {item.state}

                        </button>

                    </Link>

                ))
            }

        </>
    )
}
