import axios from "axios";
import { getBaseToken, postNewEntry } from "./seaTableFoo.js";
import { api_token } from "../db.js";

// MISSING ALL VALIDATIONS
export const postAnswer = async ({ row, table_name }) => {
    try {
        const baseData = await getBaseToken(api_token)
        const {access_token:base_token, dtable_uuid:base_uuid} = baseData
        const response = await postNewEntry({ base_token, base_uuid, row, table_name })
        return response

    } catch (error) {
        throw new Error({message: error.message})
    }
}

const row = {
    Q1_pos1:"React", 
    Q1_pos2:"Node", 
    Q1_pos3:"Typescript", 
    Q1_pos4:"CSS / Styling", 
    Q1_pos5:"Databases", 
    Q2_options: ["Angular"], 
    Q2_others: ""
}

const table_name = 'Answers'
const result = await postAnswer({row, table_name})
console.log(result)