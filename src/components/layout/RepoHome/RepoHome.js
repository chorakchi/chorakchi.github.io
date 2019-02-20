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
    Row
} from './Styled';
import { Typography, Icon } from "./../../common";
import Markdown from "react-markdown"

class RepoHome extends React.Component {
    render() {
        const {data } = this.props
        return (
            <Countiner>
                {
                data ? 
                <React.Fragment>
                <Nav>
                    <ItemNav><Icon iconId={data.iconId} width="32px" color="#ffffff99" style={{ padding: '11px', width: '8px' }} /></ItemNav>
                    <ItemNav style={{ fontSize: '33px' }}>{data.name}</ItemNav>
                    <ItemNav flex={1}></ItemNav>
                    {data.navlink.map(item => <ItemNav
                        onCLick={() => { }}
                    >{item.label}</ItemNav>)}
                    <ItemNav version color={data.colors.premium}>v {data.version}</ItemNav>
                </Nav>
                <Header color={data.colors.gradient}>
                    <LogoCountiner>
                        <LogoHeader>
                            <Icon width='120px' iconId={data.iconId} color={data.colors.premium} />
                        </LogoHeader >
                        <NameHeader color={data.colors.titleColor}>{data.name}</NameHeader>
                        <DescriptionHeader>
                            {data.description}
                        </DescriptionHeader>
                        <BTNsHeader>
                            <Button shadow bgColor={data.colors.premium} color={data.colors.secondary} width="230px" >GETSTARTED</Button>
                            <Button bgColor="#ffffff22" color="#ffffff" width="140px" >Demo</Button>
                        </BTNsHeader>
                    </LogoCountiner>
                </Header>
                <ContentCountiner>
                    <Row>
                        {data.contents.map(item =>
                        <Column>
                            <BlockContent>
                                <Title color={data.colors.secondary}>{item.title}</Title>
                                {/* <Text>{item.text}</Text> */}
                                <Markdown source={item.text} escapeHtml={false} />
                            </BlockContent>
                        </Column>
                            )}
                    </Row>
                </ContentCountiner>
                </React.Fragment>
: null    }

            </Countiner>
            )
    }
}

RepoHome.propsTypes = {
    data: PropTypes.object
}
RepoHome.defaultProps = {
    data: {}
} 

export { RepoHome }