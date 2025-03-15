import request from '@/utils/request';;

const auth = {
    // 用户登录
    login(data) {
        return request.post(`/login`,data);
    },
    // 用户注册
    register(data) {
        return request.post(`/register`,data);
    }
};

export default auth;
