// import { Story, Meta } from "@storybook/react/types-6-0";
// import { Col, Row, Typography } from "components";
// import { palette } from "./palette";
// import { ThemeProvider } from 'styled-components'
// import { theme } from "const/theme";

// const figmaLink = 'https://www.figma.com/file/0q2AsMNVRe7PIdDYE7bxJP/colors?node-id=2%3A159&viewport=1012%2C136%2C0.8651200532913208'

// export default {
//   title: "Components/Theme",
//   parameters: {
//     docs: {
//       description: {
//         component: `Color Palette [(figma-link)](${figmaLink})`
//       }
//     },
//     backgrounds: {
//       default: "light",
//     },
//   },
// } as Meta;

// const Template: Story<any> = (args) =>
//   <ThemeProvider theme={theme.main}>

//       <Typography variant="headline_l"> Colors :</Typography>
//     <Row>
//       {Object.keys(palette).map(key =>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             padding: 16,
//             margin:10,
//             background: '#FFFFFF',
//             boxShadow: "0px -2px 8px rgba(169, 169, 169, 0.08), 0px 2px 4px rgba(169, 169, 169, 0.02), 0px 4px 8px rgba(169, 169, 169, 0.08), 0px 8px 16px rgba(169, 169, 169, 0.16)",
//             borderRadius: 112,
//             width: 304,
//             height: 112,
//           }}>
//           <div
//             style={{
//               width: 80,
//               height: 80,
//               left: 16,
//               top: 16,
//               background: palette[key],
//               borderRadius: 40,
//               boxShadow: "0px -2px 8px rgba(169, 169, 169, 0.08), 0px 2px 4px rgba(169, 169, 169, 0.02), 0px 4px 8px rgba(169, 169, 169, 0.08), 0px 8px 16px rgba(169, 169, 169, 0.16)",
            
//             }}
//           >
//           </div>
//           <div style={{paddingLeft:20}}>
//           <Typography variant="copy_text_bold"> {key}</Typography>
//           <Typography variant="copy_text"> {palette[key]}</Typography>
//           </div>
//         </div>
//       )}
//     </Row>
//   </ThemeProvider>


// export const palette_ = Template.bind({});
// palette_.args = {
// };

