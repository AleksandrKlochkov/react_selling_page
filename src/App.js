import React from 'react'
import MainLayout from './hoc/layouts/MainLayout/MainLayout'
import AdminLayout from './admin/hoc/layouts/AdminLayout/AdminLayout'
import {Switch, Route} from 'react-router-dom'

function App() {

  const isAuthentication = true
  return (
    <React.Fragment>
         <Switch>
            <Route path="/admin" component={AdminLayout}/>
            <Route path="/" component={MainLayout}/>
         </Switch>
    </React.Fragment>
  )
}

export default App;
