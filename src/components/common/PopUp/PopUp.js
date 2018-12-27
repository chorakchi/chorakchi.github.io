import React from "react"
import PropTypes from 'prop-types';
import {Container, Popup } from "./Styled";

class PopUp extends React.Component {
    state={
        show: this.props.show,
        showBg: this.props.show
    }

    componentWillReceiveProps(nextProp){
        this.setState({...nextProp})
        if (this.state.showBg) {
      setTimeout(() => {
        this.setState({ showBg: nextProp.show })
      }, 300)
    } else {
      this.setState({ showBg: nextProp.show })
    }
    }

    render(){
        return(
            <Container show={this.state.show} showBg= {this.state.showBg}


            className = {this.props.className}
            >
                <Popup show={this.state.show} height = {this.props.height} width={this.props.width}>
                    {this.props.children}
                </Popup>
            </Container>
        )
    }
}

PopUp.PropTypes={
  onCloseMe: PropTypes.function
}
PopUp.default={
  onCloseMe: ()=>{}
}

export {PopUp}