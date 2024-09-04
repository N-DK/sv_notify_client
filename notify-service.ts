import notifyRemind from './src/features/remind.feature';

const SERVER_URL = 'http://localhost:3005';

const main = async () => {
    try {
        await notifyRemind.sendNotifyRemind(SERVER_URL, {
            name_remind: 'Change oil',
            vehicle_name: 'Honda Civic',
            user_id: 5,
        });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
