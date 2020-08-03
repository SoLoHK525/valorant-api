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

## Supported methods:
> All API methods will return a promise containing the return data, for detailed information about the Promise API, please refer to https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

- getContent(locale)
- getMatchById(matchid)
- getMatchesByPuuid(puuid)

## Supported regions:
- APAC
- BR
- EU
- KR
- LATAM
- NA
- PBE1


## Usage

##### CommonJs:
```js
const { API, Regions, Locales } = require("node-valorant-api");

const ValorantAPI = API.setRegion(Regions.NA).setKey("Your API Key Here");

ValorantAPI.getContent(Locales["en-GB"]).then(content => {
    //Handle API Response
    console.log(content.characters.map(char => { return char.name }));
}).catch(err => {
    //Handle API Exeception
    throw err;
});
```

##### Typescript:
```ts
import { API, Regions, Locales } from "node-valorant-api";

const ValorantAPI = API.setRegion(Regions.NA).setKey("Your API Key Here");

ValorantAPI.getContent(Locales["en-GB"]).then(content => {
    //Handle API Response
    console.log(content.characters.map(char => { return char.name }));
}).catch(err => {
    //Handle API Exeception
    throw err;
});
```

[npm-image]: https://img.shields.io/npm/v/node-valorant-api.svg
[npm-url]: https://npmjs.org/package/node-valorant-api
