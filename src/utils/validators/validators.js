

export const maxLength = (maxLength) => (value) => {
    return value.length < maxLength ? undefined : "text too big";
}

export const required = (value) => {
    return value ? undefined : "Field is required";
}