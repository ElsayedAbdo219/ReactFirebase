import { useEffect } from 'react';
import echo from './echo.tsx';

export default function Chat() {

    useEffect(() => {
        const userId = 16;

        const channel = echo.private(`message.${userId}`);
        channel.listen('.message.sent', (e) => {
            console.log(' Message:', e.message);
        });

        return () => {
            echo.leave(`message.${userId}`);
        };
    }, []);

    return (
        <div>
            <h1>Chat Page</h1>
        </div>
    );
}