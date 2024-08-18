import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifySystemMaintenanceType } from '../types/notifySystemMaintenance.type';

class SystemFeature extends FirebaseAPI {
    constructor() {
        super();
    }
    async sendNotifySystemMaintenance(
        baseURL: string,
        { start_time, end_time }: NotifySystemMaintenanceType,
    ) {
        const data = {
            keyword: keywords.NOTIFY_SYSTEM_MAINTENANCE,
            replaces: {
                start_time,
                end_time,
            },
        };
        return await this.sendNotification(data, baseURL);
    }
}

export default new SystemFeature();
