import clsx from 'clsx';
import { memo } from 'react';
import { ButtonProps } from './Button';

/**
 * Submit button to be used with forms.
 */
const SubmitButton = ({
    children,
    primary,
    secondary,
    danger,
    disabled,
}: Omit<ButtonProps, 'onPress'>) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={clsx('Button', {
                ButtonPrimary: primary,
                ButtonSecondary: secondary,
                ButtonDanger: danger,
            })}
        >
            {children}
        </button>
    );
};

export default memo(SubmitButton);
