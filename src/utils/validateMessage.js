export const validateMessage = (data) => {
    const errors = {
        email: '',
        message: ''
    }
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!mailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email'
    }
    if (!data.message.length) {
        errors.message = 'Please write the message you wish to send'
    }
    return errors
}