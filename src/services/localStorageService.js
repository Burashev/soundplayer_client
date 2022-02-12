export default {
    getVolume() {
        return +(localStorage.getItem('volume') ?? 1);
    },
    setVolume(volume) {
        localStorage.setItem('volume', volume)
    },
    setToken(token) {
        localStorage.setItem('token', token);
    },
    getToken() {
        return localStorage.getItem('token') ?? '';
    },
    setUserObject(userObject) {
        localStorage.setItem('userObject', JSON.stringify(userObject))
    },
    getUserObject() {
        return JSON.parse(localStorage.getItem('userObject'))
    }
}