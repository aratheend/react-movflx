import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element= {<HomePage/>} />
    </Routes>
    )
}

export default MyRouter