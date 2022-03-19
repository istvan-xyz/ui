import { ReactNode } from 'react';

const Table = ({
    header,
    body,
}: {
    header: ReactNode[];
    body: ReactNode[][];
}) => (
    <div className="Table">
        <div className="TableRow">
            {header.map(cell => (
                <div className="TableHeaderCell">{cell}</div>
            ))}
        </div>
        {body.map(row => (
            <div className="TableRow">
                {row.map(column => (
                    <div className="TableCell">{column}</div>
                ))}
            </div>
        ))}
    </div>
);

export default Table;
