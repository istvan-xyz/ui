# UI

Core UI components

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
