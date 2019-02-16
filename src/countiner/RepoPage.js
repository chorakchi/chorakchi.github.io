import React from "react"
import Repo from "./../components/layout/Repo"
import {fetchPublicDataGet } from './../redux/actions'
import {connect} from 'react-redux'

class RepoPage extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPublicDataGet(this.props.repoName, this.props.pageName))
    }

    render(){
        const {publicDataGet } = this.props
        return(
            <React.Fragment>
                <Repo onChangeRoute = {(...data) => this.props.onChangeRoute(...data)} data = { publicDataGet.items || null}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const {publicDataGet
    } = state 

    return {
        publicDataGet
    }
}

export default connect(mapStateToProps)(RepoPage)