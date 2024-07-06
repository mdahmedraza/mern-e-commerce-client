export const shortenText = (text, n) => {
    if(text.length > n) {
        const shortenText = text.substring(0, n).concat('...');
        return shortenText;
    }
    return text;
}

// validate email
export const validateEmail = (email) => {
    return email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
}