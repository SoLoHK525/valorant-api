import axios, { AxiosResponse } from 'axios';
import { Region } from '../types/region';
import Regions from './Regions';
import AccountV1 from './riot/ACCOUNT-V1';
import ContentV1 from './valorant/VAL-CONTENT-V1';
import MatchV1 from './valorant/VAL-MATCH-V1';
import StatusV1 from './valorant/VAL-STATUS-V1';

const ResponseInterpreter = (response: AxiosResponse) => {
    return response.data;
}

export interface RiotAPIError {
    request: {
        method: string;
        path: string;
        header: string;
        url: string;
    },
    status_code: number;
    message: string;
}

const ErrorInterpreter = (error: any): Promise<RiotAPIError> => {
    const { method, path, _header, res } = error.request;
    switch (error.response.status) {
        case 400:
        case 401:
        case 403:
        case 404:
        case 405:
        case 415:
        case 429:
        case 500:
        case 502:
        case 503:
        case 504:
            return Promise.reject({
                request: {
                    method,
                    path,
                    header: _header,
                    url: res.responseUrl
                },
                status_code: error.response.status,
                message: error.response.data.status.message,
            });
        default:
            return Promise.reject({
                request: {
                    method,
                    path,
                    header: _header,
                    url: res.responseUrl
                },
                status_code: error.response.status,
                message: error.response?.data?.status?.message || "Unknown Error",
            });
    }
}

class API {
    public AccountV1 = new AccountV1(this);
    public ContentV1 = new ContentV1(this);
    public MatchV1 = new MatchV1(this);
    public StatusV1 = new StatusV1(this);

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

    public get accountRequest() {
        const request = axios.create({
            baseURL: `https://${this.#accountRegion.endpoint}.api.riotgames.com/`,
            headers: {
                'X-Riot-Token': this.#key,
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        request.interceptors.response.use(ResponseInterpreter, ErrorInterpreter);

        return request;
    }

    public get request() {
        const request = axios.create({
            baseURL: `https://${this.#region.endpoint}.api.riotgames.com/`,
            headers: {
                'X-Riot-Token': this.#key,
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        request.interceptors.response.use(ResponseInterpreter, ErrorInterpreter);

        return request;
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
