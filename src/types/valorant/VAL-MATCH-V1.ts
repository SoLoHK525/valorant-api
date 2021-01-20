import { int, long, float, puuid } from '../alias';

/**
 * Response of GET /val/match/v1/matches/{matchId}
 *
 * {@link https://developer.riotgames.com/apis#val-match-v1/GET_getMatch reference}
 */
export interface MatchesMatchDto {
    /**
     * List of matches
     */
    matchInfo: MatchInfoDto[];

    /**
     * List of players
     */
    players: PlayerDto[];

    /**
     * List of teams
     */
    teams: TeamDto[];

    /**
     * List of round results
     */
    roundResults: RoundResultDto[];
}

/**
 * Response of GET /val/match/v1/matchlists/by-puuid/{puuid}
 *
 * {@link https://developer.riotgames.com/apis#val-match-v1/GET_getMatchlist reference}
 */
export interface MatchlistDto {
    /**
     * Player UUID
     */
    puuid: puuid;

    /**
     * List of history matches of the player
     */
    history: MatchListsMatchDto[];
}

export interface MatchListsMatchDto {
    matchId: string;
    gameStartTime: long;
    teamId: string;
}

export interface MatchInfoDto {
    /**
     * Match ID
     */
    matchId: string;

    /**
     * Map ID
     */
    mapId: string;

    /**
     * The length(duration) of the game in milliseconds
     */
    gameLengthMillis: int;

    /**
     * The time of beginning of the game in milliseconds
     */
    gameStartMillis: long;

    /**
     * Provisioning Flow ID - Unknown
     */
    provisioningFlowId: string;

    /**
     * Whether the match is completed
     */
    isCompleted: boolean;

    /**
     * Name of the custom game
     */
    customGameName: string;

    /**
     * Queue ID
     */
    queueId: string;

    /**
     * Game mode
     */
    gameMode: string;

    /**
     * Whether the match is ranked
     */
    isRanked: boolean;

    /**
     * Season ID
     */
    seasonId: string;
}

export interface PlayerDto {
    /**
     * Player UUID
     */
    puuid: puuid;

    /**
     * Team ID of the player's team
     */
    teamId: string;

    /**
     * Party ID of the player's party
     */
    partyId: string;

    /**
     * Character ID of the charctor used by the player
     */
    characterId: string;

    /**
     * Player statistics
     */
    stats: PlayerStatsDto;

    /**
     * Competitive rank(tier) of the player
     */
    competitiveTier: int;

    /**
     * The card used by the player
     */
    playerCard: string;

    /**
     * The title used by the player
     */
    playerTitle: string;
}

export interface PlayerStatsDto {
    /**
     * Player UUID
     */
    puuid: puuid;

    /**
     * Kills done by the player
     */
    kills: KillDto[];

    /**
     * Damages done by the player
     */
    damage: DamageDto[];

    /**
     * Score of the player
     */
    score: int;

    /**
     * Economy status of the player
     */
    economy: EconomyDto;

    /**
     * Ability status of the player
     */
    ability: AbilityDto;
}

export interface KillDto {
    /**
     * @type int
     * Game time which the kill occurs
     */
    gameTime: int;

    /**
     * Round time which the kill occurs
     */
    roundTime: int;

    /**
     * Killer's Player UUID (PUUID)
     * @type PUUID
     */
    killer: puuid;

    /**
     * Victim's Player UUID (PUUID)
     * @type PUUID
     */
    victim: puuid;

    /**
     * Victim's location
     */
    victimLocation: LocationDto;

    /**
     * List of assistants' Player UUID (PUUID)
     * @type PUUID[]
     */
    assistants: string[];

    /**
     * Location of all players when this kill occurs
     */
    playerLocations: PlayerLocationsDto[];

    /**
     * The finishing damage which occur this kill event
     */
    finishingDamage: FinishingDamageDto;
}

export interface LocationDto {
    /**
     * @type int
     * X-coordinate of the location
     */
    x: int;

    /**
     * @type int
     * Y-coordinate of the location
     */
    y: int;
}

export interface PlayerLocationsDto {
    /**
     * Player UUID
     */
    puuid: puuid;

    /**
     * Radians of the player's viewing angle
     * @type float
     */
    viewRadians: float;

    /**
     * Location of the player
     */
    location: LocationDto;
}

export interface FinishingDamageDto {
    /**
     * Type of the finishing damage of the kill
     */
    damageType: string;

    /**
     * Type of the finishing item of the kill
     */
    damageItem: string;

    /**
     * Whether the finishing damage is triggered by secondary fire mode (Right-Click)
     */
    isSecondaryFireMode: boolean;
}

export interface DamageDto {
    /**
     * Receiver's Player UUID (PUUID)
     * @type PUUID
     */
    receiver: puuid;

    /**
     * Damage done
     * @type int
     */
    damage: int;

    /**
     * Damage done to legs
     * @type int
     */
    legshots: int;

    /**
     * Damage done to body
     * @type int
     */
    bodyshots: int;

    /**
     * Damage done to head
     * @type int
     */
    headshots: int;
}

export interface EconomyDto {
    /**
     * Value of the player loadout
     * @type int
     */
    loadoutValue: int;

    /**
     * Weapon
     * @type int
     */
    weapon: string;

    /**
     * Armor
     * @type int
     */
    armor: string;

    /**
     * Remaining amount of money
     * @type int
     */
    remaining: int;

    /**
     * Amount of money spent
     * @type int
     */
    spent: int;
}

export interface AbilityDto {
    /**
     * Name of the grenade effect
     */
    grenadeEffects: string;

    /**
     * Name of the Ability 1 effect
     */
    ability1Effects: string;

    /**
     * Name of the Ability 2 effect
     */
    ability2Effects: string;

    /**
     * Name of the Ultimate Ability effect
     */
    ultimateEffects: string;
}

export interface TeamDto {
    /**
     * Team ID
     */
    teamId: string;

    /**
     * Whether the team won the match
     */
    won: boolean;

    /**
     * Rounds played
     */
    roundsPlayed: int;

    /**
     * Rounds won
     */
    roundsWon: int;
}

export interface RoundResultDto {
    /**
     * Round number of the result
     * @type int
     */
    roundNum: int;

    /**
     * Round result
     * @type int
     */
    roundResult: string;

    /**
     * Round ceremony
     * @type int
     */
    roundCeremony: string;

    /**
     * Winning Team
     * @type int
     */
    winningTeam: string;

    /**
     * Player UUID of the bomb planter
     */
    bombPlanter: puuid;

    /**
     * Player UUID of the bomb defuser
     */
    bombDefuser: puuid;

    /**
     * The round time when the bomb is planted
     * @type int
     */
    plantRoundTime: int;

    /**
     * Locations of player when the bomb is planted
     */
    plantPlayerLocations: PlayerLocationsDto[];

    /**
     * Location of the planted bomb
     */
    plantLocation: LocationDto;

    /**
     * Name of site which the bomb is planted on
     */
    plantSite: string;

    /**
     * The round time when the bomb is defused
     */
    defuseRoundTime: int;

    /**
     * Locations of player when the bomb is defused
     */
    defusePlayerLocations: PlayerLocationsDto[];

    /**
     * Location of the defused bomb
     */
    defuseLocation: LocationDto;

    /**
     * Player statistics of this round
     */
    playerStats: PlayerStatsDto[];

    /**
     * Round result code
     */
    roundResultCode: string;
}

export interface RecentMatchesDto {
    currentTime: long;
    matchIds: string[];
}
