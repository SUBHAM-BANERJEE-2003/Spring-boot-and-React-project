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
import EditStudentPage from './pages/EditStudentPage.tsx'
import StudentProfilePage from './pages/StudentProfilePage.tsx'

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
  },
  {
    path: "/edit-student/:id",
    element: (
      <EditStudentPage/>
    )
  },
  {
    path: "/student-profile/:id",
    element: (
      <StudentProfilePage/>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
