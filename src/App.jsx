
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { PageLayout } from './Components/PageLayout'
import { SwapPage } from './Components/SwapPage'
import { NoPage } from './Components/PageNotFound'
import { Pool } from './Components/Pool'
import {  ReceiveFunds, SendFunds } from './Components/Transaction'
import { Portfolio } from './Components/Portfolio'
import { Homepage } from './Components/Homepage'

function App() {

  return (
    <>
  <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="swap" element={<SwapPage/>} />
          <Route path="pool" element ={<Pool/>}/>
          <Route path="receive" element={<ReceiveFunds/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="send" element={<SendFunds/>}/>
          <Route path="home" element={<Homepage/>}/>

          <Route path='*' element={<NoPage/>}/>
         
        </Route>
      </Routes>
   
    
    </>
  )
}

export default App
