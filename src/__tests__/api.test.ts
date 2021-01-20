import { API, Locales, Regions, Queue, RiotAPIError } from '../';
const API_KEY = process.env.API_KEY || '';

test('No Key', async () => {
    expect(() => {
        return new API(Regions.NA, '', Regions.ASIA);
    }).toThrow('No key is classified');
});

describe('VAL-CONTENT-V1', () => {
    test('getContent', async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        const result = await instance.ContentV1.getContent(Locales['en-US']);

        expect(result.characters).toBeTruthy();
        if (result.characters.length > 0) {
            expect(result.characters[0].assetName).toBeTruthy();
            expect(result.characters[0].localizedNames).toBeTruthy();
            expect(result.characters[0].name).toBeTruthy();
        }

        expect(result.charmLevels).toBeTruthy();
        if (result.charmLevels.length > 0) {
            expect(result.charmLevels[0].assetName).toBeTruthy();
            expect(result.charmLevels[0].localizedNames).toBeTruthy();
            expect(result.charmLevels[0].name).toBeTruthy();
        }

        expect(result.charms).toBeTruthy();
        if (result.charms.length > 0) {
            expect(result.charms[0].assetName).toBeTruthy();
            expect(result.charms[0].localizedNames).toBeTruthy();
            expect(result.charms[0].name).toBeTruthy();
        }

        expect(result.chromas).toBeTruthy();
        if (result.chromas.length > 0) {
            expect(result.chromas[0].assetName).toBeTruthy();
            expect(result.chromas[0].localizedNames).toBeTruthy();
            expect(result.chromas[0].name).toBeTruthy();
        }

        expect(result.equips).toBeTruthy();
        if (result.equips.length > 0) {
            expect(result.equips[0].assetName).toBeTruthy();
            expect(result.equips[0].localizedNames).toBeTruthy();
            expect(result.equips[0].name).toBeTruthy();
        }

        expect(result.gameModes).toBeTruthy();
        if (result.gameModes.length > 0) {
            expect(result.gameModes[0].assetName).toBeTruthy();
            expect(result.gameModes[0].localizedNames).toBeTruthy();
            expect(result.gameModes[0].name).toBeTruthy();
        }

        expect(result.maps).toBeTruthy();
        if (result.maps.length > 0) {
            expect(result.maps[0].assetName).toBeTruthy();
            expect(result.maps[0].localizedNames).toBeTruthy();
            expect(result.maps[0].name).toBeTruthy();
        }

        expect(result.playerCards).toBeTruthy();
        if (result.playerCards.length > 0) {
            expect(result.playerCards[0].assetName).toBeTruthy();
            expect(result.playerCards[0].localizedNames).toBeTruthy();
            expect(result.playerCards[0].name).toBeTruthy();
        }

        expect(result.playerTitles).toBeTruthy();
        if (result.playerTitles.length > 0) {
            expect(result.playerTitles[0].assetName).toBeTruthy();
            expect(result.playerTitles[0].localizedNames).toBeTruthy();
            expect(result.playerTitles[0].name).toBeTruthy();
        }

        expect(result.skinLevels).toBeTruthy();
        if (result.skinLevels.length > 0) {
            expect(result.skinLevels[0].assetName).toBeTruthy();
            expect(result.skinLevels[0].localizedNames).toBeTruthy();
            expect(result.skinLevels[0].name).toBeTruthy();
        }

        expect(result.skins).toBeTruthy();
        if (result.skins.length > 0) {
            expect(result.skins[0].assetName).toBeTruthy();
            expect(result.skins[0].localizedNames).toBeTruthy();
            expect(result.skins[0].name).toBeTruthy();
        }

        expect(result.sprayLevels).toBeTruthy();
        if (result.sprayLevels.length > 0) {
            expect(result.sprayLevels[0].assetName).toBeTruthy();
            expect(result.sprayLevels[0].localizedNames).toBeTruthy();
            expect(result.sprayLevels[0].name).toBeTruthy();
        }

        expect(result.sprays).toBeTruthy();
        if (result.sprays.length > 0) {
            expect(result.sprays[0].assetName).toBeTruthy();
            expect(result.sprays[0].localizedNames).toBeTruthy();
            expect(result.sprays[0].name).toBeTruthy();
        }

        expect(result.version).toBeTruthy();

        expect(result.acts).toBeTruthy();
        if (result.acts.length > 0) {
            expect(result.acts[0].id).toBeTruthy();
            expect(result.acts[0].isActive).toBeDefined();
            expect(result.acts[0].localizedNames).toBeTruthy();
            expect(result.acts[0].name).toBeTruthy();
        }
    });
});

describe('VAL-MATCH-V1', () => {
    test('getMatchById w/o Prod Key', async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        await instance.MatchV1.getMatchById('123').catch((err: RiotAPIError) => {
            expect(err).toBeTruthy();
            expect(err.status_code).toBeTruthy();
            expect(err.status_code).not.toEqual(200);
            expect(err.message).toBeTruthy();
            expect(err.request).toBeTruthy();
        });
    });

    test('getMatchesByPuuid w/o Prod Key', async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        await instance.MatchV1.getMatchesByPuuid('00000000-0000-0000-0000-000000000000').catch((err: RiotAPIError) => {
            expect(err).toBeTruthy();
            expect(err.status_code).toBeTruthy();
            expect(err.status_code).not.toEqual(200);
            expect(err.message).toBeTruthy();
            expect(err.request).toBeTruthy();
        });
    });

    test('getRecentMatches w/o Prod Key', async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        await instance.MatchV1.getRecentMatches(Queue.Competitive).catch((err: RiotAPIError) => {
            expect(err).toBeTruthy();
            expect(err.status_code).toBeTruthy();
            expect(err.status_code).not.toEqual(200);
            expect(err.message).toBeTruthy();
            expect(err.request).toBeTruthy();
        });
    });
});

describe('VAL-STATUS-V1', () => {
    test('getPlatformData', async () => {
        const instance = new API(Regions.NA, API_KEY, Regions.ASIA);
        const data = await instance.StatusV1.getPlatformData();
        expect(data).toBeTruthy();
    });
});

describe('VAL-RANKED-V1', () => {
    test('getLeaderboardsByAct', async () => {
        // No valid test case yet
    });
});
