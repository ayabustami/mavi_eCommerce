import { useState } from 'react'
import './App.css'
import Router from './router/Router'
import { RouterProvider } from 'react-router'


function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  )

}

export default App
