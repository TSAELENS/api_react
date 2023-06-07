import { useContext, useState, useEffect } from "react";
import { tokensContext } from "../provider";

const Home = () => {
  const [state, dispatch] = useContext(tokensContext);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setPeople(data.results);
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
        <h1>Characters from Star Wars</h1>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
