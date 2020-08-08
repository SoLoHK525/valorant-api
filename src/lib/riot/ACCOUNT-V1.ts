import { API } from '../..';
import { AccountDto, ActiveShardDto } from '../../types/riot/ACCOUNT-V1';
import { Region } from '../../types/region';
import Regions from '../Regions';
import Controller from '../Controller';

const regionToAccountRegion = (region: Region): Region => {
    switch (region) {
        case Regions.APAC:
        case Regions.KR:
        case Regions.ASIA:
            return Regions.ASIA;
        case Regions.BR:
        case Regions.NA:
        case Regions.LATAM:
        case Regions.PBE1:
            return Regions.AMERICAS;
        case Regions.EU:
        case Regions.EUROPE:
            return Regions.EUROPE;
        default:
            throw new Error('Invalid Region');
    }
};

export default class AccountV1 extends Controller {
    /**
     * Fetch account By Puuid
     *
     * API Endpoint: `GET /riot/account/v1/accounts/by-puuid/{puuid}`
     *
     * @description Get match by id
     *
     * @remark
     * **`Requires Development API Key`**
     *
     * @remark
     * *`The wrapper will transform your current region to AccountAPI Region: AMERICAS | ASIA | EUROPE`*
     *
     * @returns A promise containing the ACCOUNT-V1 API Response: `{@link AccountDto}`
     *
     * {@link https://developer.riotgames.com/apis#account-v1/GET_getByPuuid Reference of ACCOUNT-V1}
     */
    getAccountByPuuid(puuid: string): Promise<AccountDto> {
        puuid = encodeURIComponent(puuid);

        return this.request.get(`/riot/account/v1/accounts/by-puuid/${puuid}`) as Promise<AccountDto>;
    }

    /**
     * Fetch account By Riot ID
     *
     * API Endpoint: `GET /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}`
     *
     * @description Get account By Riot ID
     *
     * @remark
     * **`Requires Development API Key`**
     *
     * @remark
     * *`The wrapper will transform your current region to AccountAPI Region: AMERICAS | ASIA | EUROPE`*
     *
     * @returns A promise containing the ACCOUNT-V1 API Response: `{@link AccountDto}`
     *
     * {@link https://developer.riotgames.com/apis#account-v1/GET_getByRiotId Reference of ACCOUNT-V1}
     */
    getAccountByRiotID(gameName: string, tagLine: string): Promise<AccountDto> {
        gameName = encodeURIComponent(gameName);
        tagLine = encodeURIComponent(tagLine);

        return this.request.get(`/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`) as Promise<AccountDto>;
    }

    /**
     * Fetch active shard by Puuid
     *
     * API Endpoint: `GET /riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}`
     *
     * @description Get active shard by Puuid
     *
     * @remark
     * **`Requires Development API Key`**
     *
     * @remark
     * *`The wrapper will transform your current region to AccountAPI Region: AMERICAS | ASIA | EUROPE`*
     *
     * @returns A promise containing the ACCOUNT-V1 API Response: `{@link ActiveShardDto}`
     *
     * {@link https://developer.riotgames.com/apis#account-v1/GET_getActiveShard Reference of ACCOUNT-V1}
     */
    getActiveShardByPuuid(puuid: string): Promise<ActiveShardDto> {
        puuid = encodeURIComponent(puuid);

        return this.request.get(`/riot/account/v1/active-shards/by-game/val/by-puuid/${puuid}`) as Promise<
            ActiveShardDto
        >;
    }
}
