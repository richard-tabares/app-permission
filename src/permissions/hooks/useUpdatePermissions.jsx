import { FaCircleCheck, FaCircleExclamation, FaCircleXmark, FaCircleMinus } from "react-icons/fa6";

export const useUpdatePermissions = (permissions) => {

    const update = permissions.map(permission => {

        switch (permission.state) {
            case 'Aceptado':
                return (
                    {
                        ...permission,
                        btnState: {
                            class: 'btn-accepted',
                            icon: <FaCircleCheck className="inline-block mr-2" />
                        }
                    }
                )

            case 'Pendiente':
                return (
                    {
                        ...permission,
                        btnState: {
                            class: 'btn-pending',
                            icon: <FaCircleExclamation className="inline-block mr-2" />
                        }
                    }
                )

            case 'Rechazado':
                return (
                    {
                        ...permission,
                        btnState: {
                            class: 'btn-refused',
                            icon: <FaCircleMinus className="inline-block mr-2" />
                        }
                    }
                )

            case 'Cancelado':
                return (
                    {
                        ...permission,
                        btnState: {
                            class: 'btn-canceled',
                            icon: <FaCircleXmark className="inline-block mr-2" />
                        }
                    }
                )


            default:
                return permission;
        }

    }

    )

    return update

}


