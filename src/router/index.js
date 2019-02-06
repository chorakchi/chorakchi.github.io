import React from 'react'
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom'
import Home from "./../countiner/HomePage"
import Portfolio from "./../countiner/PortfolioPage"
import Blog from "./../countiner/BlogPage"
import { Animation } from "./../components/common"

const RedirectTo = (link) => (
    <Redirect to={link} />
)

class Routers extends React.Component {
    state = {
        blurFilter: false,
        newRoute: null,
    }

    handllerChangeRoute = (link, optionRoute) => {
        this.setState({ blurFilter: optionRoute.parentFilter });
        this.setState({ newRoute: RedirectTo(link) });
        console.log("optionRoute", optionRoute.parentFilter)
    };

    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        {/* <Animation type={"blur"} active={this.state.blurFilter}> */}
                            <Route path="/home" component={() => <Home onChangeRoute={(...data) => this.handllerChangeRoute(...data)} />} />
                            <Route exact path="/" component={() => <Home onChangeRoute={(...data) => this.handllerChangeRoute(...data)} />} />
                            {this.state.newRoute}
                        {/* </Animation> */}
                        <Route path="/home/Portfolio" component={() => <Portfolio onChangeRoute={(...data) => this.handllerChangeRoute(...data)}/>} />
                        <Route path="/blog" component={() => <Blog onChangeRoute={(...data) => this.handllerChangeRoute(...data)}/>} />
                        <Route path="/renova" component={() => <Blog onChangeRoute={(...data) => this.handllerChangeRoute(...data)}/>} />
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default Routers