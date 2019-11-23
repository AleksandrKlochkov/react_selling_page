import React from 'react'
import MainLayout from './hoc/layouts/MainLayout/MainLayout'
import AdminLayout from './hoc/layouts/AdminLayout/AdminLayout'

function App() {

  const isAuthentication = true
  return (
    <React.Fragment>
         {isAuthentication ? <AdminLayout />  : <MainLayout />} 
    </React.Fragment>
  )
}

export default App;
