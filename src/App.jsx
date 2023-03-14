import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing'
import EmpCreate from './EmpCreate'
import EmpDetail from './EmpDetail'
import EmpEdit from './EmpEdit'

function App() {
  return (
    <div className="App">
      <h1 className='pt-3'>React JS CRUD Operations</h1>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpListing/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
    <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
    <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
