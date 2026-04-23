import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

Pusher.logToConsole = true; 

const token = "843|vtatGe0OOiZOhtYMacbrEAwj8Rb278KLUXJMG3IX4687f865"; // Replace with your actual token

const echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,

    authEndpoint: 'https://staging.anceega.com/broadcasting/auth',

    auth: {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    },
});

export default echo;