# UI

Core UI components

```sh
npm install bootstrap
```

In the entry point import Bootstrap.

```ts
import 'bootstrap/dist/css/bootstrap.css';
```

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
