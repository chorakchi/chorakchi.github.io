The Button component is a customizable UI element that provides users with the ability to trigger an action. It is styled using styled-components for a smooth, modern look and can be customized to fit the form and function of your application.

## Features

- **Variants**: Contained, Outlined, Text.
- **Sizes**: Small, Medium, Large.
- **Customizable**: Accepts all standard button HTML attributes for further customization.
- **Responsive**: Styled to adapt to varying display sizes.

## Installation

To use the Button component in your project, make sure to import it along with its required props:

```javascript
import { Button } from 'components';
```

## Usage

Here's an example of how to use the Button component:

```javascript
<Button
  variant="contained"
  size="medium"
  onClick={() => {
    console.log('Button clicked!');
  }}
>
  Click me
</Button>
```

### Props

This table lists the properties that you can set on the `Button` component:

| Name             | Type     | Description                                               | Default    |
|------------------|----------|-----------------------------------------------------------|------------|
| `variant`        | string   | The button variant to use: `'contained'`, `'outlined'`, `'text'`. | `'contained'` |
| `size`           | string   | The size of the button: `'small'`, `'medium'`, `'large'`. | `'medium'` |
| `label`          | string   | The text to display on the button.                        | `null`     |
| `backgroundColor`| string   | The background color of the button (for `variant="contained"`). | `null` |
| ...`props`       | any      | Any other props will be passed down to the button element.  | n/a        |

## Styling

The `Button` component is styled using `styled-components`. You can override the style for different states and variants as follows:


```javascript
const MyStyledButton = styled(Button)`
  // Your custom styles here
`;
```

## Accessibility

Follow best practices for accessibility, ensuring that all interactive elements are reachable and usable via keyboard inputs and that appropriate aria attributes are used.


This README sample includes a title, description, features, installation instructions, example usage, a table of properties, instructions for styling and extending the component, accessibility considerations, and contribution guidelines. It is formatted in Markdown for easy integration with platforms such as GitHub, Bitbucket, or GitLab which render such documentation automatically.