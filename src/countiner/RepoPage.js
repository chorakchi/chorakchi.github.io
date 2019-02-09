import React from "react"
import Repo from "./../components/layout/Repo"

class RepoPage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Repo onChangeRoute = {(...data) => this.props.onChangeRoute(...data)}/>
            </React.Fragment>
        )
    }
}

export default RepoPage