import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyDataType } from '../types/notifyData.type';
import { NotifyRemindType } from '../types/notifyRemind.type';

class RemindFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    async sendNotifyRemind(
        baseURL: string,
        { user_id, name_remind, vehicle_name }: NotifyRemindType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_REMIND,
            replaces: {
                name_remind,
                vehicle_name,
            },
        };
        return await this.sendNotification(data, baseURL);
    }
}

export default new RemindFeature();
