import FirebaseAPI from '../api/firebase.api';
import { keywords } from '../constant/keywords.constant';
import { BlockVehicleType } from '../types/blockVehicle.type';

class VehicleFeature extends FirebaseAPI {
    constructor() {
        super();
    }

    seenBlockVehicleNotification(
        { user_id, vehicle_name }: BlockVehicleType,
        baseURL: string,
    ) {
        const data = {
            user_id,
            keyword: keywords.NOTIFY_VEHICLE_BLOCK,
            replaces: {
                vehicle_name,
            },
        };

        return this.sendNotification(data, baseURL);
    }
}

export default new VehicleFeature();
