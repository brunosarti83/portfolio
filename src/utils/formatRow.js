export const formatRow = (form) => {
    // const [form, setForm] = useState({
    //     question1: [],
    //     question2: [[], { other: "" }],
    // });

    const row = {
        Q1_pos1: form.question1[0] || null, 
        Q1_pos2: form.question1[1] || null,
        Q1_pos3: form.question1[2] || null, 
        Q1_pos4: form.question1[3] || null, 
        Q1_pos5: form.question1[4] || null, 
        Q2_options: form.question2[0], 
        Q2_others: form.question2[1].other
    }

    return row
}