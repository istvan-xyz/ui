import clsx from 'clsx';
import { ReactNode } from 'react';

const Table = ({
    header,
    body,
}: {
    header: ReactNode[];
    body: ReactNode[][];
}) => (
    <div
        className="Table"
        style={
            { '--ui-table-column-count': header.length } as React.CSSProperties
        }
    >
        {header.map((cell, index) => (
            <div
                key={index}
                className={clsx('TableHeaderCell', {
                    TableHeaderCellFirst: !index,
                    TableHeaderCellLast: index === header.length - 1,
                })}
            >
                {cell}
            </div>
        ))}
        {body.map((row, index) =>
            row.map((column, columnIndex) => (
                <div
                    key={`${index}${columnIndex}`}
                    className={clsx('TableCell', {
                        TableCellBottomRight:
                            index === body.length - 1 && columnIndex === 0,
                        TableCellBottomLeft:
                            index === body.length - 1 &&
                            columnIndex === header.length - 1,
                    })}
                >
                    {column}
                </div>
            ))
        )}
    </div>
);

export default Table;
