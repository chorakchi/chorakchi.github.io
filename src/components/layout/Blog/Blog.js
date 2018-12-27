import React from 'react'
import {
    Countiner,
    Background,
    TopLogoCountiner,
    TopLogo,
    BarcodeCountiner,
    Barcode,
    Path1,
    Path2,
    MainLogo,
    Header,
    ItemHeader,
    ContentCountiner,
    TitlePost,
    ContentPost
} from './Styled';
import {Typography } from "./../../common";
import picture from './../../../asset/image/hamburg-main.jpg';
import logo from './../../../asset/image/logo.svg';
import barcode from './../../../asset/image/barcode.svg';
import path1 from './../../../asset/image/path-1.svg';
import path2 from './../../../asset/image/path-2.svg';
import mainLogo from './../../../asset/image/block-logo.svg';

const data = {
    titlePost: "Mastering React Functional Components with Recompose",
    contentPost : 'The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).The withStateHandlers higher-order component is very simple - it takes the initial state, and an object containing the state handlers. Each of the state handlers will return new state when called.Step 2. Extract form validation logic.Now it’s time to extract the form validation logic. We’ll be using withProps higher-order component from recompose. It allows adding any arbitrary props to an existing component.We’ll use withProps to add the emailError, passwordError, and confirmPasswordError props, which will contain errors if any of our form fields are invalid.One should also note that the validation logic for every one of the form fields is kept in a separate file (for better separation of concerns).'
}
class Blog extends React.Component {
    render() {
        return <div>
            <Countiner>
            <TopLogoCountiner>
                <TopLogo src={logo}/>
            </TopLogoCountiner>
            <ContentCountiner>
            <Header>
                <ItemHeader><Typography variant="h5" >Home</Typography></ItemHeader>
                <ItemHeader onClick={()=> this.props.onChangeRoute("/home/Portfolio", {parentFilter: true})}><Typography variant="h5">Portfolio</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Blog</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Github</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Contact</Typography></ItemHeader>
            </Header>
            <TitlePost><Typography variant= "h4" style={{fontWeight: "600"}}>{data.titlePost}</Typography></TitlePost>

            <ContentPost><Typography variant="body">{data.contentPost}</Typography></ContentPost>

            </ContentCountiner>
            <Path1 src={path1}/>
            <Path2 src={path2}/>
            <MainLogo src={mainLogo}/>
            </Countiner>
        </div>
    }
}
export { Blog }