import React from 'react';
import { HomePageProps } from './HomePage.interface';
import { Box, Button, Typography, Logo, Navigator, Footer } from 'components';
import { } from 'components/atoms/Logo';

export const HomePage: React.FC<HomePageProps> = ({
    style,
    children,
    ...props }) => {
    return (
        <Box fd="column" d="flex" w={"100%"} flex={1} h={"100%"} sx={{ overflow: "auto" }} 
        // style={{ ...style, backgroundImage: 'url("bg-image.png")', backgroundRepeat: "no-repeat" }}
            bgColor="primaryGreen"
            {...props}
            
        >
            <Box p={20} d='flex'>
                <Box flex={1} d='flex'>
                    <Logo />
                </Box>
                <Navigator
                    size="small"
                    withShadow
                    items={[
                        { label: "Home", value: "/" },
                        { label: "Portfolio", value: "/portfolio" }
                    ]
                    } />
            </Box>
            <Box mb={28} flex={1} md={{ padding: "0px 20%" }} xs={{ padding: "0px 10%" }} fd="column" d="flex" gap={8} sx={{ justifyContent: "center" }} >
                <Typography weight="thin" variant='h2'>Innovative JavaScript enthusiast crafting immersive, user-centered web experiences</Typography>
                <Typography variant='h2'>Driven by a love for pushing boundaries in web development, I thrive on creating memorable online journeys that fuse innovation and user delight</Typography>
                <Typography>Exploring the ever-shifting landscape of web development, I find joy in sculpting digital adventures that marry creativity and seamless functionality</Typography>
                <Button>Get in touch</Button>
            </Box>
            <Footer
                variant='text'
                size='small'
                items={[
                    { label: "linkedin", value: "https://www.linkedin.com/in/chorakchi/" },
                    { label: "xing", value: "https://www.xing.com/profile/Mohammad_Chorakchi" },
                    { label: "github", value: "https://github.com/chorakchi" }
                ]
                }
            />
        </Box>
    );
};