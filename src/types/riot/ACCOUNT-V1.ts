interface AccountDto {
    puuid: string;
    gameName: string;
    tagLine: string;
}

interface ActiveShardDto {
    puuid: string;
    game: string;
    activeShard: string;
}

export { AccountDto, ActiveShardDto };
