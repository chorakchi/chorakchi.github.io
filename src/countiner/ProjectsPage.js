import React from "react"
import Projects from "./../components/layout/Projects"

class PortfolioPage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Projects onChangeRoute = {(...data) => this.props.onChangeRoute(...data)}/>
            </React.Fragment>
        )
    }
}

export default PortfolioPage