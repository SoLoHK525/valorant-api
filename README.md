# node-valorant-api

A NodeJs wrapper for the Riot VALORANT API
[Active Development]

[![NPM Version][npm-image]][npm-url]

## Disclaimer:
> As of 2020/08/13, the VAL-MATCH-V1 API is not yet released to the public. Since I don't have the key to test the API, the functionality of this API wrapper is not yet confirmed. You are welcome to open issues regarding problems/bugs/improvements of this wrapper.

> However, I have tested the VAL-CONTENT-V1 API which works fine :D

## Installation

npm:
```bash
npm i node-valorant-api
```

yarn:
```bash
yarn add node-valorant-api
```


## Supported APIs:
> All API methods will return a promise containing the return data. For detailed information about the Promise API, please refer to https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

[**ACCOUNT-V1**](https://developer.riotgames.com/apis#account-v1)

| Method | Description |
--------- | -------- |
[getAccountByPuuid(puuid)](https://developer.riotgames.com/apis#account-v1/GET_getByPuuid) | Get account by puuid
[getAccountByRiotID(gameName, tagLine)](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId) | Get account by riot id
[getActiveShardByPuuid(puuid)](https://developer.riotgames.com/apis#account-v1/GET_getActiveShard) | Get active shard for a player

---

[**VAL-CONTENT-V1**](https://developer.riotgames.com/apis#val-content-v1)


| Method | Description |
--------- | -------- |
[getContent(locale?)](https://developer.riotgames.com/apis#val-content-v1/GET_getContent) | Get content optionally filtered by locale

---

[**VAL-MATCH-V1**](https://developer.riotgames.com/apis#val-match-v1)

| Method | Description |
--------- | -------- |
[getMatchById(matchid)](https://developer.riotgames.com/apis#val-match-v1/GET_getMatch) | Get match by id
[getMatchesByPuuid(puuid)](https://developer.riotgames.com/apis#val-match-v1/GET_getMatchlist) | Get matchlist for games played by puuid
[getRecentMatches(queue)](https://developer.riotgames.com/apis#val-match-v1/GET_getRecent) | Get recent matches

---

[**VAL-RANKED-V1**](https://developer.riotgames.com/apis#val-ranked-v1)

| Method | Description |
--------- | -------- |
[getLeaderboardsByAct(actId, size?, startIndex?)](https://developer.riotgames.com/apis#val-ranked-v1/GET_getLeaderboard) | Get leaderboard for the competitive queue


## Supported regions:

#### Valorant API:
| Region | Endpoint |
| --------- | -------- |
| APAC | ap.api.riotgames.com |
| BR | br.api.riotgames.com |
| EU | eu.api.riotgames.com |
| KR | kr.api.riotgames.com |
| LATAM | latam.api.riotgames.com |
| NA | na.api.riotgames.com |
| PBE1 | pbe1.api.riotgames.com |

#### Account API:

| Region | Endpoint |
| --------- | -------- |
| ASIA | asia.api.riotgames.com |
| AMERICAS | americas.api.riotgames.com |
| EUROPE | europe.api.riotgames.com |

## Usage

##### CommonJs:
```js
const { API, Regions, Locales, Queue } = require("node-valorant-api");

const APIKey = "RGAPI-5aca53b4-d92b-11ea-87d0-0242ac130003"; // Your API Key

// The third parameter is the Region for the Account API
// choose the one that is the closest to you
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS); // An API instance for Valorant query

// Example usage of the VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name }));
});

// Example usage of the ACCOUNT-V1 and VAL-MATCH-V1 API !!! The MatchV1 API requires a Production API Key
valorant.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches);
    })
});

/**
 * Example usage of the VAL-STATUS-V1 API
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.StatusV1.getPlatformData().then(data => {
    console.log(data);
});

/**
 * Example usage of the VAL-MATCH-V1 API
 * Queue: "competitive", "unranked", "spikerush"
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.MatchV1.getRecentMatches(Queue.Competitive).then(data => {
    console.log(data);
})
```

##### Typescript:
```ts
import { API, Regions, Locales, Queue, RiotAPIError } from "node-valorant-api";

const APIKey = "RGAPI-5aca53b4-d92b-11ea-87d0-0242ac130003"; // Your API Key

// The third parameter is the Region for the Account API
// choose the one that is the closest to you
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS); // An API instance for Valorant query

// Example usage of the VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name }));
}).catch((error: RiotAPIError) => {
    // Error handling
    console.log(error.status_code);
})

// Example usage of the ACCOUNT-V1 and VAL-MATCH-V1 API !!! The MatchV1 API requires a Production API Key
valorant.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches);
    })
});

/**
 * Example usage of the VAL-STATUS-V1 API
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.StatusV1.getPlatformData().then(data => {
    console.log(data);
});

/**
 * Example usage of the VAL-MATCH-V1 API
 * Queue: "competitive", "unranked", "spikerush"
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.MatchV1.getRecentMatches(Queue.Competitive).then(data => {
    console.log(data);
})
```

## Error Handling
The wrapper will return a Promise rejection with `RiotAPIError` which can be used to handle Rate Limiting (HTTP Status 429),etc. **Every request should include a catch block for handling error.**

`RiotAPIError` has following properties:
```ts
interface RiotAPIError {
    request: {
        method: string; // Request Method
        path: string; // Request path
        header: string; // Request headers
        url: string; // Full Request URL
    },
    status_code: number; // Status Code, see https://developer.riotgames.com/docs/portal#web-apis_response-codes
    message: string; // Error message from Riot API
}
```


[npm-image]: https://img.shields.io/npm/v/node-valorant-api.svg
[npm-url]: https://npmjs.org/package/node-valorant-api
