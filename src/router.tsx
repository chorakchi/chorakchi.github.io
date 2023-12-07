import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Box, HomePage, Typography, PortfolioPage, Logo, Divider } from 'components';


interface RenderRouterProps {
    Component: React.ComponentType<any>;
}

const RenderRouter: React.FC<RenderRouterProps> = ({ Component }) => {
    const DynamicComponent = Component;
    return <DynamicComponent key={Math.random()} className="fade-in" />;
};

const NotFoundPage :React.FC = (props) => <Box  fd="column" d="flex" w={"100%"} flex={1} h={"100%"} sx={{ overflow: "auto" }} style={{ backgroundImage: 'url("bg-image.png")', backgroundRepeat: "no-repeat" }}
>
    <Box m={20} {...props}>
        
        <Typography variant="h1" color="gray1" weight='thin'>
            Not found "404"
        </Typography>
        <Typography  color="gray1" mt={20} variant="h5"  >
        The page you requested might have been removed, renamed, or doesn't exist. <br/>
            </Typography>
            <Divider mt={4} color='gray1'/>
        <Typography  color="gray6" mt={8} variant="caption"  >
        <br/>
Here are a few things you can try:<br/>
- Double-check the URL for any typos.<br/>
- Return to the previous page using your browser's back button.<br/>
- Go to the homepage and navigate from there.<br/>
<br/>
<Divider mt={4} color='gray1'/>
<Typography  color="gray7" mt={20} variant="caption"   >
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
    }


]);

