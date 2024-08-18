import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyDriverType } from '../types/notifyDriver.type';

class DriverFeature extends FirebaseAPI {
    constructor() {
        super();
    }
    async sendNotifyDriverLogout(
        baseURL: string,
        { driver_name, current_time, user_id }: NotifyDriverType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_DRIVER_LOGOUT,
            replaces: {
                driver_name,
                current_time,
            },
        };
        return await this.sendNotification(data, baseURL);
    }

    async sendNotifyDriverLogin(
        baseURL: string,
        { driver_name, current_time, user_id }: NotifyDriverType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_DRIVER_LOGIN,
            replaces: {
                driver_name,
                current_time,
            },
        };
        return await this.sendNotification(data, baseURL);
    }
}

export default new DriverFeature();
