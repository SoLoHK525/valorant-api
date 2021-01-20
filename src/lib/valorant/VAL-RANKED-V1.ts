import qs from 'qs';

import Controller from '../Controller';
import { LeaderboardDto } from '../../types/valorant/VAL-RANKED-V1';

export class RankedV1 extends Controller {
    /**
     * Fetch leaderboard for competitive mode
     *
     * API Endpoint: `GET /val/ranked/v1/leaderboards/by-act/{actId}`
     *
     * @description Get leaderboard for the competitive queue
     *
     * @remark
     * **`Requires Development API Key`**
     *
     * @returns A promise containing the VAL-RANKED-V1 API Response: `{@link LeaderboardDto}`
     *
     * {@link https://developer.riotgames.com/apis#val-ranked-v1/GET_getLeaderboard Reference of VAL-RANKED-V1}
     */
    getLeaderboardsByAct(actId: string, size?: number, startIndex?: number): Promise<LeaderboardDto> {
        let url = `/val/ranked/v1/leaderboards/by-act/${actId}`;

        if (size !== undefined || startIndex !== undefined) {
            url +=
                '?' +
                qs.stringify({
                    size,
                    startIndex,
                });
        }

        return this.request.get(url);
    }
}
