import React from 'react'
import PropTypes  from "prop-types"
import {
    Countiner,
    Header,
    Nav,
    LogoCountiner,
    ItemNav,
    NameHeader,
    LogoHeader,
    DescriptionHeader,
    BTNsHeader,
    Button,
    ContentCountiner,
    BlockContent,
    Title,
    Column,
    Row,
    SidebarStyled, 
    ItemStyled
} from './Styled';
import { Typography, Icon } from "./../../common";
import Markdown from "react-markdown"

class RepoDoc extends React.Component {
    render() {
        const {data } = this.props
        return (
            <Countiner>
                {
                data ? 
                <React.Fragment>
                    
                <Nav bgColor =  {data.colors.secondary}>
                    <ItemNav><Icon iconId={data.iconId} width="32px" color="#ffffff99" style={{ padding: '11px', width: '8px' }} /></ItemNav>
                    <ItemNav style={{ fontSize: '33px' }}>{data.name}</ItemNav>
                    <ItemNav flex={1}></ItemNav>
                    {data.navlink.map(item => <ItemNav
                        onCLick={() => { }}
                    >{item.label}</ItemNav>)}
                    <ItemNav version color={data.colors.premium}>v {data.version}</ItemNav>
                </Nav>

                    <Row>
                        <Column grid={7}>
                            <BlockContent>
                                <Title color={data.colors.secondary}>{data.contents[0].title}</Title>
                                <Markdown source={data.contents[0].text} escapeHtml={false} />
                            </BlockContent>
                        </Column>
                        <Column grid={5}>
                        <SidebarStyled color={data.colors.secondary}>
                    <div>
                    <ItemStyled color={data.colors.secondary}>Installation</ItemStyled>
                    <ItemStyled color={data.colors.secondary}>Getting Started</ItemStyled>
                    <ItemStyled color={data.colors.secondary}>Add React to a Website</ItemStyled>
                    <ItemStyled color={data.colors.secondary}>Create a New React App</ItemStyled>
                    <ItemStyled color={data.colors.secondary}>Hello World</ItemStyled>
                    <ItemStyled color={data.colors.secondary}>Components and Props</ItemStyled>
                    </div>
                </SidebarStyled >
                        </Column>
                    </Row>
   
                </React.Fragment>
: null    }

            </Countiner>
            )
    }
}

RepoDoc.propsTypes = {
    data: PropTypes.object
}
RepoDoc.defaultProps = {
    data: {}
} 

export { RepoDoc }