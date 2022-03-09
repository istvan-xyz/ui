import { memo, useEffect, useState } from 'react';
import Button from './Button';
import ButtonRow from './ButtonRow';
import Modal from './Modal';

const mainScriptUrl = Array.from(document.getElementsByTagName('script')).find(
    item => !item.src.startsWith('chrome-extension://')
)?.src;

const UpdateNotifier = () => {
    const [isUpToDate, setIsUpToDate] = useState(true);
    useEffect(() => {
        const updateCheckInterval = setInterval(() => {
            (async () => {
                if (!mainScriptUrl) {
                    return;
                }
                const response = await fetch(mainScriptUrl);
                /* eslint-disable-next-line no-console */
                console.log(response.status);
                if (response.status === 404) {
                    clearTimeout(updateCheckInterval);
                    setIsUpToDate(false);
                }
            })().catch(error => {
                throw error;
            });
        }, 30_000);

        return () => {
            clearTimeout(updateCheckInterval);
        };
    });

    if (isUpToDate) {
        return null;
    }
    return (
        <Modal
            title="New version available"
            footer={
                <ButtonRow>
                    <Button
                        primary
                        onPress={() => {
                            /* eslint-disable-next-line no-restricted-globals */
                            location.reload();
                        }}
                    >
                        Reload
                    </Button>
                </ButtonRow>
            }
        >
            Please reload.
        </Modal>
    );
};

export default memo(UpdateNotifier);
