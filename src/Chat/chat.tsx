import { useEffect } from 'react';
import echo from './echo.tsx';

export default function Chat() {
    //  div ///
    useEffect(() => {
        const userId = 16; // Replace with the actual user ID you want to listen for

        const channel = echo.private(`message.${userId}`);
        channel.listen('.message.sent', (e) => {
          // append  
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