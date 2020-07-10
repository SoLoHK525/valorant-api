import { int, long, float } from "../alias";

/**
 * The VAL-MATCH-V1 Response
 * 
 * {@link https://developer.riotgames.com/apis#val-match-v1 Reference of VAL-MATCH-V1}
 */
interface MatchDto {
    matchInfo: Array<MatchInfoDto>;
    players: Array<PlayerDto>;
    teams: Array<TeamDto>;
    roundResults: Array<RoundResultDto>;
}

interface MatchlistDto {
    puuid: string;
    history: Array<MatchDto>;
}

interface MatchInfoDto {
    matchId: string;
    mapId: string;
    gameLengthMillis: int;
    gameStartMillis: long;
    provisioningFlowId: string;
    isCompleted: boolean;
    customGameName: string;
    queueId: string;
    gameMode: string;
    isRanked: boolean;
    seasonId: string;
}

interface PlayerDto {
    puuid: string;
    teamId: string;
    partyId: string;
    characterId: string;
    stats: PlayerStatsDto;
    competitiveTier: int;
    playerCard: string;
    playerTitle: string;
}

interface PlayerStatsDto {
    puuid: string;
    kills: Array<KillDto>;
    damage: Array<DamageDto>;
    score: int;
    economy: EconomyDto;
    ability: AbilityDto;
}

interface KillDto {
    gameTime: int;
    roundTime: int;
    killer: string;
    victim: string;
    victimLocation: LocationDto;
    assistans: Array<string>;
    playerLocation: Array<PlayerLocationsDto>;
    finishingDamage: FinishingDamageDto;
}

interface LocationDto {
    x: int;
    y: int;
}

interface PlayerLocationsDto {
    ppuid: string;
    viewRadians: float;
    location: LocationDto;
}

interface FinishingDamageDto {
    damageType: string;
    damageItem: string;
    isSecondaryFireMode: boolean;
}

interface DamageDto {
    receiver: string;
    damage: int;
    legshots: int;
    bodyshots: int;
    headshots: int;
}

interface EconomyDto {
    loadoutValue: int;
    weapon: string;
    armor: string;
    remaining: int;
    spent: int;
}

interface AbilityDto {
    grenadeEffects: string;
    ability1Effects: string;
    ability2Effects: string;
    ultimateEffects: string;
}

interface TeamDto {
    teamId: string;
    won: boolean;
    roundsPlayed: int;
    roundsWon: int;
}

interface RoundResultDto {
    roundNum: int;
    roundResult: string;
    roundCeremony: string;
    winningTeam: string;
    bombPlanter: string;
    bombDefuser: string;
    plantRoundTime: int;
    plantPlayerLocations: Array<PlayerLocationsDto>;
    plantLocation: LocationDto;
    plantSite: string;
    defuseRoundTime: int;
    defusePlayerLocations: Array<PlayerLocationsDto>;
    defuseLocation: LocationDto;
    playerStats: Array<PlayerStatsDto>;
    roundResultCode: string;
}

export {
    MatchDto,
    MatchlistDto,
    MatchInfoDto,
    PlayerDto,
    PlayerStatsDto,
    KillDto,
    LocationDto,
    PlayerLocationsDto,
    FinishingDamageDto,
    DamageDto,
    EconomyDto,
    AbilityDto,
    TeamDto,
    RoundResultDto
}