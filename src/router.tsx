import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Box, HomePage, Typography, PortfolioPage, Logo, Divider, BlogListPage } from 'components';
import myImage from './404.gif';
import bgImage from './bg-image.png';

interface RenderRouterProps {
    Component: React.ComponentType<any>;
}

const RenderRouter: React.FC<RenderRouterProps> = ({ Component }) => {
    const DynamicComponent = Component;
    return <DynamicComponent key={Math.random()} className="fade-in" />;
};

const NotFoundPage: React.FC = (props) => <Box fd="column" d="flex" w={"100%"} flex={1} h={"100%"} style={{background: "black"}}
>
    <Box m={20} {...props}>
        <img src={myImage}  alt="My Image" width={500} style={{
            filter: "invert(1)",
            marginLeft: "-100px",
            marginTop: "-60px",
        }} />
         <img src={bgImage} alt="My Image" width={"100%"} style={{
            position: "absolute",
            top: '0px',
            left: '0px',
            opacity: 0.2
         
        }} />


        <Typography color="gray5"  variant="h5"  >
            The page you requested might have been removed, renamed, or doesn't exist. <br />
        </Typography>
        <Divider mt={4} color='gray6' />
        <Typography color="gray6" mt={8} variant="caption"  >
            <br />
            Here are a few things you can try:<br />
            - Double-check the URL for any typos.<br />
            - Return to the previous page using your browser's back button.<br />
            - Go to the homepage and navigate from there.<br />
            <br />

            <Divider mt={4} color='gray6' />
            <Typography color="gray7" mt={20} variant="caption"   >
                If you believe this is an issue, please contact me.
            </Typography>
        </Typography>
    </Box>
</Box >

export const router = createBrowserRouter([
    {
        path: '',
        element:
            <RenderRouter Component={HomePage} />
        ,
        errorElement: <RenderRouter Component={NotFoundPage} />


    },
    {
        path: '/portfolio',
        element: <RenderRouter Component={PortfolioPage} />
    },
    {
        path: '/blog',
        element: <RenderRouter Component={BlogListPage} />
    }


]);

