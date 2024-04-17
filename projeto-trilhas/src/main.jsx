import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx' <-- retira-se após criar o routerprovider
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<App /> <-- retira-se após criar o routerprovider
  <RouterProvider router={routes}/>
)
