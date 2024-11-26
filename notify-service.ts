import eventFeature from './src/features/event.feature';

const SERVER_URL = 'http://localhost:3003';

const main = async () => {
    try {
        // for (let i = 0; i < 100; i++) {
        //     setTimeout(async () => {
        //         await eventFeature.sendNotifyEvent(SERVER_URL, {
        //             user_id: 1,
        //             user_name: 'John Doe',
        //             event_name: 'New Event',
        //             time: new Date().toISOString(),
        //             company_name: 'Company Name',
        //             location_name: 'Location Name',
        //         });
        //     });
        // }
        // const response = await eventFeature.sendNotifyEvent(SERVER_URL, {
        //     user_name: 'Đăng Khoa',
        //     event_name: 'Xin chào',
        //     time: new Date().toISOString(),
        //     company_name: 'NDK Entertainment',
        //     location_name: 'Quận 1, TP.HCM',
        //     user_id: 17,
        // });
        // console.log(response?.data);
        // // eventFeature.getNotification(1, SERVER_URL, { limit: 15, offset: 0 });
        // eventFeature.sendNotificationByDeviceId(SERVER_URL, '1', {
        //     keyword: '1_1_1',
        //     replaces: {
        //         event_name: 'New Event',
        //         time: new Date().toISOString(),
        //         company_name: 'Company Name',
        //         location_name: 'Location Name',
        //     },
        // });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
