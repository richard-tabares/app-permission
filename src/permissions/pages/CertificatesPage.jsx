import { useContext, useEffect, useState } from "react"
import { PermissionCard } from "../components/PermissionCard"
import { SelectState } from "../components/SelectState"
import { AuthContext } from "../../login/context/AuthContext"
import { getCertificateByState } from "../../login/helpers/getCertificateByState"
import { useLocation } from 'react-router-dom'

export const CertificatesPage = () => {

  const path = useLocation()
  const [location] = path.pathname.split('/').filter(part => part)

  const { selectState } = useContext(AuthContext)
  const [certificateData, setCertificateData] = useState([])

  useEffect(() => {

    const fetchPermissions = async () => {
      setCertificateData(await getCertificateByState(selectState))

    }

    fetchPermissions()

  }, [selectState])

  return (

    <section className="p-8 grid gap-6">

        <header className="grid gap-2">

          <h2 className="title">Certificados </h2>
          <p className="subtitle">Cartas laborales radicadas por mi personal a cargo</p>

        </header>

      <SelectState />
        
      {

        (certificateData.message != '204' && certificateData.message != '400')
          ? <PermissionCard data={certificateData} location={location} />
          : <div className="text-center">No hay resultados</div>

      }
        

    </section>
    
  )
}
