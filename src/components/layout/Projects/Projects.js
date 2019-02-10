import React from 'react'
import {
    Countiner,
    MainBlock,
    Sidebar,
    BlockContent,
    TitleSidebar,
    ListItem,
    Divider,
    Title,
    Content,
    CloseBTN,
    IconBLock,
    Description,
    CountinerContent
} from './Styled'

import {PopUp, Icon } from "./../../common"
import picture from './../../../asset/image/hamburg-main.jpg'

import listOfProject from "./listOfProjects.json"
class Projects extends React.Component {
    state={
        show: true
    }
    render() {
        return <div>
            <PopUp show={this.state.show} width="95%" height= "85%" >
                <MainBlock>
                    <Sidebar>
                        <TitleSidebar>
                            PROJECTS
                         </TitleSidebar>

                         <ListItem>Open Source</ListItem>
                         <ListItem>Companies</ListItem>
                         <Divider/>
                         <ListItem>CONTACT</ListItem>
                    </Sidebar>
                    <BlockContent>
                    <TitleSidebar color="rgba(0,0,0,0.3)" size= "big">
                    OPEN SOURCE PROJECTS
                         </TitleSidebar>
                         <CountinerContent>
                         {listOfProject.map(item =>
                         <Content color={item.color.secondary} onClick={()=> this.props.onChangeRoute(item.link)}>
                         <IconBLock color={item.color.secondary}>
                         <Icon iconId={item.iconId} color={item.color.premium} width="32px"/>
                         </IconBLock>
                         <Title color={item.color.secondary}>{item.title}</Title>
                             <Description>{item.description}</Description>
                         </Content>
                         )}
                                 </CountinerContent>
                         </BlockContent>
                </MainBlock>
                <CloseBTN onClick={()=>{
                    this.setState({show: false})
                    setTimeout(() => {
                        this.props.onChangeRoute("/home", {parentFilter: false})
                    }, 500);
                }}><Icon iconId="close" size="XL" color="#000"/></CloseBTN>
            </PopUp>
        </div>
    }
}
export { Projects }