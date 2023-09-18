import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pasges/Login/Login'
import Registration from './Pasges/Registration/Registration'
import Home from './Pasges/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </>
  )
}

export default App
