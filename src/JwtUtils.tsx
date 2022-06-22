import jwtDecode from 'jwt-decode';

interface TokenList {
    exp: number;
    sub: string;
    nickname: string;
    userid: number;
}

export class jwtUtils {
    static isAuth(token: string) {
        if (!token) {
            return false;
        }
        const decoded: TokenList = jwtDecode(token);
        if (decoded.exp > new Date().getTime() / 1000) {
            return true;
        } else {
            return false;
        }
    }
    //
    static getId(token: string) {
        const decoded: TokenList = jwtDecode(token);
        return decoded.sub;
    }
    static getNickname(token: string) {
        const decoded: TokenList = jwtDecode(token);

        return decoded.nickname;
    }
    static userId(token: string) {
        const decoded: TokenList = jwtDecode(token);

        return decoded.userid;
    }
}
