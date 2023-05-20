import { Navigate } from "react-router-dom";
import MyContext from "../components/myContext";
import {useContext} from "react";

const RequireAuth = ({children}) => {
	const value = useContext(MyContext);
	const token = value.token;
	if (!token) {
		return <Navigate to='/login'/>
	}
	return children
}

export {RequireAuth}