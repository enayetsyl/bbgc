import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Contact from '../pages/Contact';

// admin routes
import Dashboard from '../admin/pages/Dashboard';
import AdminLayout from '../MainLayout/AdminLayout';
import Register from '../admin/pages/Register';
import Login from '../admin/pages/Login';
import StdDashboard from '../admin/student/StdDashboard';

// import PrivateRoute from './PrivateRoute';

//templates

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/login',
        element: <Login />,
      },
      {
        path: '/dashboard/register',
        element: <Register />,
      },
      {
        path: '/dashboard/student/:id',
        element: <StdDashboard />,
      },
    ],
  },
]);

export default router;
