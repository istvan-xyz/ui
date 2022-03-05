const Select = (
    props: React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    >
) => {
    return <select {...props} className="Select" />;
};

export default Select;
