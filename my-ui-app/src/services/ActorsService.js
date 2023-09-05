import axios from 'axios';

const ACTORS_API_BASEURL = "http://localhost:8080/api/v1/actors";

class ActorsService {
    getActors() {
        return axios.get(ACTORS_API_BASEURL);
    }
}

export default new ActorsService();