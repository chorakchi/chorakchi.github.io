import React from 'react'
import NavLink from './NavLink'
//import $ from 'jquery'

// import picture_mypicture from '../image/lamp.svg'
import picture_mypicture from '../image/mypicture.jpg'
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
        <div className="headermainblock">
          <div className="wrapper">
            <h2 style={{'margin-top': 134}}>Front-end Developer JavaScript Full-Staker</h2>
            <span>(React.js, Angular.js, NodeJS, ES6, HTML5, CSS3)</span>
            <p>Implement a modular and scalable web application in JavaScript<br />
              Front-end DevOps mindset and experience with building of big single page applications.<br />
              Self-motivation, evolving and improving the tools in use,<br /> researching and implementing new UI technologies, and exploring future trends</p>
            <img src={picture_mypicture} style={{borderRadius: 10, float: 'right'}} alt="Pacman" />
            <div className="headermainblockbtnholder animation-g">
              <div className="headermainblockbtn">Video Resume</div>
              <div className="headermainblockbtn">Printable CV</div>
            </div>
          </div>
        </div>
        <div className="blockbox">
          <div className="wrapper">
            <section className="features">
              <div className="row">
                <article className="col-md-4">
                  <img src={picture_lamp} alt="Cloud" />
                  <h3>Middleware </h3>
                  <p>Create modern web apps, sites, and APIs using HTTP or real-time apps using MEAN stack.</p>
                  <p>Familiar with MEAN stack (MongoDB, Express, Angular.JS, Node.JS) and GraphQL</p>
                </article>
                <article className="col-md-4">
                  <img src={picture_rulerpen} alt="Rocket" />
                  <h3>UI/UX</h3>
                  <p>Design and use popular UI libraries such as Bootstrap, Foundation, google material design , Material-UI and Semantic-UI to build semantic and responsive web pages</p>
                </article>
                <article className="col-md-4">
                  <img src={picture_phone} alt="Lock" />
                  <h3>Quality code</h3>
                  <p>Postman, Fiddler or other in-browser developer tools to debug cross-browser/platform issues and solutions ,tests and code review</p>
                </article>
              </div>
              <div className="row">
                <article className="col-md-4"> 
                  <img src={picture_rocket} alt="Graph" />
                  <h3>Expressive</h3>
                  <p>Work with Electron , Nativescript, PhantomJS,  and Use D3.js, highchart, amchart, kendu-UI, in all modern framework</p>
                </article>
                <article className="col-md-4">
                  <img src={picture_terminal} alt="Terminal" />
                  <h3>Extensible</h3>
                  <p>working with build processes and using tools like Webpack, Grunt or Gulp and package managers such as NPM or Bower</p>
                </article>
                <article className="col-md-4">
                  <img src={picture_graph} alt="Pacman" />
                  <h3>Middleware </h3>
                  <p>Create modern web apps, sites, and APIs using HTTP or real-time apps using MEAN stack.<br />
                    Familiar with MEAN stack (MongoDB, Express, Angular.JS, Node.JS) and GraphQL</p>
                </article>
              </div>
            </section>
          </div>
          <div className="blockboxinercolor1">
            <div className="wrapper">
              <section className="features">
                <div className="row">
                  <article className="col-md-12">
                    <h3>more about my skills</h3>
                    <p>Aspiration to constantly improve yourself and learn new technologies and concepts</p>
                    <p>In writing high-performance, reusable code and using source control systems(g.e Git, TFS).</p>                   
                    <p>Knowledge on design and consumption of REST-based APIs</p>
                    <p>I’m trying good English communication level</p>
                    <p>Knowledge of German is elementary, but I will stay to complete it</p>
                    <p>I have at least 2+ years of experience in frontend development</p>
                    <p>I' m trying an effective communicator, love working in a team, pay a lot of attention to detail and love to learn new things</p>
                  </article>
                </div>
              </section>
            </div>
          </div>
          <div className="blockboxinercolor2">
            <div className="wrapper">
              <section className="features">
                <div className="row">
                  <article className="col-md-2 col-sm-4">
                    <img src={picture_js} style={{width: 134}} alt="Pacman" />
                    <h3>JavaScript</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_reacthexagon} alt="Pacman" />
                    <h3>React</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_angularicon} alt="Pacman" />
                    <h3>Angular</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_jQurery} alt="Pacman" />
                    <h3> jQuery</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_HTML5} alt="Pacman" />
                    <h3>HTML5</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_CSS3} alt="Pacman" />
                    <h3>CSS3</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_webpack} alt="Pacman" />
                    <h3>Webpack</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_nodejsicon} alt="Pacman" />
                    <h3>node.js</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_graphql} alt="Pacman" />
                    <h3>GraphQL</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_electron} alt="Pacman" />
                    <h3>Electron</h3>
                  </article>
                  <article className="col-md-2 col-sm-6">
                    <img src={picture_nativescript} alt="Pacman" />
                    <h3>Nativescript</h3>
                  </article>
                </div>
              </section>
            </div>
          </div>
          <div className="blockboxinercolor3">
            <div className="wrapper">
              <section className="features">
                <div className="row">
                  <article className="col-md-12">
                    <h3>Experience and Education</h3>
                    <img src={picture_mytrand} style={{width: '100%'}} alt="Pacman" />
                  </article>
                </div>
              </section>
            </div>
          </div>
          <div className="blockboxinercolorfooter textfooter">
            <div className="wrapper">
              <section className="features">
                <div className="row">
                  <article className="col-md-4">
                    <h3>Short personal biography</h3>
                    <p>I was born in the city of dorud in the province of Lorestan in iran, I attended high school there and for University, went to Arak. After I got married for better working conditions in Tehran. And now I'm planning to immigrate to Germany</p>
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

