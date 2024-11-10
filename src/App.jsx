
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { PageLayout } from './Components/PageLayout'

function App() {

  return (
    <>
  <Routes  >
    <Route path='/' element={<PageLayout/>} />
  </Routes>
   
    
    </>
  )
}

export default App
