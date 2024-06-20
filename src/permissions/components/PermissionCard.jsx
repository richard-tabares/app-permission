import { Link } from "react-router-dom"
import { FaCircleExclamation } from "react-icons/fa6";

// este debe recibir la data del permisos para poder renderizarlos todos
export const PermissionCard = ({ permissions }) => {
    return (

        <Link className="bg-white p-6 rounded-xl" to='/certificados/info'>

            <div className="grid gap-2">

                <header className="font-bold">Richard Tabares</header>
                <p>1017155071</p>
                <p>richardtabaresb@gmail.com</p>
                <p>06/06/2024</p>

            </div>

            <button className="btn-pending mt-4"><FaCircleExclamation className="inline-block mr-2"/> Pendiente</button>

        </Link>

    )
}
