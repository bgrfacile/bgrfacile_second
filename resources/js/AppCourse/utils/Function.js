import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import client from "../../api/client";
import { logout } from "../redux/features/user/userSlice";



export const logoutfetch = async () => {
    console.log("deconexion");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    client.post('/logout').then(res => {
        localStorage.removeItem('user');
        dispatch(logout());
        navigate('/cours', { replace: true });
    })
}

export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    // return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
}

export const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
}

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
