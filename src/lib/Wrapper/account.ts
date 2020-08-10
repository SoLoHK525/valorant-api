import { AccountDto } from '../../types/riot/ACCOUNT-V1';
import { API } from '../..';
import Controller from '../Controller';

export default class Account extends Controller implements AccountDto {
    public readonly puuid: string;
    public readonly gameName: string;
    public readonly tagLine: string;

    constructor(instance: API, puuid: string, gameName: string, tagLine: string) {
        super(instance);
        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
    }

    public getMatches() {
        return this.instance.MatchV1.getMatchesByPuuid(this.puuid);
    }
}
