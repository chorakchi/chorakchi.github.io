import React from 'react'
import {
    MainBlock,
    Sidebar,
    BlockContent,
    TitleSidebar,
    ListItem,
    Divider,
    CloseBTN
} from './Styled'

import { PopUp, Icon } from "./../../common"
import Skils from './Skils';
import Contact from './Contact';
import Experiences from './Experiences';
import Education from './Education';
class Portfolio extends React.Component {
    state = {
        show: true
    }
    render() {
        return <div>
            <PopUp show={this.state.show} width="95%" height="90%" >
                <MainBlock>
                    <Sidebar>
                        <TitleSidebar>
                            PORTFOLIO
                         </TitleSidebar>
                        <ListItem>SKILS</ListItem>
                        <ListItem>Projects</ListItem>
                        <ListItem>EXPERIENCES</ListItem>
                        <ListItem>EDUCATION</ListItem>
                        <Divider />
                        <ListItem>CONTACT</ListItem>
                    </Sidebar>
                    <BlockContent>
                        <Skils />
                        <Experiences />
                        <Education />
                        <Contact />
                    </BlockContent>
                </MainBlock>
                <CloseBTN onClick={() => {
                    this.setState({ show: false })
                    setTimeout(() => {
                        this.props.onChangeRoute("/home", { parentFilter: false })
                    }, 500);
                }}><Icon iconId="close" size="L" color="#000" /></CloseBTN>
            </PopUp>
        </div>
    }
}
export { Portfolio }