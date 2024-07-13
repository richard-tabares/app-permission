import { useEffect } from "react";
import { FaCircleInfo, FaX } from "react-icons/fa6";

export const Message = ({ message, setMessageState }) => {

    useEffect(() => {

        const handleEsc = (e) => {

            (e.key === 'Escape' || e.key === 'Esc') && setMessageState(false)

        }

        document.addEventListener('keydown', handleEsc);

        return () => {

            document.removeEventListener('keydown', handleEsc);

        };
    }, []);
    
    const closeModal = (e) => {


        // e.key === 'Escape' && setMessageState(false)

        setMessageState(false)

    }
    document.addEventListener('keydown', closeModal)
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
