import React from 'react';
import { BlogListPageProps } from './BlogListPage.interface';
import { Box, Typography, BaseLayout } from 'components';
import { blogList } from './BlogListPage.data';

export const BlogListPage: React.FC<BlogListPageProps> = ({
    style,
    children,
    ...props }) => {
    return (
        <BaseLayout>
            <Typography variant='h1'>Articles/ blog</Typography>
            <Typography spaceY={4} variant='h5'>Delve into a Collection of Insights, Observations, and Musings</Typography>
            <Typography spaceY={4} variant='body2' w={"80%"}>Step into my world where I capture my thoughts and observations in a casual and friendly manner. Join me as I explore various topics and experiences, sharing my investigations and musings for you to enjoy at your leisure</Typography>

            <Box d='flex' fd='column' gap={8} mt={20} >
                {blogList.map((i) =>
                    // @ts-ignore
                    <Box d='flex' fd='column' md={{ flexDirection: 'row' }} w={"100%"} as='a' href={i.link} target="_bank" bgColor='gray1' sx={{ overflow: "hidden", borderRadius: "22px" }} >
                        <Box d='flex' fd='column' m={4}>
                            <Typography variant='body1' weight='bold' mt={2} mb={4}>{i.title}</Typography>
                            <Typography variant='caption' >{i.briefContent}</Typography>

                        </Box>
                        <Box
                            sx={{
                                borderLeft: "1px solid lightgray",
                            }}
                            h="50%"
                            w="100%"
                            md={{
                                width: "100%",
                                height: "200px",
                            }}
                        >
                            <img
                                src={i.imageUrl}
                                alt={i.title} // Add alt text for accessibility
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </BaseLayout>

    );
};