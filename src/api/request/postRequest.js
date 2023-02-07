import React from 'react';

import {axiosRequest} from "../../utils/axiosConfig";
import {requestLinks} from "../endpoints";


export const postRequest =  {
   getPostById: (id) => axiosRequest.get(requestLinks.postById(id))
}
