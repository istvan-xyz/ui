import { memo, ReactNode } from 'react';

const ButtonRow = ({ children }: { children: ReactNode }) => {
    return <div className="ButtonRow">{children}</div>;
};

export default memo(ButtonRow);
