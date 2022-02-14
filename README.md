# UI

Core UI components

```sh
npm install bootstrap
```

This project loosely depends on bootstrap, however it can work perfectly well without it, that's why it's not listed in peer dependencies.

In the entry point import Bootstrap.

```ts
import 'bootstrap/dist/css/bootstrap.css';
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
