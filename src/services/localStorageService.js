export default {
    getVolume() {
        return localStorage.getItem('volume') ?? 1;
    },
    setVolume(volume) {
        localStorage.setItem('volume', volume)
    }
}