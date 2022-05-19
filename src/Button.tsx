import clsx from 'clsx';
import { ButtonHTMLAttributes, HTMLAttributes, memo, ReactNode } from 'react';

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
    type = 'button',
}: {
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
    /**
     * Type of button
     */
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
    return (
        <button
            disabled={disabled}
            className={clsx('Button', {
                ButtonPrimary: primary,
                ButtonSecondary: secondary,
                ButtonDanger: danger,
            })}
            onClick={onPress}
            type={type}
        >
            {children}
        </button>
    );
};

export default memo(Button);
