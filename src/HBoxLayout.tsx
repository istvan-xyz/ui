import { memo, ReactNode } from 'react';

const HBoxLayout = ({ children }: { children: ReactNode }) => {
    return <div className="HBoxLayout">{children}</div>;
};

export default memo(HBoxLayout);
