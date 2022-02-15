import clsx from 'clsx';
import type { ReactNode } from 'react';

const Button = ({
    children,
    onPress,
    primary,
    secondary,
    danger,
}: {
    children: ReactNode;
    onPress: () => void;
    primary?: true;
    secondary?: true;
    danger?: true;
}) => {
    return (
        <button
            className={clsx('btn', {
                'btn-primary': primary,
                'btn-secondary': secondary,
                'btn-danger': danger,
            })}
            onClick={onPress}
        >
            {children}
        </button>
    );
};

export default Button;
