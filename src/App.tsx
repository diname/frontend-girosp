import { createBrowserRouter } from 'react-router-dom'

import { UserLogin } from './pages/login'
import { Home } from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <UserLogin />
  }
])

export { router }
