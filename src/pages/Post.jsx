import { useState, useContext } from "react";
import { tokensContext } from "../provider";

const Post = () => {
	const [state, dispatch] = useContext(tokensContext);

	const [formData, setFormData] = useState({
		title: "",
		body: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("https://example.com/api/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// La requête POST a réussi
				console.log("Publication réussie !");
				// Réinitialiser le formulaire
				setFormData({
					title: "",
					body: "",
				});
			} else {
				// La requête POST a échoué
				console.log("Erreur lors de la publication.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>Post Page</h1>

			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Body:
					<textarea
						name="body"
						value={formData.body}
						onChange={handleChange}
					></textarea>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Post;
