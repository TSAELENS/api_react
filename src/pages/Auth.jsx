import { useState, useContext } from "react";
import { tokensContext } from "../provider";

const Auth = () => {
	const [state, dispatch] = useContext(tokensContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		// Effectuez ici la logique d'authentification en utilisant les valeurs de `username` et `password`

		// Exemple de requête d'authentification
		if (username === "admin" && password === "password") {
			// Authentification réussie, mettez à jour le contexte avec les informations d'authentification
			dispatch({ type: "LOGIN", payload: { username } });
		} else {
			// Authentification échouée, affichez un message d'erreur ou effectuez d'autres actions
			console.log("Identifiant ou mot de passe incorrect");
		}
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleLogin}>
				<label>
					Username:
					<input type="text" value={username} onChange={handleUsernameChange} />
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
