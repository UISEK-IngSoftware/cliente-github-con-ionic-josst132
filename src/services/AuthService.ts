const TOKEN_KEY = 'github_auth_token';
const USENAME_KEY= 'github_auth_username';

class AuthService {
    login (username: string, token: string) {
        if (username && token) {
            this.logout();
            localStorage.setItem(USENAME_KEY, username);
            localStorage.setItem(TOKEN_KEY, token);
            return true;
        }
        return false;
    }
    logout () {
        localStorage.removeItem(USENAME_KEY);
        localStorage.removeItem(TOKEN_KEY);
    }
    isAuthenticated (): boolean {
        return localStorage.getItem(TOKEN_KEY) !== null
            && localStorage.getItem(USENAME_KEY) !== null;
    }
    getToken () {
        return localStorage.getItem(TOKEN_KEY);
    }
    getUsername () {
        return localStorage.getItem(USENAME_KEY);
    }
    getAuthHeader (){
        const token = this.getToken();
        const username = this.getUsername();
        if (token && username){
            return "Basic " + btoa(username + ":" + token);
        }
        return null;
    }
}
export default new AuthService();