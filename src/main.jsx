import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Foundation from './Foundational/Foundation.tsx'
import Intermediate from './Intermediate/Intermediate.tsx'

/**
 * Bisa ditambah loader jika butuh fetch API
 * Action kalau ada submit form
 * errorElement untuk custom error page per route
 */
const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/foundation',
        element: <Foundation />
    },
    {
        path: '/intermediate',
        element: <Intermediate />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>
)
