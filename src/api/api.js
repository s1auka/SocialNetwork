import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com//api/1.0/",
    headers: {
        "API-KEY": "aea2f3f0-bccb-4d40-b4d3-b82ab30e1c09",
    },
});

export const userAPI = {
    followUser: (id) => {
        return instance.post("follow/" + id).then(response => response.data);
    },
    unFollowUser: (id) => {
        return instance.delete("follow/" + id).then(response => response.data);
    },
    getProfile: (userId) => {
        return instance.get("profile/" + userId).then(response => response.data);
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

export const authAPI = {
    me: () => {
        return instance.get("auth/me")
            .then(response => response.data)
    }
}