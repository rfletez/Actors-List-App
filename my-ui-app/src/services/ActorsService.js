import axios from 'axios';

const ACTORS_API_BASEURL = "http://localhost:8080/api/v1/actors";

class ActorsService {
    getActors() {
        return axios.get(ACTORS_API_BASEURL);
    }

    createActors(actor) {
        return axios.post(ACTORS_API_BASEURL, actor);
    }

    getActorByID(actorId) {
        return axios.get(ACTORS_API_BASEURL + "/" + actorId)
    }

    updateActor(actor, actorId) {
        return axios.put(ACTORS_API_BASEURL + "/" + actorId, actor);
    }
}

export default new ActorsService();