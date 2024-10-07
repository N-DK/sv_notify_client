import { eventFeature, gpsFeature, ioFeature } from 'notify-services';

const SERVER_URL = 'http://localhost:3003';

const main = async () => {
    try {
        await ioFeature.sendNotifyVehicleOverheat(SERVER_URL, {
            temperature: '123',
            user_id: 113,
            vehicle_name: 'vehicle',
        });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
