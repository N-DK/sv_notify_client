import systemFeature from './src/features/system.feature';
import fs from 'fs';
const SERVER_URL = 'http://localhost:3003';

const main = async () => {
    try {
        const response = await systemFeature.sendNotifySystemMaintenance(
            SERVER_URL,
            {
                time: '30 phút',
                date: '3/12/2024',
                start_time: '23h30',
                end_time: '23h59',
            },
        );
        // const response = await systemFeature.sendNotification(
        //     {
        //         keyword: '4_1_1',
        //         replaces: {
        //             start_time: '23h30',
        //             end_time: '23h59',
        //             time: '30 phút',
        //             date: '3/12/2024',
        //         },
        //         user_id: [6521],
        //     },
        //     SERVER_URL,
        // );
        console.log(response.data, response?.data?.errors);
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
