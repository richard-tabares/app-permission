import { useContext, useEffect, useState } from "react"
import { PermissionCard } from "../components/PermissionCard"
import { SelectState } from "../components/SelectState"
import { AuthContext } from "../../login/context/AuthContext"
import { getPermissionsByState } from "../../login/helpers/getPermissionsByState"
import { useLocation } from 'react-router-dom'

export const PermissionsPage = () => {


  const path = useLocation()
  const [location] = path.pathname.split('/').filter(part => part)

  const { selectState, setLocation, user } = useContext(AuthContext)
  const [permissionData, setPermissionData] = useState([])

  const locaUser = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    
    setLocation(location)
      
  }, [location])
  

  useEffect(() => {

    const fetchPermissions = async () => {
      setPermissionData(await getPermissionsByState(selectState, locaUser.idUser))

    }

    fetchPermissions()

  }, [selectState])

  return (

      <section className="p-8 grid gap-6">

        <header className="grid gap-2">

          <h2 className="title">Permisos</h2>
          <p className="subtitle">Permisos radicados por mi personal a cargo</p>

        </header>

        <SelectState />

        {

          (permissionData.message != '204' && permissionData.message != '400')
          ? <PermissionCard data={permissionData} location={location} />
            : <div className="text-center">No hay resultados</div>

        }

      </section>

  )
}
