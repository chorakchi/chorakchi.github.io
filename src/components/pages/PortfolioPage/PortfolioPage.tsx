import React from 'react';
import { PortfolioPageProps } from './PortfolioPage.interface';
import { Box, Button, Typography, Logo, Navigator, Footer } from 'components';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
    style,
    children,
    ...props }) => {
    return (
        <Box fd="column" d="flex" w={"100%"} flex={1} h={"100%"} sx={{ overflow: "auto" }}
            style={{ ...style, backgroundImage: 'url("bg-image.png")', backgroundRepeat: "no-repeat" }}
            // bgColor="primaryGreen"
            {...props}
        >
            <Box p={20} d='flex' lg={{
                position: 'sticky',
                top: "1px"
            }}
            md={{
                position: 'relative',
                top: "unset"
            }}
            >
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
            <Box mb={28} flex={1} md={{ padding: "0px 20%" }} xs={{ padding: "0px 10%" }} fd="column" d="flex" sx={{ justifyContent: "center" }} >
                <Typography variant='h5' >FRONT-END DEVELOPER</Typography>
                <Typography weight='thin' variant='h1' mb="-20px">MOHAMMAD</Typography>
                <Typography variant='h1'>CHORAKCHI</Typography>
                <Typography spaceY={4}>An enthusiastic JavaScript wizard, sculpting adaptable web applications with finesse, while specializing in crafting expansive, seamless single-page marvels that resonate 'Wow!' through innovative UI technology experimentation.</Typography>
                <Button mt={4}>Download CV</Button>
                <Box d='flex' fd='row' gap={2} mt={20} >
                    <Box d='flex' fd='column' gap={2} w="50%">
                        <Typography variant='h2' weight='bold' mt={16} mb={4}>skills</Typography>
                        <Typography variant='h5' weight='bold'>React, Redux ★★★★☆</Typography>
                        <Typography variant='h5' weight='bold'>TypeScript ★★★★☆</Typography>
                        <Typography variant='h5' weight='bold'>React Native ★★★☆☆</Typography>
                        <Typography variant='h5' weight='bold'>nodJS, BE/DB ★★☆☆☆</Typography>
                    </Box>
                    <Box d='flex' fd='column' gap={2}>
                        <Typography variant='h2' weight='bold' mt={16} mb={4}>education</Typography>
                        <Typography variant='h5' >2009 - 2012</Typography>
                        <Typography variant='h5' weight='bold'>Software Engineering</Typography>
                        <Typography variant='h5'>Bachelor</Typography>
                        <Typography variant='h5'>University Azad (IAU)</Typography>
                    </Box>
                </Box>
                <Box d='flex' fd='row' gap={2} >
                    <Box d='flex' fd='column' gap={2} w="50%">
                        <Typography variant='h2' weight='bold' mt={16} mb={4}>activities   </Typography>
                        <Typography variant='h5' >Computer games, Photography</Typography>
                        <Typography variant='h5' >Art/ drawing/ Calligraphy</Typography>

                    </Box>
                    <Box d='flex' fd='column' gap={2}>
                        <Typography variant='h2' weight='bold' mt={16} mb={4}>contact</Typography>
                        <Typography variant='h5' >+49 176 8845 0038</Typography>
                        <Typography variant='h5'>m.chorakchi@gmail.com</Typography>
                    </Box>
                </Box>
                <Box d='flex' fd='column' gap={2} mt={20}>
                    <Typography variant='h2' mt={16} mb={8} weight='bold'>experience</Typography>
                    <Typography variant='h5'  >Jan 2021- Current</Typography>
                    <Typography variant='h5' weight='bold'  >Javascript & front-end development</Typography>
                    <Typography variant='h5' mb={2}>Full-time - Berlin . TIER Mobility SE</Typography>
                    <Typography variant='h5'>Developed and maintained internal tools for fleet and workflow management. <br />
                        Refactored the website using Jamstack technology, specifically "tier.app." <br />
                        Created and presented design drafts and rapid UI prototypes using React. <br />
                        Implemented micro frontend and module federation to scale projects efficiently.<br />
                        Spearheaded the development of a design system for internal tools, employing atomic design components and an independent UI library.<br />
                        Practiced test-driven development and maintained meticulous documentation for the codebase.</Typography>
                </Box>
                <Box d='flex' fd='column' gap={2} mt={16}>
                    <Typography variant='h5'  >Dec 2020- Dec 2021</Typography>
                    <Typography variant='h5' weight='bold' >UI/ front-end developer</Typography>
                    <Typography variant='h5' mb={2} >Full-time - Berlin . All About Cake GmbH</Typography>
                    <Typography variant='h5'>UI/Web Development for backend.de production using React/Next.js<br />
                        Responsibilities:<br />
                        Led code refactor utilizing leading-edge technologies<br />
                        Developed features using React, Next.js, SASS, and TypeScript<br />
                        Implemented an Atomic component-driven, modular architecture<br />
                        Key Contributions:<br />
                        Collaborated within a scrum-agile team, delivering exceptional results <br />
                        Fostered a cooperative culture while working alongside talented developers</Typography>
                </Box>
                <Box d='flex' fd='column' gap={2} mt={16}>
                    <Typography variant='h5'  >Oct 2019- Dec 2020</Typography>
                    <Typography variant='h5' weight='bold' >React & ReactNative developer</Typography>
                    <Typography variant='h5' mb={2}>Full-time - Berlin . Akelius Residential Property AB</Typography>
                    <Typography variant='h5'>Responsibilities:<br />
                        Implemented cutting-edge features for a smart building app<br />
                        Utilized React and React Native (iOS, Android) with TypeScript<br />
                        Ensured high code quality through thorough test development using Jest<br />
                        Key Contributions:<br />
                        Thrived in a collaborative, agile environment, utilizing Atlassian stack, git-flow, and CI/CD for efficient project management
                        Fostered strong cooperation among talented programmers</Typography>
                </Box>
                <Box d='flex' fd='column' gap={2} mt={16}>
                    <Typography variant='h5'  >Dec 2016- Aug 2019</Typography>
                    <Typography variant='h5' weight='bold' >Front End Developer</Typography>
                    <Typography variant='h5' mb={2}>Full-time - Tehran . Mofid Securities & Mofid Entekhab</Typography>
                    <Typography variant='h5'>Responsibilities:<br />
                        Resolved issues and contributed to bug-free software by implementing best practices in code refactoring and development.<br />
                        Developed applications using JS, ES6, React, Redux, Rx.js, and GraphQL.<br />
                        Ensured code quality and reliability through comprehensive test development, employing BDD and TDD with Jest.<br />
                        Optimized CSS, HTML, and JavaScript for enhanced performance.<br />
                        Integrated and customized third-party libraries like highChart, kendo-UI, d3js, and Material Design to enrich application functionalities.<br />
                        Collaborated effectively within a scrum-agile team, leveraging Atlassian stack, git-flow, and CI/CD environment for seamless project delivery.</Typography>
                </Box>
                <Box d='flex' fd='column' gap={2} mt={16}>
                    <Typography variant='h5'  >Aug 2018- Feb 2019</Typography>
                    <Typography variant='h5' weight='bold' >React developer</Typography>
                    <Typography variant='h5' mb={2}>Remote & freelancer - Berlin . Convose Ltd</Typography>
                    <Typography variant='h5'>Convose - Facilitated 1:1, real-time conversations for language learning enthusiasts.<br />
                        Responsibilities:<br />
                        Collaborated remotely as a freelancer, implementing modular React components for the client's web application.<br />
                        Refined, debugged, and developed new features to enhance the application's functionality and user experience.</Typography>
                </Box>
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