import axios from 'axios';
import { Region } from '../types/region';
import Regions from './Regions';
import AccountV1 from './riot/ACCOUNT-V1';
import ContentV1 from './valorant/VAL-CONTENT-V1';
import MatchV1 from './valorant/VAL-MATCH-V1';

class API {
    public AccountV1 = new AccountV1(this);
    public ContentV1 = new ContentV1(this);
    public MatchV1 = new MatchV1(this);

    #accountRegion: Region;
    #key: string = '';
    #originalRegion: Region | null = null;
    #region: Region;

    /**
     * @constructor
     *
     * @param {Region} region Target Region: APAC | BR | EU | KR | LATAM | NA | PBE1
     * @param {string} key The API Key registered at https://developer.riotgames.com/
     * @param {Region} accountRegion Target Region for Account API: AMERICAS | ASIA | EUROPE
     * @return {this} the API instance
     */
    constructor(region: Region, key: string, accountRegion?: Region) {
        if (region === null) {
            throw new Error('No region is classified');
        }
        if (key.length === 0) {
            throw new Error('No key is classified');
        }

        if (accountRegion === undefined) {
            this.#accountRegion = Regions.AMERICAS;
        } else {
            this.#accountRegion = accountRegion;
        }

        this.#region = region;
        this.#key = key;
    }

    public get request() {
        const request = axios.create({
            baseURL: `https://${this.#region.endpoint}.api.riotgames.com/`,
            headers: {
                'X-Riot-Token': this.#key,
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        request.interceptors.response.use(
            (response) => {
                if (this.#originalRegion !== null) {
                    this.#region = this.#originalRegion;
                    this.#originalRegion = null;
                }

                return response.data;
            },
            (error) => {
                if (this.#originalRegion !== null) {
                    this.#region = this.#originalRegion;
                    this.#originalRegion = null;
                }

                if (error.response?.data?.status) {
                    console.error(
                        `Server rejected request: ${error.response.data.status.status_code} ${error.response.data.status.message}\nPlease refer to the Riot API Documentation for the error code https://developer.riotgames.com/docs/portal#web-apis_response-codes`,
                    );
                }

                throw error;
            },
        );

        return request;
    }

    public setTempRegion(region: Region): this {
        this.#originalRegion = this.#region;
        this.#region = region;
        return this;
    }

    /**
     * The target region when querying the API
     */
    public get region(): Region {
        return this.#region;
    }

    /**
     * The target region when querying the API
     */
    public get accountRegion(): Region {
        return this.#accountRegion;
    }
}

export default API;
