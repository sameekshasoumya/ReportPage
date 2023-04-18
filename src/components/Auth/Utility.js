import * as actions from "../../store/actions/auth";
import axios from "../../axios";

export const logout = async (event, dispatch) => {
    event.preventDefault();
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    localStorage.removeItem('type');
    dispatch(actions.logout());
}