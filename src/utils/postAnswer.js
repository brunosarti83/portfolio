import axios from "axios";
import { getBaseToken, postNewEntry } from "./seaTableFoo.js";
import { api_token } from "../db.js";
import { validateRow } from "./validateRow.js";

// MISSING ALL VALIDATIONS
export const postAnswer = async ({ row, table_name }) => {
    try {
        validateRow(row)
        const baseData = await getBaseToken(api_token)
        const {access_token:base_token, dtable_uuid:base_uuid} = baseData
        const response = await postNewEntry({ base_token, base_uuid, row, table_name })
        return response

    } catch (error) {
        throw new Error(error.message)
    }
}
