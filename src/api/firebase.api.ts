import { axiosAlarm } from '../helper/axios.helper';
import { NotifyDataType } from '../types/notifyData.type';

class FirebaseAPI {
    constructor() {}

    async sendNotification(data: NotifyDataType, baseURL: string) {
        return await axiosAlarm(baseURL).post(
            '/api/v1/notification/send-notification',
            data,
        );
    }

    async getNotification(
        user_id: number,
        baseURL: string,
        query: { [key: string]: string | number } = {},
    ) {
        const url = `/api/v1/notification/get-notification/${user_id}`;
        const params = new URLSearchParams(query as Record<string, string>);

        return await axiosAlarm(baseURL).get(`${url}?${params.toString()}`);
    }

    async seenNotification(notification_id: number, baseURL: string) {
        return await axiosAlarm(baseURL).put(
            `/api/v1/notification/seen-notification/${notification_id}`,
        );
    }
}

export default FirebaseAPI;
