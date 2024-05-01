const TOKEN = 'token'

export const setToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN))
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN)
}