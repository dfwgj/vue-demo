import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';

export const userStore = defineStore('userStore', {
    state: () => ({
        userId: null,
        account: null,
        nickName: null
    }),
    actions: {
        // 解密 token 并填充用户信息
        decodeToken() {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwtDecode(token); // 解密 token
                this.userId = decodedToken.userId;
                this.account = decodedToken.account;
                this.nickName = decodedToken.nickName;
            }
        },
        //清除用户信息
        clearUserInfo() {
            this.userId = null;
            this.account = null;
            this.nickName = null;
        }
    }
});
