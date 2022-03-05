import { createPortal } from 'react-dom';
import { memo, ReactNode } from 'react';

const Modal = ({
    children,
    title,
    footer,
}: {
    children: ReactNode;
    title?: ReactNode;
    footer?: ReactNode;
}) => {
    return createPortal(
        <div className="Modal" tabIndex={-1} role="dialog">
            <div className="ModalDialog" role="document">
                <div className="ModalContent">
                    {title && (
                        <div className="ModalHeader">
                            <h5 className="ModalTitle">{title}</h5>
                        </div>
                    )}
                    <div className="ModalBody">{children}</div>
                    {footer && <div className="ModalFooter">{footer}</div>}
                </div>
            </div>
        </div>,
        document.getElementById('modals')!
    );
};

export default memo(Modal);
