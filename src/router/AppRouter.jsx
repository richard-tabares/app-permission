import { Routes, Route } from 'react-router-dom'
// import { PermissionsPage } from '../permissions/pages/PermissionsPage'
import { Login } from '../login/components/Login'
import { PermissionsRoutes } from '../permissions/routes/PermissionsRoutes'
export const AppRouter = () => {
  return (

    <Routes>
      <Route path='login' element={<Login /> } />
      <Route path='/*' element={<PermissionsRoutes /> } />

    </Routes>

  )
}
