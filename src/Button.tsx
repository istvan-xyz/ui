import clsx from 'clsx';
import type { ReactNode } from 'react';

const Button = ({
    children,
    onPress,
    primary,
}: {
    children: ReactNode;
    onPress: () => void;
    primary?: true;
}) => {
    return (
        <button
            className={clsx('btn', { 'btn-primary': primary })}
            onClick={onPress}
        >
            {children}
        </button>
    );
};

export default Button;
