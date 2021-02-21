import axios from "axios";
import apiKey from '../api-key';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com//api/1.0/",
    headers: {
        "API-KEY": apiKey,
    },
});

export const userAPI = {
    followUser: (id) => {
        return instance.post("follow/" + id).then(response => response.data);
    },
    unFollowUser: (id) => {
        return instance.delete("follow/" + id).then(response => response.data);
    },
    getUsers: (page, count) => {
        return instance.get("users", {
            params: {
                page: page,
                count: count,
            },

        }).then(response => response.data)
    },
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get("profile/" + userId).then(response => response.data);
    },
    getStatus: (userId) => {
        return instance.get("profile/status/" + userId).then(response => response.data);
    },
    updateStatus: (status) => {
        return instance.put("profile/status", { status: status }).then(response => response.data);
    }
}

export const authAPI = {
    me: () => {
        return instance.get("auth/me")
            .then(response => response.data)
    },

    login: (email, password, rememberMe = false) => {
        return instance.post("auth/login", { email, password, rememberMe })
            .then(response => response.data)
    },
    logout: () => {
        return instance.delete("auth/login")
            .then(response => response.data)
    }
}

