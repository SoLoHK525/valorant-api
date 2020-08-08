import { API } from '..';

class Controller {
    private instance: API;
    protected get request() {
        return this.instance.request;
    }

    constructor(instance: API) {
        this.instance = instance;
    }
}

export default Controller;
