# NotifyService

NotifyService is a robust Node.js module designed to seamlessly manage notifications. Whether you need to track new notifications or send them to your servers, NotifyService has everything you need to get started quickly and efficiently.

## Installation

Install NotifyService via npm:

```bash
npm install notify-services
```

## Features

-   **eventFeature**: Easily send event-based notifications.
-   **gpsFeature**: Enable location-based notifications (details will be added in future updates).
-   ...
-   **keywords**: Use predefined constants to optimize the notification system for specific scenarios, such as notifying agents or suppliers.

## Usage

### Sending Promotional Notifications

Here’s an example of how to use the `eventFeature` to send a promotional notification:

Create a file named `notify-service.ts`:

```typescript
import { eventFeature, keywords } from 'notify-services';

const SERVER_URL = 'http://localhost:3005';

const main = async () => {
    try {
        await eventFeature.sendNotifyPromotion(SERVER_URL, {
            user_name: 'John Doe',
            heading: 'New Promotion',
            content: 'Check out this exciting offer just for you!',
            call_to_action: 'Click here',
            company_name: 'Company',
            user_id: 3,
            keyword: keywords.NOTIFY_PROMOTION_AGENCY,
        });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

main();
```

In this example:

-   **sendNotifyPromotion**: Sends a promotional notification to the specified server.
-   The payload contains details like the user’s name, promotion content, and call-to-action.

### Receiving and Managing Notifications

NotifyService also allows you to receive and manage notifications for your users:

```typescript
import { eventFeature } from 'notify-services';

const SERVER_URL = 'http://localhost:3005';

const main = async () => {
    try {
        // Get notifications for a user
        const user_id = 3; // Replace with the target user ID
        const notifications = await eventFeature.getNotification(
            user_id,
            SERVER_URL,
            { limit: 10, offset: 0 }, // {limit, offset, keyword, type} (keyword use search)
        );
        console.log('Notifications:', notifications);

        // Mark a notification as seen
        const notification_id = 1; // Replace with the target notification ID
        await eventFeature.seenNotification(notification_id, SERVER_URL);
    } catch (error) {
        console.error('Error handling notifications:', error);
    }
};

main();
```

In this example:

-   **getNotification**: Retrieves notifications for a specific user.
-   **seenNotification**: Marks a notification as seen.

### Additional Features

NotifyService is continuously evolving, and more features—especially around location-based notifications.

```typescript
import {
    eventFeature,
    driverFeature,
    gpsFeature,
    ioFeature,
    regionsFeature,
    systemFeature,
    keywords,
} from 'notify-services';
```
