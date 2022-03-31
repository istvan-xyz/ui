import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const ErrorIcon = memo(
    (props: Partial<Pick<FontAwesomeIconProps, 'color'>>) => (
        <FontAwesomeIcon icon={faTriangleExclamation} {...props} />
    )
);

const ErrorBox = ({ error }: { error: string | Error }) => {
    return (
        <div className="ErrorBox">
            <div className="ErrorBoxIcon">
                <ErrorIcon />
            </div>
            <div className="ErrorBoxMessage">{error.toString()}</div>
        </div>
    );
};

export default memo(ErrorBox);
