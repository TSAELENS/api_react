import { useState, useContext } from "react";
import { tokensContext } from "../provider";

const Auth = () => {
	const [state, dispatch] = useContext(tokensContext);
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");

	const handleMailChange = (e) => {
		setMail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		try {
			fetch("http://localhost:3000/api/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: {
					mail: mail,
					password: password,
				},
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleLogin} className="post">
				<label>
					Mail:
					<input type="text" value={mail} onChange={handleMailChange} />
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default Auth;
