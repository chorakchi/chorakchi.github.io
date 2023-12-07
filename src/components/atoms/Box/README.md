## Box as fundamental element

The Box component serves as a wrapper component for most of the CSS utility needs as custom system properties.

CSS utilities for rapidly laying out custom designs.

it has props sa shortcut for defining custom style that has access to the theme.

props allows you to specify any other CSS rules you may need. Here's an example of how you can use it:

```jsx
<Box
    as="span"
    sx= {{ padding: '30px' }}
    xs={{
        margin:2;
        background: 'theme.palette.primaryGreen',
    }}
    xs= {{ background: 'theme.palette.primaryBlue' }}
    md= {{ background: 'theme.palette.gray5' }}
>
    Box
</Box>
```
