const TextBox = (
    props: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
) => {
    return <input type="text" {...props} className="TextBox" />;
};

export default TextBox;
