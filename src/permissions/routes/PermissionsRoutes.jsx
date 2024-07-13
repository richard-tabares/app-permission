import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from '../../ui/NavBar'
import { PermissionsPage } from '../pages/PermissionsPage'
import { CertificatesPage } from '../pages/CertificatesPage'
import { InfoPermissionPage } from '../pages/InfoPermissionPage'
import { InfoCertificatesPage } from '../pages/InfoCertificatesPage'



export const PermissionsRoutes = () => {
  return (
    <>
      
      <NavBar />

      <Routes>

        <Route path='permisos' element={<PermissionsPage />} />
        <Route path='permisos/info/:idPermission' element={<InfoPermissionPage />} />
        <Route path='certificados' element={<CertificatesPage />} />
        <Route path='certificados/info/:idCertificate' element={<InfoCertificatesPage />} />

        <Route path='/*' element={<Navigate to='/permisos' />} />

      </Routes>

    </>
  )
}
