import axios from "axios"

export default axios.create({
    baseURL: document.getElementsByTagName("META")[3].content + "/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
