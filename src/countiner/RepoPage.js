import React from "react"
import RepoHome from "./../components/layout/RepoHome"
import RepoDoc from "./../components/layout/RepoDoc"
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
                {
                    this.props.pageName == 'home' ? 
                    <RepoHome onChangeRoute = {(...data) => this.props.onChangeRoute(...data)} data = { publicDataGet.items || null}/>
                    : this.props.pageName == 'doc' ? 
                    <RepoDoc onChangeRoute = {(...data) => this.props.onChangeRoute(...data)} data = { publicDataGet.items || null}/>
                    :
                    null
                }
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