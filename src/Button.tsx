import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface ButtonProps {
    /**
     * Button label
     */
    children: ReactNode;
    /**
     * Action to perform when button is pressed
     */
    onPress?: () => void;
    /**
     * Primary button style
     */
    primary?: true;
    /**
     * Secondary button style
     */
    secondary?: true;
    /**
     * Destructive button style
     */
    danger?: true;
    /**
     * Disabled button state
     */
    disabled?: boolean;
}

/**
 * Simple button with onPress handler.
 */
const Button = ({
    children,
    onPress,
    primary,
    secondary,
    danger,
    disabled,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={clsx('Button', {
                ButtonPrimary: primary,
                ButtonSecondary: secondary,
                ButtonDanger: danger,
            })}
            onClick={onPress}
        >
            {children}
        </button>
    );
};

export default memo(Button);
