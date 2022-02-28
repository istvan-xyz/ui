# UI

Core UI components

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
