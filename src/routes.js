import { createBrowserRouter } from 'react-router-dom'

import { UserLogin } from './pages/login'

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <UserLogin />
  },
  {
    path: '/',
    element: (
      <div>
        <h1>Página dashboard</h1>
      </div>
    )
  }
])

export default routes
