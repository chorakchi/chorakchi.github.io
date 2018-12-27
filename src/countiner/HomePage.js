import React from "react"
import Home from "./../components/layout/Home"

class HomePage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Home onChangeRoute={(...data)=> this.props.onChangeRoute(...data)}/>
            </React.Fragment>
        )
    }
}

export default HomePage