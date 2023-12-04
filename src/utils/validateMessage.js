export const validateMessage = (data) => {
    const errors = {}
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!mailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email'
    }
    return errors
}