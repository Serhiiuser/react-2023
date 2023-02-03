import axios from "axios";
import {baseURL} from "../requests/endpoints";

export const axiosRequest = axios.create({baseURL});

