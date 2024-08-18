import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyRegionType } from '../types/notifyRegion.type';

class RegionFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    async sendNotifyOut(
        baseURL: string,
        {
            vehicle_name,
            region_name,
            lat,
            lon,
            current_time,
            user_id,
        }: NotifyRegionType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_OUT,
            replaces: {
                vehicle_name,
                region_name,
                lat,
                lon,
                current_time,
            },
        };

        const res = await this.sendNotification(data, baseURL);
        return res;
    }

    async sendNotifyIn(
        baseURL: string,
        {
            vehicle_name,
            region_name,
            lat,
            lon,
            current_time,
            user_id,
        }: NotifyRegionType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_IN,
            replaces: {
                vehicle_name,
                region_name,
                lat,
                lon,
                current_time,
            },
        };

        const res = await this.sendNotification(data, baseURL);
        return res;
    }
}

export default new RegionFeature();
