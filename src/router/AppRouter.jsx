import { Routes, Route } from 'react-router-dom'
import { Login } from '../login/components/Login'
import { PermissionsRoutes } from '../permissions/routes/PermissionsRoutes'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { Requests } from '../request/pages/RequestsPage'
import { RequestPermissionPage } from '../request/pages/RequestPermissionPage'
import { RequestCertificatePage } from '../request/pages/RequestCertificatePage'

export const AppRouter = () => {
  return (

    <Routes>

      <Route path='/peticiones' element={<Requests/>}/>
      <Route path='/radicarPermiso' element={<RequestPermissionPage />}/>
      <Route path='/radicarCertificado' element={<RequestCertificatePage />}/>

      <Route path='login' element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />


      <Route path='/*' element={
        <PrivateRoute>
          <PermissionsRoutes />
        </PrivateRoute>
      } />

    </Routes>

  )
}
