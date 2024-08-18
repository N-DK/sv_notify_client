import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyEventType } from '../types/notifyEvent.type';
import { NotifyPromotionType } from '../types/notifyPromotion.type';

class EventFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    async sendNotifyEvent(
        baseURL: string,
        {
            user_name,
            event_name,
            time,
            company_name,
            location_name,
            user_id,
            keyword,
        }: NotifyEventType,
    ) {
        const data = {
            user_id,
            keyword: keyword ?? keywords.NOTIFY_EVENT,
            replaces: {
                user_id,
                user_name,
                event_name,
                time,
                company_name,
                location_name,
            },
        };
        return await this.sendNotification(data, baseURL);
    }

    async sendNotifyPromotion(
        baseURL: string,
        {
            user_name,
            heading,
            content,
            call_to_action,
            company_name,
            user_id,
            keyword,
        }: NotifyPromotionType,
    ) {
        const data = {
            user_id,
            keyword: keyword ?? keywords.NOTIFY_PROMOTION,
            replaces: {
                user_name,
                heading,
                content,
                call_to_action,
                company_name,
            },
        };
        return await this.sendNotification(data, baseURL);
    }
}

export default new EventFeature();
