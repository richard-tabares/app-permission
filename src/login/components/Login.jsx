import { FaUser } from 'react-icons/fa6'
import { FaLock } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    
    const navigate = useNavigate()

    const onLogin = () => {
        navigate('permisos', {
            replace: true
        })

    }
    return (

        <section className="bg-gray-dark w-screen h-screen grid">

            <section className="bg-gray-dark text-white p-10 grid place-content-center">

                <header className="mb-8 text-center">

                    <div className='flex justify-center'>

                        <img src="/assets/images/logo.webp" alt="Logo" className="mb-10" />

                    </div>

                    <h2 className="title mb-2">Inicia Sesión</h2>
                    <p>Usa tu información de usuairo para iniciar sesión</p>

                </header>

                <section className='mb-10'>

                    <div className='flex items-center mb-6'>

                        <div className='absolute flex pl-4 text-gray-dark z-10'>
                            <FaUser />
                        </div>
                        <input type="text" name="user" placeholder="User" className="input-text w-full !pl-10" />

                    </div>

                    <div className='flex items-center mb-4'>

                        <div className='absolute flex pl-4 text-gray-dark z-10'>
                            <FaLock />
                        </div>
                        <input type="password" name="pass" placeholder="Password" className="input-text w-full !pl-10" />

                    </div>

                    <div className="text-xs mb-8">Olvidé mi contraseña</div>
                    <input type="button" value="Login" className="primary-button w-full" onClick={onLogin} />

                </section>

                <footer className="underline w-auto text-sm text-center">
                    Si aún no tienes un susario contacta con el administrador del sistema
                </footer>

            </section>

        </section>

    )
}
