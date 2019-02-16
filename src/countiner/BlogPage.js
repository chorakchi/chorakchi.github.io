import React from "react"
import Blog from "./../components/layout/Blog"
import BlogPost from "./../components/layout/Blog/BlogPost"
import { fetchMdDataGet, fetchPublicDataGet } from './../redux/actions'
import { connect } from 'react-redux'
class BlogPage extends React.Component {

    componentDidMount() {
        if (this.props.post){
            this.props.dispatch(fetchMdDataGet("blog", this.props.post))
        } else {
            this.props.dispatch(fetchPublicDataGet("blog", "posts"))
        }
    }

    render() {
        const { mdDataGet, publicDataGet } = this.props
        return (
            <React.Fragment>
                {this.props.post ?
                    <BlogPost data={mdDataGet.items || ""} onChangeRoute={(...data) => this.props.onChangeRoute(...data)} />
                    :
                    <Blog data={publicDataGet.items || []} onChangeRoute={(...data) => this.props.onChangeRoute(...data)} />

                }
            </React.Fragment>

        )

    }
}


const mapStateToProps = state => {
    const { mdDataGet,
        publicDataGet
    } = state

    return {
        mdDataGet,
        publicDataGet
    }
}

export default connect(mapStateToProps)(BlogPage)