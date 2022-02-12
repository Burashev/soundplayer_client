import localStorageService from "@/services/localStorageService";
export default {
    userToken: localStorageService.getToken(),
    userObject: localStorageService.getUserObject(),
}