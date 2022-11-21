import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
    let token = localStorage.getItem('token')
    if (!token) {
        token = uuidv4()
        localStorage.setItem('token', token)
    }
    return token
}