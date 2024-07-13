import { Routes, Route } from 'react-router-dom'
// import { PermissionsPage } from '../permissions/pages/PermissionsPage'
import { Login } from '../login/components/Login'
import { PermissionsRoutes } from '../permissions/routes/PermissionsRoutes'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
export const AppRouter = () => {
  return (

    <Routes>

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
