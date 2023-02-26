import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { HomePage, ProfilePage, ErrorPage }  from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'profile/:id',
        caseSensitive: true,
        element: <ProfilePage />
      },
      {
        path: 'settings',
        caseSensitive: true,
        element: <ErrorPage />
      },
      {
        path: 'community',
        caseSensitive: true,
        element: <ErrorPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])

