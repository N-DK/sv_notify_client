import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { NotifyVehicleOverheatType } from '../types/notifyVehicleOverheat.type';

class IOFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    async sendNotifyVehicleOverheat(
        baseURL: string,
        { vehicle_name, temperature, user_id }: NotifyVehicleOverheatType,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_VEHICLE_OVERHEAT,
            replaces: {
                vehicle_name,
                temperature,
            },
        };
        return await this.sendNotification(data, baseURL);
    }
}

export default new IOFeature();
