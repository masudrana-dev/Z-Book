import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pasges/Home/Home.jsx';
import Registration from './Pasges/Registration/Registration.jsx';
import Login from './Pasges/Login/Login.jsx';
import ForgotPass from './Pasges/ForgtoPass/ForgotPass';
import { store } from './Pasges/Store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/forgotpass",
    element: <ForgotPass></ForgotPass>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
