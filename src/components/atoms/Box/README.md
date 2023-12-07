The Box component serves as a versatile layout primitive for your React application, providing a way to apply a consistent design system to spacing, color, and layout properties across various breakpoints.

## Features

- **Responsive**: Customize styles based on breakpoints for extra small, small, medium, large, and extra large screens.
- **Extensible**: Can be wrapped around other components or used as a container.
- **Customizable**: Accepts a wide array of styling options such as margin, padding, width, height, flex properties, color, and much more.
- **Supports Theming**: Works with the `defaultTheme` out of the box, with easy overwriting of default values.

## Installation

Firstly, ensure that you import the `Box` component where needed:

```javascript
import { Box } from 'components';
```

## Usage

```javascript
<Box m={2} p={1} color="primary" bgColor="secondary">
  Your content goes here
</Box>
```

Or to add Box capabilities to another component:

```javascript
const EnhancedComponent = withBox(YourComponent);

// ...and then use it like this:
<EnhancedComponent m={2} p={1} />
```

### Props

This table summarizes the properties available to the `Box` component and their respective effects:

- `m, mt, mb, ml, mr`: Margin controls
- `mw`: Max width specifier
- `p`: Padding controls
- `h, w`: Height and width settings
- `gap`: Sets the gap between flex items
- `color`: Text color
- `bgColor`: Background color
- `flex`: Flex shorthand value
- `round`: Sets border-radius
- `sx, xs, sm, md, lg, xl`: Apply styles based on viewport sizes
- `as`: Changes the underlying element or component type

Additional styling properties such as `fade in`, `border display`, `visibility in print`, and more can be configured using the corresponding props.

## Custom Styling

Extend or override the styles with the usual pattern for `styled-components`. Given the power of the component, it's easy to create complex layouts with minimal syntax.

```javascript
const CustomBoxStyled = styled(Box)`
  // Your custom styles here
`;
```

## Accessibility

Ensure that any content within the `Box` is accessible, offers keyboard navigation control, and is semantically structured.
