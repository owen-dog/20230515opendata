import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Detail from './detail';






export default class servicemenu extends Component {
  render() {
    return (
      
        <Switch>
            <Route path='/detail' component={Detail}></Route>

        </Switch>
    )
  }
}
