import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ViewAllStudents from './pages/ViewAllStudents.tsx'
import AddStudentPage from './pages/AddStudentPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App/>
    ),
  },
  {
    path: "/view-students",
    element: (
      <ViewAllStudents/>
    ),
  },
  {
    path: "/add-students",
    element: (
      <AddStudentPage
      />
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
