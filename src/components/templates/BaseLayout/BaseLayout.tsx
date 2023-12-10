import React from 'react';
import { BaseLayoutProps } from './BaseLayout.interface';
import { Box, Button, Typography, Logo, Navigator, Footer } from 'components';

export const BaseLayout: React.FC<BaseLayoutProps> = ({
    style,
    children,
    ...props }) => {
    return (
        <Box fd="column" d="flex" w={"100%"} flex={1} h={"100%"} sx={{ overflow: "auto" }}
            style={{ ...style, backgroundImage: 'url("bg-image.png")', backgroundRepeat: "no-repeat" }}
            bgColor="secondaryBackgroundGreen"
            {...props}
        >
            <Box p={20} d='flex' fd='column' lg={{
                position: 'sticky',
                top: "1px"
            }}
            md={{ flexDirection: 'row',
                    position: 'relative',
                    top: "unset"
                }}
            >
                <Box flex={1} d='flex'>
                    <Logo  w={16} mb={3}/>
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
            <Box mb={28} flex={1} md={{ padding: "0px 10%" }} xs={{ padding: "0px 10%" }} fd="column" d="flex" sx={{ justifyContent: "center" }} >
               {children}
                <Box mb={40} />
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