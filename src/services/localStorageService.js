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
    }
}