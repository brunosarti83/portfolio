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
            throw new Error(`${q} is not a valid option for question 1`)
        }
    })
    const Q1Set = new Set(Q1)
    if (Q1Set.size < Q1.length) {
        throw new Error(`Some of the options on Q1 are repeated`)
    }
    if (!Array.isArray(Q2_options)) {
        throw new Error(`Q2_options must be an array`)
    }
    Q2_options.forEach(opt => {
        if (!questions.not.includes(opt)) {
            throw new Error(`${opt} is not a valid option for question 2`)
        }
    })
    return 'OK'
}

