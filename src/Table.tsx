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
            {header.map((cell, index) => (
                <div key={index} className="TableHeaderCell">
                    {cell}
                </div>
            ))}
        </div>
        {body.map((row, index) => (
            <div key={index} className="TableRow">
                {row.map(column => (
                    <div className="TableCell">{column}</div>
                ))}
            </div>
        ))}
    </div>
);

export default Table;
