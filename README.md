# UI

This is a UI component library that meant to be a starting point for creating simple React applications with a descent styling.

The original concept was to just have a simple wrapper around Bootstrap, unfortunately Bootstrap has a lot of baggage and does not make extensive use of modern CSS features.

# Getting started

In the entry point import the default styles.

```ts
import '@istvan.xyz/ui/style.css';
```

Optionally import the page style which applies the style to the whole page:

```ts
import '@istvan.xyz/ui/page.css';
```

Add the following into the body tag after the React "root" element:

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
