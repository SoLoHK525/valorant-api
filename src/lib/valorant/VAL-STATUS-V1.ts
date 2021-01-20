import { PlatformDataDto } from '../../types/valorant/VAL-STATUS-V1';
import Controller from '../Controller';

export class StatusV1 extends Controller {
    /**
     * Fetch VALORANT status by the given platform
     *
     * API Endpoint: `GET /val/status/v1/platform-data`
     *
     * @description Get match by id
     *
     * @remark
     * **`Requires Development API Key`**
     *
     * @returns A promise containing the VAL-STATUS-V1 API Response: `{@link PlatformDataDto}`
     *
     * {@link https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData Reference of VAL-STATUS-V1}
     */
    getPlatformData(): Promise<PlatformDataDto> {
        return this.request.get(`/val/status/v1/platform-data`);
    }
}
