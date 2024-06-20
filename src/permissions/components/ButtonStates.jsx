import { FaCircleExclamation, FaCircleCheck, FaCircleXmark, FaCircleMinus } from "react-icons/fa6";

export const ButtonStates = ({ buttons }) => {

    return buttons.map((button, index) => {


        switch (button.state) {

            case 'Aceptado':

                return <button key={index} className="btn-accepted text-center "><FaCircleCheck className="inline-block mr-2" />{button.state}</button>

            case 'Pendiente':

                return <button key={index} className="btn-pending text-center "><FaCircleExclamation className="inline-block mr-2" />{button.state}</button>

            case 'Rechazado':

                return <button key={index} className="btn-refused text-center "><FaCircleXmark className="inline-block mr-2" />{button.state}</button>

            case 'Cancelado':

                return <button key={index} className="btn-canceled text-center "><FaCircleMinus className="inline-block mr-2" />{button.state}</button>

            default:
                break;
        }

    })

}
