import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import index from './../modules/index'
import main from './../modules/main'
import page1 from './../modules/page1'
import cv from './../modules/cv'
import notfound from  './../modules/notfound'
 
render((
  <Router history={hashHistory}>
  <Route path="/" component={index}/>
    <Route path="/index" component={index}/>
    
    <Route path="/main" component={main}>
      <Route path="/main/cv" component={cv}/>
    </Route>
    <Route path="index" component={index}/>
    <Route path="page1" component={page1}/>
    <Route path="*" component={notfound}/>
  </Router>
), document.getElementById('app'))