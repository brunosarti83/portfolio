import axios from "axios";

export const getBaseToken = (api_token) => {
    const options = {
    method: 'GET',
    url: 'https://cloud.seatable.io/api/v2.1/dtable/app-access-token/',
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${api_token}`
    }
    };

    axios
    .request(options)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}

export const getMetadata = (base_token, base_uuid) => {
    
    const options = {
    method: 'GET',
    url: `https://cloud.seatable.io/dtable-server/api/v1/dtables/${base_uuid}/metadata/`,
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${base_token}`
    }
    };

    axios
    .request(options)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}

