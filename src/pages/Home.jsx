import { useContext, useState, useEffect } from "react";
import { tokensContext } from "../provider";

const Home = () => {
	const [state, dispatch] = useContext(tokensContext);

	const [characterDetails, setCharacterDetails] = useState([]);

	useEffect(() => {
		const fetchPeople = async () => {
			try {
				const response = await fetch("https://swapi.dev/api/people/");
				const data = await response.json();

				// Récupérer les détails des personnages individuels
				const characterDetailsPromises = data.results.map(async (person) => {
					const response = await fetch(person.url);
					return response.json();
				});

				const characterDetailsData = await Promise.all(
					characterDetailsPromises
				);
				setCharacterDetails(characterDetailsData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchPeople();
	}, []);

	return (
		<>
			<h1>Home Page</h1>

			<div>
				<h2>Characters from Star Wars</h2>

				<section>
					{characterDetails.map((character, index) => (
						<article key={index} className="post">
							<h2>{character.name}</h2>
							<p>Height: {character.height}</p>
							<p>Mass: {character.mass}</p>
							<p>Hair Color: {character.hair_color}</p>
							{/* Afficher d'autres informations souhaitées */}
						</article>
					))}
				</section>
			</div>
		</>
	);
};

export default Home;
