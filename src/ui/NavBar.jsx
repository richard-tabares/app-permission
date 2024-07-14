import { useContext, useState } from 'react'
import { FaUser, FaBars, FaX, FaFileInvoice, FaArrowRightFromBracket, FaFileExport } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../login/context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const localUser = JSON.parse(localStorage.getItem('user'))
    
    const [menuActive, setMenuActive] = useState(false)

    const onCloseMenu = () => {

        setMenuActive(!menuActive)

    }
    const onOpenMenu = () => {

        setMenuActive(!menuActive)

    }

    const onLogout = () => {

        logout()
        navigate('login', {
            replace: true
        })

    }

    return (

        <nav className="sticky top-0 opacity-95 bg-yellow-primary px-6 py-5 flex place-content-between items-center">

            <div className='flex items-center'>

                <FaUser className='mr-3' />
                <span>{localUser.name}</span>

            </div>

            <Link>

                <FaBars onClick={onOpenMenu} />



            </Link>
            <div
                className={`fixed left-0 top-0 flex flex-wrap place-content-end text-right bg-yellow-primary w-screen transition duration-300 ${!menuActive && 'hidden'}`}
            >


                <Link
                    className='p-6'
                    onClick={onCloseMenu}
                >
                    <FaX />
                </Link>
                <NavLink
                    to='/permisos'
                    className={`transition duration-300 p-6 hover:bg-yellow-secondary w-screen flex place-content-end items-center`}
                    onClick={onCloseMenu}
                >
                    <FaFileInvoice className='inline-block mr-2' />Permisos
                </NavLink>
                <NavLink
                    to='/certificados'
                    className={`transition duration-300 p-6 hover:bg-yellow-secondary w-screen flex place-content-end items-center`}
                    onClick={onCloseMenu}
                >
                    <FaFileExport className='inline-block mr-2' /> Certificados
                </NavLink>
                <NavLink
                    to='/login'
                    className={`transition duration-300 p-6 hover:bg-yellow-secondary w-screen flex place-content-end items-center`}
                    onClick={onLogout}
                >
                    <FaArrowRightFromBracket className='inline-block mr-2' />Salir
                </NavLink>

            </div>


        </nav>

    )
}