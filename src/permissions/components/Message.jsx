import { useContext, useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { AuthContext } from "../../login/context/AuthContext";
import { useNavigate } from 'react-router-dom'

export const Message = () => {

    const { setMessageState, message, messageState, location } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {

        const handleEsc = (e) => {

            (e.key === 'Escape' || e.key === 'Esc') && setMessageState(!messageState)
            navigate(`/${location}`, {
                replace: true
            })

        }

        document.addEventListener('keydown', handleEsc);

        return () => {

            document.removeEventListener('keydown', handleEsc);

        };
    }, []);
    
    const closeModal = () => {

        setMessageState(!messageState)
        navigate(`/${location}`, {
            replace: true
        })

    }

    return (

        <section className="fixed grid place-items-center top-0 left-0 bg-gray-dark w-screen h-screen bg-opacity-90 backdrop-blur-sm z-20 p-8" onClick={closeModal}>

            <section open className="message">

                <section className="flex items-center">

                    <FaCircleInfo className="size-9 inline mr-4" /><div className="inline">{message}</div>

                </section>

                <button className="secondary-button mt-8">Cerrar</button>

            </section>

        </section>


    )
}
