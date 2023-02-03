import {axiosRequest} from "../utils/axiosConfig";
import {requestEndpoints} from "./endpoints";

export const commentRequest = {
    getAll: () => axiosRequest.get(requestEndpoints.comments),
    addComment: (data) => axiosRequest.post(requestEndpoints.comments,data)
}