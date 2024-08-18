import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyGPSLimitSpeedType } from '../types/notifyGPSLimitSpeed.type';
import { NotifyGPSLostConnectionType } from '../types/notifyGPSLostConnection.type';
import { NotifyGPSLostGPSType } from '../types/notifyGPSLostGPS.type';
import { NotifyGPSStopType } from '../types/notifyGPSStop.type';

class GPSFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    async sendNotifyLimitSpeed(
        baseURL: string,
        {
            vehicle_name,
            location_name,
            lat,
            lon,
            current_time,
            user_id,
        }: NotifyGPSLimitSpeedType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_LIMIT_SPEED,
            replaces: {
                vehicle_name,
                location_name,
                lat,
                lon,
                current_time,
            },
        };
        return await this.sendNotification(data, baseURL);
    }

    async sendNotifyLostGPS(
        baseURL: string,
        { vehicle_name, current_time, user_id }: NotifyGPSLostGPSType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_LOST_GPS,
            replaces: {
                vehicle_name,
                current_time,
            },
        };

        return await this.sendNotification(data, baseURL);
    }

    async sendNotifyStop(
        baseURL: string,
        { vehicle_name, location_name, lat, lon, user_id }: NotifyGPSStopType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_STOP,
            replaces: {
                vehicle_name,
                location_name,
                lat,
                lon,
            },
        };
        return await this.sendNotification(data, baseURL);
    }

    async sendNotifyLostConnection(
        baseURL: string,
        { vehicle_name, current_time, user_id }: NotifyGPSLostConnectionType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_LOST_CONNECTION,
            replaces: {
                vehicle_name,
                current_time,
            },
        };

        return await this.sendNotification(data, baseURL);
    }
}

export default new GPSFeature();
