import ErrorPage from './ErrorPage.jsx'
import MainPage from './main/MainPage.jsx'
import SuggestionPage from './suggestion/SuggestionPage.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'suggestions',
        element: <SuggestionPage />,
      },
    ],
    basename: '/hun-api',
  },
])

export default Router
