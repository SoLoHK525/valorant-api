import { long } from '../alias';

export interface LeaderboardDto {
    shard: string;
    actId: string;
    totalPlayers: long;
    players: PlayerDto[];
}

export interface PlayerDto {
    puuid: string;
    gameName: string;
    tagLine: string;
    leaderboardRank: long;
    rankedRating: long;
    numberOfWins: long;
}
