import React from "react"
import Blog from "./../components/layout/Blog"

class BlogPage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Blog onChangeRoute = {(...data) => this.props.onChangeRoute(...data)}/>
            </React.Fragment>
        )
    }
}

export default BlogPage