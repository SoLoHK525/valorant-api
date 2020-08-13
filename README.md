# node-valorant-api

A NodeJs wrapper for the Riot VALORANT API
[Active Development]

[![NPM Version][npm-image]][npm-url]

## Disclaimer:
> As of 2020/08/04, the VAL-MATCH-V1 API is not yet released to the public. Since I don't have the key to test the API, the functionality of this API wrapper is not yet confirmed. You are welcome to open issues regarding problems/bugs/improvements of this wrapper.

> However, I have tested the VAL-CONTENT-V1 API which works fine :D

## Installation

```bash
npm i node-valorant-api
```

## Supported APIs:
> All API methods will return a promise containing the return data. For detailed information about the Promise API, please refer to https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

> ### [**ACCOUNT-V1**](https://developer.riotgames.com/apis#account-v1)
- [getAccountByPuuid(puuid)](https://developer.riotgames.com/apis#account-v1/GET_getByPuuid)
- [getAccountByRiotID(gameName, tagLine)](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId)
- [getActiveShardByPuuid(puuid)](https://developer.riotgames.com/apis#account-v1/GET_getActiveShard)

> ### [**VAL-CONTENT-V1**](https://developer.riotgames.com/apis#val-content-v1)
- [getContent(locale)](https://developer.riotgames.com/apis#val-content-v1/GET_getContent)

> ### [**VAL-MATCH-V1**](https://developer.riotgames.com/apis#val-match-v1)
- [getMatchById(matchid)](https://developer.riotgames.com/apis#val-match-v1/GET_getMatch)
- [getMatchesByPuuid(puuid)](https://developer.riotgames.com/apis#val-match-v1/GET_getMatchlist)

## Supported regions:

> ### Valorant API:
- APAC
- BR
- EU
- KR
- LATAM
- NA
- PBE1

> ### Account API:
- ASIA
- AMERICAS
- EUROPE


## Usage

##### CommonJs:
```js
const { API, Regions, Locales } = require("node-valorant-api");

const APIKey = "RGAPI-5aca53b4-d92b-11ea-87d0-0242ac130003"; // Your API Key

// The third parameter is the Region for the Account API
// choose the one that is the closest to you
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS); // An API instance for Valorant query

// Example usage of the VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name })); //print all the character name in en-US
});

// Example usage of the ACCOUNT-V1 and VAL-MATCH-V1 API
// !!! The MatchV1 API requires a Production API Key
valorant.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    // Get the puuid by RiotID, then fetch all of the player's matches
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches); // this should print the account's matches
    })
});
```

##### Typescript:
```ts
import { API, Regions, Locales } from "node-valorant-api";

const APIKey = "RGAPI-5aca53b4-d92b-11ea-87d0-0242ac130003"; // Your API Key

// The third parameter is the Region for the Account API
// choose the one that is the closest to you
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS); // An API instance for Valorant query

// Example usage of the VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name })); //print all the character name in en-US
});

// Example usage of the ACCOUNT-V1 and VAL-MATCH-V1 API
// !!! The MatchV1 API requires a Production API Key
valorant.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    // Get the puuid by RiotID, then fetch all of the player's matches
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches); // this should print the account's matches
    })
});
```

[npm-image]: https://img.shields.io/npm/v/node-valorant-api.svg
[npm-url]: https://npmjs.org/package/node-valorant-api
