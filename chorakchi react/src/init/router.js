import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import index from './../modules/index'
 
render((
  <Router history={hashHistory}>
  <Route path="/" component={index}/>
    <Route path="/index" component={index}/>
    <Route path="*" component={index}/>
  </Router>
), document.getElementById('app'))