import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PatientsPage } from '../pages/PatientsPage'
import { Header } from '../components/layout/Header'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: '/patients',
    element: (
      <>
        <Header />
        <PatientsPage />
      </>
    ),
  },
])
