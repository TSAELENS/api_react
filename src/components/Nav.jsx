import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { tokensContext } from "../provider";

const Nav = () => {
	const [state, dispatch] = useContext(tokensContext);

	return (
		<nav>
			<div>
				<NavLink to="/" exact>
					Auth
				</NavLink>
				{/* {sessionStorage.getItem("Authorization") && (
					<> */}
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/post">POST</NavLink>
				{/* </>
				)} */}
			</div>
		</nav>
	);
};

export default Nav;
