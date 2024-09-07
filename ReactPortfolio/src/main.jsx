import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error.jsx'
import AboutMe from './pages/AboutMe.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'contact',
        element: <ContactMe />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
