import React from 'react';
import { HomePageProps } from './HomePage.interface';
import { Box, Button, Typography, Logo, Navigator, Footer, InfoCard } from 'components';
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
                    <Logo  w={20}/>
                </Box>
                <Navigator
                    size="small"
                    withShadow
                    items={[
                        { label: "Home", value: "/" },
                        { label: "Portfolio", value: "/portfolio" },
                        { label: "Blog", value: "/blog" }
                    ]
                    } />
            </Box>
            <Box mb={20} flex={1} md={{ padding: "0px 80px" }} xs={{ padding: "0px 10%" }} fd="column" d="flex" gap={8} sx={{ justifyContent: "end" }} >
                <Typography weight="thin" variant='h2' w="100%" md={{width:"80%"}}>Innovative JavaScript enthusiast crafting immersive, user-centered web experiences</Typography>
                <Typography variant='h4' w="100%" md={{width:"60%"}}>Driven by a love for pushing boundaries in web development, I thrive on creating memorable online journeys that fuse innovation and user delight</Typography>
                <Typography variant='body2' w="100%" md={{width:"40%"}}>Exploring the ever-shifting landscape of web development, I find joy in sculpting digital adventures that marry creativity and seamless functionality</Typography>
                <Button>Get in touch</Button>
            </Box>
            <InfoCard d='none' footer={<a href='https:\\google.com'> Feel free to take a look!</a>}>
                Curious about my coding style and how I structure and test code? Check out this site's code and comments for a glimpse into my approach.
            
            </InfoCard>
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