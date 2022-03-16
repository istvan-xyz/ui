import clsx from 'clsx';

const TextBox = ({
    error,
    ...props
}: { error?: boolean } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) => (
    <input
        type="text"
        {...props}
        className={clsx('TextBox', { TextBoxError: error })}
    />
);

export default TextBox;
