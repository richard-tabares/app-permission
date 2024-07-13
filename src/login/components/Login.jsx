import { FaUser } from 'react-icons/fa6'
import { FaLock } from 'react-icons/fa6'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { Message } from '../../permissions/components/Message'

export const Login = () => {

    const initialForm = {
        user: '',
        password: '',
    }

    const [message, setMessage] = useState()
    const [messageState, setMessageState] = useState(false)
    const { onInputChange, user, password } = useForm(initialForm)

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogin = async (e) => {

        e.preventDefault()

        if (user != '' && password != '') {

            setMessageState(false)

            const logginState = await login(user, password)

            if (logginState !== '204' && logginState !== '400') {

                navigate('permisos', {
                    replace: true
                })

            } else {

                setMessage('Usuario y contraseña no coinciden, intenta de nuevo')
                setMessageState(true)

            }


        } else {

            setMessage('Los campos no pueden ir vacios')
            setMessageState(true)

        }

    }

    return (

        <section className={`bg-gray-dark w-screen h-screen grid`}>

            {

                messageState && <Message message={message} setMessageState={setMessageState} />

            }


            <section className="bg-gray-dark text-white p-10 grid place-content-center">

                <header className="mb-8 text-center">

                    <div className='flex justify-center'>

                        <img src="/assets/images/logo.webp" alt="Logo" className="mb-10" />

                    </div>

                    <h2 className="title mb-2">Inicia Sesión</h2>
                    <p>Usa tu información de usuario para iniciar sesión</p>

                </header>

                <form onSubmit={onLogin}>

                    <section className='mb-10'>

                        <div className='flex items-center mb-6'>

                            <div className='absolute flex pl-4 text-gray-dark z-10'>
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                name="user"
                                placeholder="User"
                                className="input-text w-full !pl-10"
                                value={user}
                                onChange={onInputChange} autoFocus autoComplete='off' />

                        </div>

                        <div className='flex items-center mb-4'>

                            <div className='absolute flex pl-4 text-gray-dark z-10'>
                                <FaLock />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input-text w-full !pl-10"
                                value={password}
                                onChange={onInputChange} />

                        </div>

                        <div className="text-xs mb-8">Olvidé mi contraseña</div>
                        <input type="submit" value="Login" className="primary-button w-full" onClick={onLogin} />

                    </section>
                </form>

                <footer className="underline w-auto text-sm text-center">
                    Si aún no tienes un susario contacta con el administrador del sistema
                </footer>

            </section>

        </section>

    )
}
