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
        {this.props.children}
        <div className="blockboxinercolorfooter textfooter">
            <div className="wrapper">
              <section className="features">
                <div className="row">
                  <article className="col-md-4">
                    <h3>Short personal biography</h3>
                    {/*<p>I was born in the city of dorud in the province of Lorestan in iran, I attended high school there and for University, went to Arak. After I got married for better working conditions in Tehran. And now I'm planning to immigrate to Germany</p>*/}
                  </article>
                  <article className="col-md-4">
                    <h3>Contacts</h3>
                    <p>Mohammad Chorakchi</p>
                    <p>Email: m.chorakchi@gmail.com</p>
                    <p>tell: +98-930-32-32-903</p>
                    <p>telegram: @chorakchi</p>
                  </article>
                  <article className="col-md-4">
                    <img className="headermylogo" src={picture_mylogo}/>
                    <h3>Social Network</h3>
                    <div className="icon-sotial icon-sotial4"></div>
                    <div className="icon-sotial icon-sotial1"></div>
                    <div className="icon-sotial icon-sotial2"></div>
                    <div className="icon-sotial icon-sotial3"></div>
                    
                  </article>
                </div>
              </section>
            </div>
          </div>
        <div className="headerblock animation-g">
          <div className="wrapper">
            <nav className="headermainblockiner">
              <div>
                <img className="headermylogo" src={picture_mylogo}/>
              <div className="headermainblocklogo">
                .Chorakchi
              </div>
              </div>
              <ul className="ulinnavheader">
                <li className="headermainblocklink"><a href="https://github.com/chorakchi">GitHub</a></li>
                <li className="headermainblocklink"><a href="https://chorakchi.github.io/mofid">Demo</a></li>
                <li className="headermainblocklink"><a href="https://chorakchi.github.io/">Blog</a></li>
                <li className="headermainblocklink"><a href="http://mofid.team">Slack</a></li>
                <li className="headermainblocklink"><a href="https://chorakchi.github.io/">Home</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  }
})
scrollingHead()
function scrollingHead(){
        $(window).scroll(function() {
  if ( $(window).scrollTop() >= 300 ) { 
      
    $(".headerblock").css({ 
        'background': 'rgb(247, 202, 201)',
        'height': '60'
    } ); 
    $(".headermainblocklogo").css({
      'font-size': '20px'
    });
    $('.headermainblockiner').css({
          'padding': '0px'
    });
    $('.ulinnavheader').css({
      'padding': '0px'
    });
  }
  if ( $(window).scrollTop() <= 30 ) { 
      
    $(".headerblock").css({
        'background': 'rgba(255,255,255,0.2)',
        'height': '100'
    } );
    $(".headermainblocklogo").css({
      'font-size': '30px'
    });
    $('.headermainblockiner').css({
          'padding': '20px'
    });
    $('.ulinnavheader').css({
      'padding': '25px'
    });
  }
  if ( $(window).scrollTop() + $(window).height() == $(document).height() ) { 
      $(".headerblock").css({
        'height': '0'
    } ); 
  }
  if ( $(window).scrollTop() + $(window).height() != $(document).height() && $(window).scrollTop() >= 300 ){
      $(".headerblock").css({
        'height': '60'
    } ); 
    $(".headermainblocklogo").css({
      'font-size': '20px',
    });
    $('.headermainblockiner').css({
          'padding': '0px'
    });
    $('.ulinnavheader').css({
      'padding': '0px'
    });

  }
});
}