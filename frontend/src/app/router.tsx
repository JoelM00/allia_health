import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PatientsPage } from '../pages/PatientsPage'
import { Header } from '../components/layout/Header'
import { Toaster } from 'react-hot-toast'

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
        <Toaster position="bottom-center" reverseOrder={false} />
        <PatientsPage />
      </>
    ),
  },
])
