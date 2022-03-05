# UI

This is a UI component library that meant to be a starting point for creating simple React applications with a descent styling.

The original concept was to just have a simple wrapper around Bootstrap, unfortunately Bootstrap has a lot of baggage and does not make extensive use of modern CSS features.

Features include:

-   lightweight
-   built with modern CSS features like flex-box and grids
-   support for dark mode
-   ability to customize via CSS and CSS variables
-   separate files per component, you only "pay" for the components you actually import

# Getting started

In the entry point import the default styles.

```ts
import '@istvan.xyz/ui/style.css';
```

Optionally import the page style which applies the style to the whole page:

```ts
import '@istvan.xyz/ui/page.css';
```

Add the following into the body tag after the React "root" element to support modals:

```html
<div id="modals"></div>
```

This is where all modals will be portal-ed.

```ts
import Button from '@istvan.xyz/ui/Button';

const MyComponent = () => {
    return (
        <Button
            onPress={() => {
                alert('click');
            }}
        >
            Click me
        </Button>
    );
};

export default MyComponent;
```

Add the following dependencies for icon support:

```sh
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
