# node-valorant-api

A NodeJs wrapper for the Riot VALORANT API

[![NPM Version][npm-image]][npm-url]

## Disclaimer:
> As of 2020/07/10, the official VALORANT API is not yet released to the public, since I don't have the key to test the API, the functionality of this API wrapper is not yet confirmed. You are welcomed to open issues regards the problem/bugs/improvements of this wrapper.

## Install

```bash
npm i node-valorant-api
```

## Supported methods:
- getContent()
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
const { API, Regions } = require("@solohk525/valorant-api");

API.setRegion(Regions.NA).setToken("Your token here").getContent().then(content => {
    console.log(content.characters);
})
```

##### Typescript:
```ts
import { API, Regions } from "node-valorant-api";

API.setRegion(Regions.NA).setToken("Your token here").getContent().then(content => {
    console.log(content.characters);
})
```

[npm-image]: https://img.shields.io/npm/v/node-valorant-api.svg
[npm-url]: https://npmjs.org/package/node-valorant-api
