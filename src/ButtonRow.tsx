import { memo, ReactNode } from 'react';

const ButtonRow = memo(({ children }: { children: ReactNode }) => {
    return <div className="ButtonRow">{children}</div>;
});

export default ButtonRow;
