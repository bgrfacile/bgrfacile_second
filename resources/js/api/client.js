import axios from "axios"

const API_URL = document.getElementsByTagName("META")[3].content + "/api/v1";
const saved = localStorage.getItem("token");

if(saved) {
    axios.defaults.headers.common["Authorization"] = saved;
}
export default axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
