import { memo, ReactNode } from 'react';

const FormLayout = ({ children }: { children: ReactNode }) => {
    return <div className="FormLayout">{children}</div>;
};

export default memo(FormLayout);
