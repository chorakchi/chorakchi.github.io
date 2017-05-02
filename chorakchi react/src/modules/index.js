import React from 'react'
import NavLink from './NavLink'
//import $ from 'jquery'

import picture_mypicture from '../image/lamp.svg'
// import picture_mypicture from '../image/mypicture.jpg'
import picture_mylogo from '../image/mylogo.svg'
import picture_lamp from '../image/lamp.svg'
import picture_rulerpen from '../image/ruler-pen.svg'
import picture_phone from '../image/phone.svg'
import picture_rocket from '../image/rocket.svg'
import picture_terminal from  '../image/terminal.svg'
import picture_graph from '../image/graph.svg' 
import picture_js from '../image/js.svg'
import picture_reacthexagon from '../image/react-hexagon.svg'
import picture_angularicon from '../image/angular-icon.svg'
import picture_jQurery from '../image/jQurery.svg'
import picture_HTML5 from '../image/HTML5.svg'
import picture_CSS3 from '../image/CSS3.svg'
import picture_webpack from '../image/webpack.svg'
import picture_nodejsicon from '../image/nodejs-icon.svg'
import picture_graphql from '../image/graphql.svg'
import picture_electron from '../image/electron.svg'
import picture_nativescript from '../image/nativescript.svg'
import picture_mytrand from '../image/mytrand.svg'


export default React.createClass({
  render() {
    return  <div> 
                <div className="headermainblock" style={{position: 'absolute' ,left: '0' ,right: '0' ,height: '100%'}}>
          <div className="wrapper">
            <h2 style={{'margin-top': 134}}>Front-end Developer JavaScript Full-Staker</h2>
            <span>(React.js, Angular.js, NodeJS, ES6, HTML5, CSS3)</span>
            <p>Implement a modular and scalable web application in JavaScript<br />
              Front-end DevOps mindset and experience with building of big single page applications.<br />
              Self-motivation, evolving and improving the tools in use,<br /> researching and implementing new UI technologies, and exploring future trends</p>
            <div className="headermainblockbtnholder animation-g">
              <NavLink to="/main/cv">
              <div className="headermainblockbtn">Resume</div>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  }
})
