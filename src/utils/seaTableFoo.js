import axios from "axios";

export const getBaseToken = async (api_token) => {
    const options = {
    method: 'GET',
    url: 'https://cloud.seatable.io/api/v2.1/dtable/app-access-token/',
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${api_token}`
    }
    };

    try {
        const response = await axios.request(options)
        const { data } = response
        return data

    } catch (error) {
        throw new Error({message: error.message});
    }
}

export const getMetadata = async ({base_token, base_uuid}) => {
    
    const options = {
    method: 'GET',
    url: `https://cloud.seatable.io/dtable-server/api/v1/dtables/${base_uuid}/metadata/`,
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${base_token}`
    }
    };

    try {
        const response = await axios.request(options)
        const { data } = response
        return data

    } catch (error) {
        throw new Error({message: error.message});
    }
}

export const postNewEntry = async ({base_token, base_uuid, row, table_name}) => {
    // row = { Q1_pos1, Q1_pos2, Q1_pos3, Q1_pos4, Q1_pos5, Q2_options, Q2_others }
    const options = {
    method: 'POST',
    url: `https://cloud.seatable.io/dtable-server/api/v1/dtables/${base_uuid}/rows/`,
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${base_token}`,
    },
    data: {
        row,
        table_name,
    }
    };

    try {
        const response = await axios.request(options)
        const { data } = response
        return data

    } catch (error) {
        throw new Error({message: error.message});
    }
}

