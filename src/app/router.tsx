import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { AppLayout } from './AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ProjectPage } from '../pages/ProjectPage'
import { TaskPage } from '../pages/TaskPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'project/:projectId', element: <ProjectPage /> },
      { path: 'task/:taskId', element: <TaskPage /> },
      { path: 'notfound', element: <NotFoundPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
])
