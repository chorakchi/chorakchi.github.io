The Typography component is a flexible text element for your React applications, designed to support various text styles and weights, matching the typographic hierarchy of your design system.

## Features

- **Variants**: Supports headings from `h1` to `h6`, body text, and captions.
- **Font Weight**: From thin (`100`) to black (`900`), including a bold option.
- **Customizable**: Accepts all standard HTML attributes for text elements.
- **Responsive**: Adapts to the surrounding layout for text scaling and formatting.

## Installation

To integrate the Typography component into your project, begin by importing it:

```javascript
import { Typography } from 'components';
```

## Usage

Here is a basic example of the Typography component in use:

```javascript
<Typography
  variant="h1"
  weight="bold"
>
  Hello, World!
</Typography>
```

### Props

The following properties can be set on the Typography component:

- `variant`: Determines the typographic style (e.g., `h1`, `h2`, `body1`, `caption`).
- `backgroundColor`: Sets the background color of the text element (optional).
- `bold`: If `true`, the text will be bold (overrides `weight`).
- `weight`: Specifies the weight of the font, ranging from `thin` to `black`.

## Custom Styling

The Typography component can be styled using `styled-components`. Here's an example of extending styles:

```javascript
const CustomStyledTypography = styled(Typography)`
  // Your additional styles here
`;
```

## Accessibility

When using the Typography component, consider semantic HTML structure and the accessibility of font sizes and weights to ensure readability and usability for all users.

