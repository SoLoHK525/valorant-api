import { LocalizedNamesDto } from "../general";

/**
 * Response of the Content V1 Endpoint
 * 
 */
interface ContentDTo {
    /**
     * API Version
     */
    version: string;

    /**
     * Characters List
     */
    characters: Array<ContentItemDto>;

    /**
     * Maps List
     */
    maps: Array<ContentItemDto>;

    /**
     * Chromas List
     */
    chromas: Array<ContentItemDto>;

    /**
     * Weapon Skins List
     */
    skins: Array<ContentItemDto>;

    /**
     * Weapon Skin Levels List
     */
    skinLevels: Array<ContentItemDto>;

    /**
     * Equipments List
     */
    equips: Array<ContentItemDto>;

    /**
     * Gamemodes List
     */
    gameModes: Array<ContentItemDto>;

    /**
     * Spray Paints List
     */
    sprays: Array<ContentItemDto>;

    /**
     * Spray Paints Level List
     */
    sprayLevels: Array<ContentItemDto>;

    /**
     * Weapon Charms List
     */
    charms: Array<ContentItemDto>;

    /**
     * Weapon Charm Levels List
     */
    charmLevels: Array<ContentItemDto>;

    /**
     * Player Cards List
     */
    playerCards: Array<ContentItemDto>;

    /**
     * Player Title List
     */
    playerTitles: Array<ContentItemDto>;
}

interface ContentItemDto {
    /**
     * Name of the item
     */
    name: string;

    /**
     * Localized Names of the item
     */
    localizedNames: LocalizedNamesDto;

    /**
     * Asset Name of the item
     */
    assetName: string;
}

export {
    ContentDTo,
    ContentItemDto
}