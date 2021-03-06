import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const Spinner = (props: Partial<Pick<FontAwesomeIconProps, 'color'>>) => (
    <FontAwesomeIcon spin icon={faSpinner} size="3x" {...props} />
);

export default memo(Spinner);
