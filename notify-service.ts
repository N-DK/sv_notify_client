import { eventFeature, keywords } from 'notify-services';

const SERVER_URL = 'https://a164-14-186-233-35.ngrok-free.app';

const main = async () => {
    try {
        await eventFeature.sendNotifyPromotion(SERVER_URL, {
            user_name: 'John Doe',
            heading: 'New Promotion',
            content: 'Check out this exciting offer just for you!',
            call_to_action: 'Click here',
            company_name: 'Company',
        });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
