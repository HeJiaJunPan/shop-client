const TOKEN = 'token'

export const setToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN)
}