import { memo, ReactNode } from 'react';

const VBoxLayout = ({ children }: { children: ReactNode }) => {
    return <div className="VBoxLayout">{children}</div>;
};

export default memo(VBoxLayout);
