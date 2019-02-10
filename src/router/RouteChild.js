import React from 'react'
import {Route } from 'react-router-dom'
import Home from "./../countiner/HomePage"
import Portfolio from "./../countiner/PortfolioPage"
import Projects from "./../countiner/ProjectsPage"
import Blog from "./../countiner/BlogPage"
import RepoPage from "./../countiner/RepoPage"
import { withRouter } from "react-router-dom";

const ChildRepo = ({ match }) => (
    <div>
      <RepoPage 
      repoName= {match.params.repoName}
      pageName=  {match.params.pageName}
      onChangeRoute={ link => this.props.history.push(link)}
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
                        <Route path="/:parent/portfolio" component={() => <Portfolio {...pageProp}/>} />
                        <Route path="/:parent/projects" component={() => <Projects {...pageProp}/>} />
                        <Route path="/projects" component={() => <Portfolio {...pageProp} />} />
                        <Route path="/blog" component={() => <Blog {...pageProp}/>} />
                        <Route path="/repo/:repoName/:pageName" component={ChildRepo } />
                    </React.Fragment>
        )
    }
}

export default withRouter(RouteChild);