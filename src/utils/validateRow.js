import { questions } from "../db.js"

export const validateRow = (row) => {
    const {
        Q1_pos1, 
        Q1_pos2,
        Q1_pos3, 
        Q1_pos4, 
        Q1_pos5, 
        Q2_options, 
        Q2_others
    } = row
    const Q1 = [Q1_pos1, Q1_pos2, Q1_pos3, Q1_pos4, Q1_pos5]
    Q1.forEach(q => {
        if (q && !questions.skills.includes(q)) {
            throw new Error({message: `${q} is not a valid option`})
        }
    })
    const Q1Set = new Set(Q1)
    if (Q1Set.length < Q1.length) {
        throw new Error({message: `Some of the options on Q1 are repeated`})
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