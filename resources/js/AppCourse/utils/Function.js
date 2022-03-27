import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import client from "../../api/client";
import { logout } from "../redux/features/user/userSlice";



export const logoutfetch = async () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    client.post('/logout').then(res => {
        localStorage.removeItem('user');
        dispatch(logout());
        navigate('/cours', { replace: true });
    })
}
