import React from 'react'
import {Route } from 'react-router-dom'
import Home from "./../countiner/HomePage"
import Portfolio from "./../countiner/PortfolioPage"
import Projects from "./../countiner/ProjectsPage"
import Blog from "./../countiner/BlogPage"
import RepoPage from "./../countiner/RepoPage"
import { withRouter } from "react-router-dom";

const ChildRepo = ({ match, ...props }) => (
    <div>
      <RepoPage 
      repoName= {match.params.repoName}
      pageName=  {match.params.pageName}
      {...props}
      onChangeRoute={ link => props.history.push(link)}
      />
    </div>
  );
const PostChild = ({ match, ...props }) => (
    <div>
      <Blog
      post= {match.params.post}
      {...props}
      onChangeRoute={ link => props.history.push(link)}
      />
    </div>
  );
const PortfolioProps = ({ match, ...props }) => (
    <div>
      <Portfolio
      child= {match.params.child}
      {...props}
      onChangeRoute={ link => props.history.push(link)}
      />
    </div>
  );

class RouteChild extends React.Component {
    render() {
        const pageProp = {
            onChangeRoute: link => this.props.history.push(link)
        }
        return (
                    <React.Fragment>
                        <Route path="/home" component={() => <Home {...pageProp} />} />
                        <Route exact path="/" component={() => <Home {...pageProp} />} />
                        <Route path="/:parent/portfolio/:child" component={PortfolioProps} />
                        <Route path="/:parent/projects" component={() => <Projects {...pageProp}/>} />
                        <Route path="/projects" component={() => <Portfolio {...pageProp} />} />
                        <Route exact path="/blog" component={PostChild } />
                        <Route path="/blog/:post" component={PostChild } />
                        <Route path="/repo/:repoName/:pageName" component={ChildRepo } />
                    </React.Fragment>
        )
    }
}

export default withRouter(RouteChild);