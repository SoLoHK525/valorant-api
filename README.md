# node-valorant-api

A NodeJs wrapper for the Riot VALORANT API
[Active Development]

[![NPM Version][npm-image]][npm-url]

## Disclaimer:
> As of 2020/08/04, the VAL-MATCH-V1 is not yet released to the public, since I don't have the key to test the API, the functionality of this API wrapper is not yet confirmed. You are welcomed to open issues regards the problem/bugs/improvements of this wrapper.

> However, the I have tested the VAL-CONTENT-V1 API which works fine :D 

## Install

```bash
npm i node-valorant-api
```

## Supported APIs:
> All API methods will return a promise containing the return data, for detailed information about the Promise API, please refer to https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

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

const valorant = new API(Regions.NA, APIKey); // An API instance for Valorant query

// Since the Account API only support Regions at ASIA | AMERICAS | EUROPE
const account = new API(Regions.ASIA, APIKey); // An API instance for Account query

// Example of the Usage of VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name })); //print all the character name in en-US
});

// Example of the Usage of ACCOUNT-V1 and VAL-MATCH-V1 API
// !!! The MatchV1 API requires Production API Key
account.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    // Get the puuid by RiotID, then fetch all the matches of the player
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches); // this should print the matches of the account
    })
});
```

##### Typescript:
```ts
import { API, Regions, Locales } from "node-valorant-api";

const APIKey = "RGAPI-5aca53b4-d92b-11ea-87d0-0242ac130003"; // Your API Key

const valorant = new API(Regions.NA, APIKey); // An API instance for Valorant query

// Since the Account API only support Regions at ASIA | AMERICAS | EUROPE
const account = new API(Regions.ASIA, APIKey); // An API instance for Account query

// Example of the Usage of VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name })); //print all the character name in en-US
});

// Example of the Usage of ACCOUNT-V1 and VAL-MATCH-V1 API
// !!! The MatchV1 API requires Production API Key
account.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    // Get the puuid by RiotID, then fetch all the matches of the player
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches); // this should print the matches of the account
    })
});
```

[npm-image]: https://img.shields.io/npm/v/node-valorant-api.svg
[npm-url]: https://npmjs.org/package/node-valorant-api
