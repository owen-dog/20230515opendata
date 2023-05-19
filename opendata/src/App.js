import React, { Component } from 'react'
import { BrowserRouter  , HashRouter,Switch,Route,Redirect } from 'react-router-dom'
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/'  component={Admin}/>        
        </Switch>
      </BrowserRouter>
  );
}

export default App;
