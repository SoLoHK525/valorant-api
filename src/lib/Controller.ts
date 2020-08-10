import { API } from '..';

abstract class Controller {
    readonly #instance: API;
    protected get request() {
        return this.#instance.request;
    }

    constructor(instance: API) {
        this.#instance = instance;
    }

    protected get instance(){
        return this.#instance;
    }
}

export default Controller;
