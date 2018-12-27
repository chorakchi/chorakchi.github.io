import React from "react"
import Portfolio from "./../components/layout/Portfolio"

class PortfolioPage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Portfolio onChangeRoute = {(...data) => this.props.onChangeRoute(...data)}/>
            </React.Fragment>
        )
    }
}

export default PortfolioPage