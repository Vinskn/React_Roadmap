import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Foundation from './Foundational/Foundation.tsx'

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/foundation',
        element: <Foundation />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>
)
