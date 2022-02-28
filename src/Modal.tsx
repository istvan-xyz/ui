import { createPortal } from 'react-dom';
import { memo, ReactNode } from 'react';

const Modal = memo(
    ({
        children,
        title,
        footer,
    }: {
        children: ReactNode;
        title?: ReactNode;
        footer?: ReactNode;
    }) => {
        return createPortal(
            <div
                className="modal"
                style={{ display: 'block' }}
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {title && (
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                            </div>
                        )}
                        <div className="modal-body">{children}</div>
                        {footer && <div className="modal-footer">{footer}</div>}
                    </div>
                </div>
            </div>,
            document.getElementById('modals')!
        );
    }
);

export default Modal;
