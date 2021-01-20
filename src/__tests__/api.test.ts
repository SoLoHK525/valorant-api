import { API, Locales, Regions } from "../"
const API_KEY = process.env.API_KEY || "";

test("No Key", async () => {
    expect(() => {
        new API(Regions.NA, "", Regions.ASIA);
    }).toThrow('No key is classified');
})

describe("VAL-CONTENT-V1", () => {
    test("getContent", async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        const result = await instance.ContentV1.getContent(Locales["en-US"]);

        expect(result.characters).toBeTruthy();
        expect(result.charmLevels).toBeTruthy();
        expect(result.charms).toBeTruthy();
        expect(result.chromas).toBeTruthy();
        expect(result.equips).toBeTruthy();
        expect(result.gameModes).toBeTruthy();
        expect(result.maps).toBeTruthy();
        expect(result.playerCards).toBeTruthy();
        expect(result.playerTitles).toBeTruthy();
        expect(result.skinLevels).toBeTruthy();
        expect(result.skins).toBeTruthy();
        expect(result.sprayLevels).toBeTruthy();
        expect(result.sprays).toBeTruthy();
        expect(result.version).toBeTruthy();
    });
})

describe("VAL-MATCH-V1", () => {
    test("getMatchById w/o Prod Key", async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        await instance.MatchV1.getMatchById("123").catch(err => {
        })
    });
});