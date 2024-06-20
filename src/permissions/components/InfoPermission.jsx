import { FaPenToSquare } from "react-icons/fa6"
import { Buttons } from "./Buttons"


//este componente debe llamar un get permisions para obtener el permiso segun el id del home
export const InfoPermission = () => {
    return (

        <>
            <section className="grid gap-5">

                <div>

                    <h3 className="font-semibold">Fecha</h3>
                    <p>06/06/2024</p>

                </div>

                <div>

                    <h3 className="font-semibold">Nombre</h3>
                    <p>Jeisson Richard Tabares Botero</p>

                </div>


                <div>

                    <h3 className="font-semibold">Cargo</h3>
                    <p>Coordinador de Sistemas</p>

                </div>

                <div>

                    <h3 className="font-semibold">Correo</h3>
                    <p>richardtabaresb@gmail.com</p>

                </div>

                <div>

                    <h3 className="font-semibold">Descripción</h3>
                    <p>Coordinador de Sistemas</p>

                </div>

                {/* se muestra este icono si el rol del usuario el admin */}
                <FaPenToSquare />

                <div>

                    <h3 className="font-semibold inline-block mr-4">Estado:</h3>
                    <span className="btn-pending">Pendiente</span>

                </div>

            </section>

            <Buttons />

        </>

    )
}
