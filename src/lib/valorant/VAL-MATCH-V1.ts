import { MatchlistDto, MatchesMatchDto, RecentMatchesDto } from '../../types/valorant/VAL-MATCH-V1';
import Controller from '../Controller';
import { Queue } from '../Queue';

export class MatchV1 extends Controller {
    /**
     * Fetch match by the match id
     *
     * API Endpoint: `GET /val/match/v1/matches/{matchId}`
     *
     * @description Get match by id
     *
     * @remark
     * **`Requires Production API Key`**
     *
     * @returns A promise containing the VAL-MATCH-V1 API Response: `{@link MatchDto}`
     *
     * {@link https://developer.riotgames.com/apis#val-match-v1/GET_getMatch Reference of VAL-MATCH-V1}
     */
    getMatchById(matchId: string): Promise<MatchesMatchDto> {
        matchId = encodeURIComponent(matchId);

        return this.request.get(`/val/match/v1/matches/${matchId}`);
    }

    /**
     * Fetch match history of a player by Player UUID (puuid)
     *
     * API Endpoint: `GET /val/match/v1/matchlists/by-puuid/{puuid}`
     *
     * @description Get matchlist for games played by puuid
     *
     * @remark
     * **`Requires Production API Key`**
     *
     * @returns A promise containing the VAL-MATCH-V1 API Response: `{@link MatchlistDto}`
     *
     * {@link https://developer.riotgames.com/apis#val-match-v1/GET_getMatchlist Reference of VAL-MATCH-V1}
     */
    getMatchesByPuuid(puuid: string): Promise<MatchlistDto> {
        puuid = encodeURIComponent(puuid);

        return this.request.get(`/val/match/v1/matchlists/by-puuid/${puuid}`);
    }

    /**
     * Fetch recent completed matches of a queue type
     *
     * API Endpoint: `GET /val/match/v1/recent-matches/by-queue/{queue}`
     *
     * @description Get recent matches by queue type
     *
     * @remark
     * **`Requires Production API Key`**
     *
     * @returns A promise containing the VAL-MATCH-V1 API Response: `{@link RecentMatchesDto}`
     *
     * {@link https://developer.riotgames.com/apis#val-match-v1/GET_getRecent Reference of VAL-MATCH-V1}
     */
    getRecentMatches(queue: Queue): Promise<RecentMatchesDto> {
        return this.request.get(`/val/match/v1/recent-matches/by-queue/${queue}`);
    }
}
