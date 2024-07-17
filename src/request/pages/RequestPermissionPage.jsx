import { FaUser, FaIdBadge, FaUserTie, FaCircleInfo } from "react-icons/fa6"
import { useForm } from "../../hooks/useForm"
import { getUser } from '../../login/helpers/getUser'
import { useContext, useEffect, useState } from "react"
import { getAllBosses } from "../../login/helpers/getAllBosses"
import { putRequestPermission } from "../../login/helpers/putRequestPermission"
import { AuthContext } from "../../login/context/AuthContext"
import { Message } from "../../permissions/components/Message"
import { useLocation, useNavigate } from 'react-router-dom'

export const RequestPermissionPage = () => {

  const initialForm = {
    idUser: '',
    names: '',
    idBoss: '',
    description: '',
    date: '',
    state: 'Pendiente'

  }

  const path = useLocation()
  const [location] = path.pathname.split('/').filter(part => part)
  const { onInputChange, onResetForm, idUser, names, idBoss, description, state } = useForm(initialForm)
  const [data, setData] = useState([])
  const [dataBosses, setDataBosses] = useState([])
  const {
    messageState,
    setMessageState,
    setMessage,
    setLocation
  } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {

    setLocation(location)

  }, [location])

  useEffect(() => {

    const handleData = async () => {

      const getData = await getAllBosses()

      if (getData.message != '204' && getData.message != '400') {

        setDataBosses(getData)

      } else {

        setDataBosses([])

      }

    }
    handleData()

  }, [])

  useEffect(() => {

    const handleData = async () => {

      const getData = await getUser(idUser)

      if (getData.message != '204' && getData.message != '400') {

        setData(...getData)

      } else {

        setData([])

      }


    }
    handleData()

  }, [idUser])

  const onSubmitPermission = async (e) => {

    e.preventDefault()

    if (idUser != '' && idBoss != '' && description != '') {

      const response = await putRequestPermission(state)

      if (response.message != '204' && response.message != '400') {

        setMessage('Petición radicada exitosamente')
        setMessageState(!messageState)
        onResetForm()

      }

    } else {
      setMessage('Debes rellenar todos los campos')
      setMessageState(!messageState)
    }

  }
  const cancelPermission = (e) => {

    e.preventDefault()
    navigate('/peticiones', {
      replace: true
    })

  }

  const onHnadlerChange = (e) => {

    onInputChange(e)


  }

  return (

    <section className="p-10 w-screen h-screen grid m-auto place-content-center">

      {

        messageState && <Message />

      }

      <header className="text-center mb-6">

        <h2 className="title mb-2">Permisos</h2>
        <p className="subtitle">Digiligencia la informacion para radicar tu permiso</p>

      </header>

      <form>

        <div className='flex items-center mb-6'>

          <div className='absolute flex pl-4 text-gray-dark z-10'>
            <FaIdBadge />
          </div>
          <input
            type="text"
            name="idUser"
            value={idUser}
            placeholder="Ingresa tu Identificación"
            className="input-text w-full !pl-10"
            autoFocus
            onChange={onInputChange}
          />

        </div>
        <div className='flex items-center mb-6'>

          <div className='absolute flex pl-4 text-gray-dark z-10'>
            <FaUser />
          </div>
          <input
            type="text"
            name="names"
            value={data.name || ''}
            placeholder="Nombres"
            className="input-text w-full !pl-10"
            onFocus={onInputChange}
            readOnly
          />

        </div>
        <div className='flex items-center mb-6'>

          <div className='absolute flex pl-4 text-gray-dark z-10'>
            <FaUserTie />
          </div>

          <select
            name="idBoss"
            value={idBoss}
            className="px-6 py-5 w-full rounded-xl !pl-10"
            onChange={onInputChange}>
            <option value=''>Seleciona un Jefe</option>
            {
              dataBosses.map((item, index) =>
                <option key={index} value={item.idUser}>{item.name}</option>
              )
            }
          </select>

        </div>
        <div className='flex items-center mb-6'>

          <div className='absolute flex pl-4 text-gray-dark z-10'>
            <FaCircleInfo />
          </div>

          <textarea
            name="description"
            placeholder="Ingresa la informaicon de tu permiso"
            className="input-text w-full !pl-10"
            value={description}
            rows={10}
            onChange={onInputChange}></textarea>


        </div>
        <div className="grid gap-4">
          <button
            className="primary-button"
            onClick={onSubmitPermission}>
            Enviar
          </button>
          <button
            className="p-4 rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={cancelPermission}>
            Cancelar
          </button>
        </div>

      </form>

      </section>

  )
}
