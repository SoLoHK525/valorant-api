import axios, { AxiosInstance } from 'axios';

import { Region } from '../types/region';

import AccountV1 from './riot/ACCOUNT-V1';
import ContentV1 from './valorant/VAL-CONTENT-V1';
import MatchV1 from './valorant/VAL-MATCH-V1';
import Regions from './Regions';

class API {
    public AccountV1 = new AccountV1(this);
    public ContentV1 = new ContentV1(this);
    public MatchV1 = new MatchV1(this);

    public request: AxiosInstance;

    private key: string = '';
    private region: Region = Regions.NA;

    /**
     * @constructor
     *
     * @param {Region} region Target Region: APAC | BR | EU | KR | LATAM | NA | PBE1
     * @param {string} key The API Key registered at https://developer.riotgames.com/
     * @return {this} the API instance
     */
    constructor(region: Region, key: string) {
        this.request = axios.create();

        if (region === null) {
            throw new Error('No region is classified');
        }
        if (key.length === 0) {
            throw new Error('No key is classified');
        }

        this.region = region;
        this.key = key;

        this.request.interceptors.request.use((request) => {
            request.baseURL = `https://${this.region.endpoint}.api.riotgames.com/`;
            request.headers['X-Riot-Token'] = this.key;
            request.headers['Content-Type'] = 'application/json;charset=UTF-8';

            return request;
        });

        this.request.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error.response?.data?.status) {
                    console.error(
                        `Server rejected request: ${error.response.data.status.status_code} ${error.response.data.status.message}\nPlease refer to the Riot API Documentation for the error code https://developer.riotgames.com/docs/portal#web-apis_response-codes`,
                    );
                }

                throw error;
            },
        );
    }

    /**
     * Get the target region when querying the API
     *
     * @return {Region} the defined region
     */
    public getRegion(): Region {
        return this.region;
    }
}

export default API;
