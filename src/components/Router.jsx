import ErrorPage from './ErrorPage.jsx'
import MainPage from './main/MainPage.jsx'
import SuggestionPage from './suggestion/SuggestionPage.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Navigate to='main' replace />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'suggestions',
        element: <SuggestionPage />,
      },
    ],
  },
])

export default Router
