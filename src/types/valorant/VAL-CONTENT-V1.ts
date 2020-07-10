import { LocalizedNamesDto } from '../general';

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
    characters: ContentItemDto[];

    /**
     * Maps List
     */
    maps: ContentItemDto[];

    /**
     * Chromas List
     */
    chromas: ContentItemDto[];

    /**
     * Weapon Skins List
     */
    skins: ContentItemDto[];

    /**
     * Weapon Skin Levels List
     */
    skinLevels: ContentItemDto[];

    /**
     * Equipments List
     */
    equips: ContentItemDto[];

    /**
     * Gamemodes List
     */
    gameModes: ContentItemDto[];

    /**
     * Spray Paints List
     */
    sprays: ContentItemDto[];

    /**
     * Spray Paints Level List
     */
    sprayLevels: ContentItemDto[];

    /**
     * Weapon Charms List
     */
    charms: ContentItemDto[];

    /**
     * Weapon Charm Levels List
     */
    charmLevels: ContentItemDto[];

    /**
     * Player Cards List
     */
    playerCards: ContentItemDto[];

    /**
     * Player Title List
     */
    playerTitles: ContentItemDto[];
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

export { ContentDTo, ContentItemDto };
