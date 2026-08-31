import { useState } from 'react'
import {Route, Routes} from 'react-router'
import './App.css'
import Home from './components/Home'
import Budgets from './components/Budgets'
import Transactions from './components/Transactions'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar
          content={
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/budgets" element={<Budgets/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
            </Routes>
          }
      />
      
    </>
  )
}

export default App

