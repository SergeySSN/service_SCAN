import { HeaderUnlog } from "./header_unlog";
import { HeaderLogged } from "./header_logged";
import MyContext from "./myContext";
import {useContext} from "react";


export const Header = () => {
	const values = useContext(MyContext)
	if (values.token === null || values.token === "") {
		return <HeaderUnlog />
	}
	else {
		return <HeaderLogged />
	}
}