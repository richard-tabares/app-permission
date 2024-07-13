import { AuthProvider } from './login/context/AuthProvider'
import { AppRouter } from './router/AppRouter'

export const App = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}


